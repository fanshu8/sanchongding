/**
 * Video Embed Parser - Support for multiple video platforms
 * Supports: YouTube, Bilibili, and generic iframe embeds
 */

export interface VideoEmbed {
  platform: 'youtube' | 'bilibili' | 'generic';
  embedUrl: string;
  originalUrl: string;
}

/**
 * Parse video URL and generate embed information
 */
export function parseVideoUrl(url: string): VideoEmbed | null {
  if (!url) return null;

  // YouTube patterns
  const youtubePatterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/live\/)([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of youtubePatterns) {
    const match = url.match(pattern);
    if (match) {
      const videoId = match[1];
      return {
        platform: 'youtube',
        embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`,
        originalUrl: url,
      };
    }
  }

  // Bilibili patterns
  // Supports:
  // - https://www.bilibili.com/video/BV1xx411c7mD
  // - https://www.bilibili.com/video/av12345
  // - https://live.bilibili.com/12345
  const bilibiliVideoPattern = /bilibili\.com\/video\/(BV[a-zA-Z0-9]+|av\d+)/;
  const bilibiliLivePattern = /live\.bilibili\.com\/(\d+)/;

  const bvMatch = url.match(bilibiliVideoPattern);
  if (bvMatch) {
    const videoId = bvMatch[1];
    // For BV videos
    if (videoId.startsWith('BV')) {
      return {
        platform: 'bilibili',
        embedUrl: `https://player.bilibili.com/player.html?bvid=${videoId}&high_quality=1&autoplay=1`,
        originalUrl: url,
      };
    }
    // For av videos
    const aid = videoId.replace('av', '');
    return {
      platform: 'bilibili',
      embedUrl: `https://player.bilibili.com/player.html?aid=${aid}&high_quality=1&autoplay=1`,
      originalUrl: url,
    };
  }

  const liveMatch = url.match(bilibiliLivePattern);
  if (liveMatch) {
    const roomId = liveMatch[1];
    return {
      platform: 'bilibili',
      embedUrl: `https://live.bilibili.com/${roomId}`,
      originalUrl: url,
    };
  }

  // Generic iframe embed - for other platforms
  // If URL looks like a video platform, treat as generic embed
  if (url.includes('player.') || url.includes('embed') || url.includes('iframe')) {
    return {
      platform: 'generic',
      embedUrl: url,
      originalUrl: url,
    };
  }

  return null;
}

/**
 * Check if URL is a live stream (vs recorded video)
 */
export function isLiveStream(url: string): boolean {
  if (!url) return false;

  // YouTube live indicators
  if (url.includes('youtube.com/live/') || url.includes('youtube.com/watch')) {
    return true; // Assume live for now - YouTube doesn't expose this easily
  }

  // Bilibili live
  if (url.includes('live.bilibili.com')) {
    return true;
  }

  return false;
}

/**
 * Get platform display name
 */
export function getPlatformName(platform: 'youtube' | 'bilibili' | 'generic'): string {
  const names = {
    youtube: 'YouTube',
    bilibili: '哔哩哔哩 / Bilibili',
    generic: 'Video Stream',
  };
  return names[platform];
}
