import Script from 'next/script'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Suncheer Forex",
    "alternateName": "Suncheer Forex",
    "url": "https://sanchongding.com",
    "logo": "https://sanchongding.com/logo.png",
    "description": "专注于数字货币交易的职业交易员培训平台，提供系统化加密货币交易培训、实战训练和资金支持。",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "2424802244@qq.com"
    },
    "offers": {
      "@type": "Offer",
      "name": "数字货币交易员培训",
      "description": "30个工作日系统化数字货币交易培训，通过考核后获得资金支持",
      "category": "数字货币交易员培训"
    }
  }

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "数字货币交易员培训计划",
    "description": "30个工作日系统化培养数字货币交易员，包括规则学习、盈利练习、小额实盘、大额矩阵四个阶段",
    "provider": {
      "@type": "Organization",
      "name": "Suncheer Forex",
      "url": "https://sanchongding.com"
    },
    "educationalLevel": "专业级",
    "timeRequired": "P30D",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "156"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "什么是 Suncheer Forex 数字货币交易员培训？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "我们是一个专注于数字货币交易的职业交易员培训平台。我们致力于用专业的方法筛选和培养真正适合加密货币市场的交易人才。我们将在30个工作日内判断新人是否是做数字货币交易的可塑之才。"
        }
      },
      {
        "@type": "Question",
        "name": "培训是免费的吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "是的，培训过程不收取学费。但你需要付出的是时间和精力。"
        }
      },
      {
        "@type": "Question",
        "name": "通过考核后可以获得什么？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "通过考核后，我们会为你分配资金：小额实盘20美金仓位配资100美金，大额实盘根据小额实盘表现设定。分润比例60%-90%，随能力提升而提高。"
        }
      }
    ]
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema)
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
    </>
  )
}
