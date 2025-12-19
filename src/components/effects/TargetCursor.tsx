"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface TargetCursorProps {
  spinDuration?: number;
  hideDefaultCursor?: boolean;
  parallaxOn?: boolean;
}

export default function TargetCursor({
  spinDuration = 2,
  hideDefaultCursor = false,
  parallaxOn = true,
}: TargetCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current!;
    const ring = ringRef.current!;

    const move = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      gsap.to(cursor, { x, y, duration: 0.12, ease: "power3.out" });
      gsap.to(ring, { x, y, duration: 0.2, ease: "power3.out" });
    };

    const spinTl = gsap.timeline({ repeat: -1 });
    spinTl.to(ring, {
      rotate: 360,
      duration: spinDuration,
      ease: "none",
      transformOrigin: "center",
    });

    window.addEventListener("mousemove", move);

    let elements: NodeListOf<HTMLElement> = document.querySelectorAll(".cursor-target");
    const parallax = (e: MouseEvent) => {
      const mx = e.clientX;
      const my = e.clientY;
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (mx - cx) / 30;
        const dy = (my - cy) / 30;
        gsap.to(el, { x: dx, y: dy, duration: 0.3, ease: "power3.out" });
      });
    };
    if (parallaxOn) {
      window.addEventListener("mousemove", parallax);
    }

    let prevCursor: string | null = null;
    if (hideDefaultCursor) {
      prevCursor = document.body.style.cursor;
      document.body.style.cursor = "none";
    }

    return () => {
      window.removeEventListener("mousemove", move);
      if (parallaxOn) window.removeEventListener("mousemove", parallax);
      spinTl.kill();
      if (hideDefaultCursor && prevCursor !== null) {
        document.body.style.cursor = prevCursor;
      }
    };
  }, [spinDuration, hideDefaultCursor, parallaxOn]);

  return (
    <>
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "2px solid rgba(249, 115, 22, 0.8)",
          boxShadow: "0 0 20px rgba(249,115,22,0.3)",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          mixBlendMode: "normal",
        }}
      />
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "rgba(249,115,22,1)",
          boxShadow: "0 0 12px rgba(249,115,22,0.6)",
          pointerEvents: "none",
          zIndex: 10000,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}

