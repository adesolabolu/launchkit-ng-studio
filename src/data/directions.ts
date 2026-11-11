export interface MarketDirection {
  id: string;
  label: string;
  shortTag: string;
  marketFit: string;
  voiceSummary: string;
  keyHook: string;
  brandName: string;
  announcement: string;
  heroTitlePrefix: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  primaryCta: string;
  secondaryCta: string;
  demoUrl: string;
  demoDashboardTitle: string;
  demoDashboardSubtitle: string;
  demoVideoLabel: string;
  demoStatLabel: string;
  demoStatValue: string;
  demoStatTrend: string;
  demoLanguages: string[];
  demoTimeline: {
    step1: string;
    step2: string;
    step3: string;
  };
  trustedLogos: string[];
  howItWorksSectionTitle: string;
  steps: {
    tag: string;
    badgeText: string;
    title: string;
    description: string;
  }[];
  browserSectionLabel: string;
  features: {
    ai: {
      nav: string;
      title: string;
      description: string;
      badgeBottom: string;
    };
    professional: {
      nav: string;
      title: string;
      description: string;
      fileName: string;
      effects: string[];
    };
    multilingual: {
      nav: string;
      title: string;
      description: string;
      stat1Val: string;
      stat1Label: string;
      stat2Val: string;
      stat2Label: string;
      languages: { flag: string; name: string }[];
    };
    collaboration: {
      nav: string;
      title: string;
      description: string;
      campaignName: string;
      campaignMeta: string;
      activities: { user: string; action: string; detail: string }[];
    };
  };
  testimonialsKicker: string;
  testimonialsHeadingPrefix: string;
  testimonialsHeadingHighlight: string;
  testimonialsHeadingSuffix: string;
  testimonials: {
    quote: string;
    highlight1: string;
    quoteMid: string;
    highlight2: string;
    quoteEnd: string;
    name: string;
    role: string;
  }[];
  pricingHeading: string;
  pricingSubheading: string;
  plans: {
    starter: {
      name: string;
      price: string;
      period: string;
      desc: string;
      features: string[];
      missingFeature: string;
      cta: string;
    };
    pro: {
      badge: string;
      name: string;
      price: string;
      period: string;
      desc: string;
      features: string[];
      cta: string;
    };
    enterprise: {
      name: string;
      price: string;
      desc: string;
      features: string[];
      cta: string;
    };
  };
  trustNote: string;
  trustBadges: string[];
  faqKicker: string;
  faqs: { q: string; a: string }[];
  footerTagline: string;
}

export const MARKET_DIRECTIONS: MarketDirection[] = [
  {
    id: 'naija-commerce',
    label: '1. Naija Social Commerce & Vendors',
    shortTag: 'WhatsApp / IG / TikTok Sellers',
    marketFit: 'Best for Lagos/Abuja/PH online vendors, fashion brands, gadget stores & SMEs selling on WhatsApp, Instagram & TikTok.',
    voiceSummary: 'Warm, energetic, relatable Nigerian commercial tone — practical, hustle-smart, zero tech jargon, focused on closing sales fast.',
    keyHook: 'Replaces "DM for price" friction with instant WhatsApp Status videos, IG Reels & authentic Nigerian voiceovers.',
    brandName: 'SabiLaunch AI',
    announcement: 'Now accepting Naira cards & Paystack — Join 12,000+ Nigerian businesses',
    heroTitlePrefix: 'Turn Phone & Screen Videos into ',
    heroTitleHighlight: 'Sell-Out Launches',
    heroSubtitle:
      'SabiLaunch AI turns one rough product or screen video into sharp WhatsApp Status clips, IG Reels, price catalogs, and Nigerian-accent voiceovers—in 3 minutes.',
    primaryCta: 'Start Free (No Dollar Card Needed)',
    secondaryCta: 'Chat on WhatsApp',
    demoUrl: 'sabilaunch.ng/lekki-store-launch',
    demoDashboardTitle: 'SabiLaunch Studio',
    demoDashboardSubtitle: 'WhatsApp & IG Campaign Pack',
    demoVideoLabel: 'WhatsApp Status 30s Split',
    demoStatLabel: 'Orders Closed Today',
    demoStatValue: '142',
    demoStatTrend: '+38 from WhatsApp',
    demoLanguages: ['NG-EN', 'PIDGIN', 'YOR', 'IGB', 'HAU'],
    demoTimeline: {
      step1: 'Caption & Price Overlay (₦)',
      step2: 'Naija Voiceover Synthesis',
      step3: 'WhatsApp Low-Data Export',
    },
    trustedLogos: ['Paystack', 'Flutterwave', 'Moniepoint', 'Chowdeck', 'Bumpa', 'Selar'],
    howItWorksSectionTitle: 'From rough phone recording to customer alerts in minutes',
    steps: [
      {
        tag: 'Step 1',
        badgeText: 'Quick Record',
        title: 'Record your product or screen',
        description:
          'Show your website, Bumpa store, app checkout, or product catalog once. No ring light or noisy background worries.',
      },
      {
        tag: 'Step 2',
        badgeText: 'Naija AI Engine',
        title: 'AI adds Nigerian voice & captions',
        description:
          'Automatically generates natural Lagos English, Pidgin, Yoruba, Igbo, or Hausa voiceovers plus bold Naira price callouts.',
      },
      {
        tag: 'Step 3',
        badgeText: 'WhatsApp Ready',
        title: 'Post to Status, Reels & TikTok',
        description:
          'Download crisp, data-friendly videos pre-split into 30-second WhatsApp Status clips or 9:16 Instagram and TikTok Reels.',
      },
    ],
    browserSectionLabel: 'Works smoothly on every phone and laptop browser in Nigeria',
    features: {
      ai: {
        nav: 'Naija-Trained AI Voice & Script',
        title: 'AI That Actually Understands Nigerian Context',
        description:
          'Foreign AI tools mispronounce Nigerian names, streets, and brands. SabiLaunch AI writes persuasive scripts and speaks with authentic Nigerian cadence—from corporate Victoria Island polish to relatable Pidgin.',
        badgeBottom: 'Naija Speech Engine Active',
      },
      professional: {
        nav: 'Low-Data HD Video Output',
        title: 'Crystal Clear on WhatsApp Without Eating Data',
        description:
          'WhatsApp compression ruins normal videos. Our smart renderer keeps your product text, Naira prices, and UI demos razor-sharp at under 5MB per clip.',
        fileName: 'AsoEbi_Drop_WhatsAppStatus.mp4',
        effects: ['WhatsApp HD Compression', 'Auto Naira Price Tags', 'Background Noise Removal', 'Auto-Split 30s Status'],
      },
      multilingual: {
        nav: 'Speak Every Nigerian Language',
        title: 'Sell From Lagos to Kano, Enugu to London',
        description:
          'Reach customers in the language they trust most. Switch your video voiceover between Nigerian English, Pidgin, Yoruba, Igbo, Hausa, and 45+ diaspora languages in one click.',
        stat1Val: '5+',
        stat1Label: 'Nigerian Languages',
        stat2Val: '18',
        stat2Label: 'Local Voice Styles',
        languages: [
          { flag: '🇳🇬', name: 'Naija English' },
          { flag: '🇳🇬', name: 'Pidgin' },
          { flag: '🇳🇬', name: 'Yorùbá' },
          { flag: '🇳🇬', name: 'Igbo' },
          { flag: '🇳🇬', name: 'Hausa' },
          { flag: '🇬🇧', name: 'UK Diaspora' },
        ],
      },
      collaboration: {
        nav: 'Team & Social Handler Workflow',
        title: 'Built for Founders, Social Handlers & Sales Reps',
        description:
          'Let your social media manager draft launch videos, your sales reps grab WhatsApp broadcast clips, and you approve everything from your phone before it goes live.',
        campaignName: 'Detty December Sales Drop',
        campaignMeta: '6 team members • Active in Lagos',
        activities: [
          { user: 'Tolu added Naira price tags', action: 'on IG Reel Draft', detail: '2m ago' },
          { user: 'Chinedu approved Pidgin voiceover', action: 'WhatsApp Broadcast', detail: '14m ago' },
          { user: 'Zainab exported Hausa version', action: 'Northern Dealer Pack', detail: '45m ago' },
          { user: 'Bolu shared Paystack checkout link', action: 'with Sales Team', detail: '1h ago' },
        ],
      },
    },
    testimonialsKicker: 'Naija Business Stories',
    testimonialsHeadingPrefix: 'Powering daily ',
    testimonialsHeadingHighlight: 'sales & alerts',
    testimonialsHeadingSuffix: ' for fast-growing Nigerian brands.',
    testimonials: [
      {
        quote: 'Before SabiLaunch, editing one product walkthrough took our social handler all day. Now we drop ',
        highlight1: '10 WhatsApp & IG videos',
        quoteMid: ' every week and our ',
        highlight2: 'Paystack orders doubled.',
        quoteEnd: '',
        name: 'Adesuwa Okafor',
        role: 'Founder, Zuri Beauty Lekki',
      },
      {
        quote: 'The Pidgin and Yoruba voiceovers sound ',
        highlight1: '100% natural',
        quoteMid: '—not like stiff foreign robots. Our distributors in Trade Fair and Ibadan understand new stock updates in ',
        highlight2: 'under 2 minutes.',
        quoteEnd: '',
        name: 'Tunde Bakare',
        role: 'MD, NexGen Gadgets Ikeja',
      },
      {
        quote: 'Paying in Naira without hunting for a virtual dollar card saved us so much stress. We saved over ',
        highlight1: '₦1.8M in agency fees',
        quoteMid: ' during our Q4 launch across ',
        highlight2: '4,500+ customers.',
        quoteEnd: '',
        name: 'Chiamaka Eze',
        role: 'Growth Lead, KoboCart NG',
      },
      {
        quote: 'WhatsApp Status used to blur our screen recordings. SabiLaunch keeps our app tutorials ',
        highlight1: 'super sharp at 3MB',
        quoteMid: ' so customers even on 3G networks watch till the end.',
        highlight2: 'Zero complaints.',
        quoteEnd: '',
        name: 'Ibrahim Danjuma',
        role: 'Operations Head, SwiftLogistics Abuja',
      },
      {
        quote: 'We sell to Nigerians at home and in the UK & Canada. Creating one video and getting ',
        highlight1: 'both Naija & UK accents',
        quoteMid: ' instantly helped us scale our ',
        highlight2: 'diaspora orders 3x.',
        quoteEnd: '',
        name: 'Funke Adeyemi',
        role: 'CEO, AsoVilla Fabrics',
      },
    ],
    pricingHeading: 'Naira pricing that respects your hustle',
    pricingSubheading: 'Pay seamlessly with Paystack, bank transfer, or USSD. No dollar card wahala.',
    plans: {
      starter: {
        name: 'Hustle Starter',
        price: '₦0',
        period: '/month',
        desc: 'Perfect for testing your first product launches',
        features: [
          '3 launch video packages per month',
          'WhatsApp HD & 720p exports',
          'Nigerian English & Pidgin voices',
          'AI script & caption generator',
          '30-second WhatsApp Status splitter',
        ],
        missingFeature: 'Custom watermark & brand kit',
        cta: 'Start Free Now',
      },
      pro: {
        badge: 'MOST POPULAR IN NIGERIA',
        name: 'Odogwu Pro',
        price: '₦19,500',
        period: '/month',
        desc: 'For active vendors, creators & growing teams',
        features: [
          'Unlimited product launch videos',
          '4K + WhatsApp Low-Data HD exports',
          'All Nigerian languages (Yoruba, Igbo, Hausa, Pidgin)',
          'Custom logo, Naira price stickers & colors',
          'Background generator noise removal',
          'Direct IG, TikTok & WhatsApp sharing',
          'Priority WhatsApp support',
        ],
        cta: 'Start 14-Day Free Trial',
      },
      enterprise: {
        name: 'Corporate / Agency',
        price: 'Custom',
        desc: 'For banks, fintechs, and marketing agencies',
        features: [
          'Everything in Odogwu Pro, plus:',
          'Dedicated Lagos account manager',
          'Custom brand voice cloning',
          'Multi-client agency workspaces',
          'API & CRM webhook integrations',
          'Corporate invoice & WHT support',
          'Live team onboarding session',
        ],
        cta: 'Talk to Lagos Sales',
      },
    },
    trustNote: 'Trusted by 12,000+ Nigerian founders, vendors & marketing teams',
    trustBadges: ['💳 Paystack & Bank Transfer', '🛡️ 14-Day Money-Back Guarantee', '⚡ Cancel Anytime in 1 Click'],
    faqKicker: 'Questions We Get Asked',
    faqs: [
      {
        q: 'Can I pay in Naira with a regular Nigerian bank card or transfer?',
        a: 'Yes! All our plans are billed in Naira (₦) via Paystack. You can pay with your GTB, Zenith, Access, OPay, Moniepoint card, or direct bank transfer—no virtual dollar card required.',
      },
      {
        q: 'Do the AI voices actually sound Nigerian?',
        a: '100%. We trained our voice models specifically for Nigerian cadence, pronunciation, and warmth. You can pick polished corporate Nigerian English, energetic Lagos commercial tone, Pidgin, Yoruba, Igbo, or Hausa.',
      },
      {
        q: 'Will my videos look blurry when I upload them to WhatsApp Status?',
        a: 'Not anymore. Our "WhatsApp HD Optimizer" pre-compresses and sharpens text so WhatsApp does not crush your video quality, and automatically slices longer videos into clean 30-second Status segments.',
      },
      {
        q: 'What if there is generator or traffic noise when I record?',
        a: 'You don’t even need to use your raw microphone audio—our AI replaces it with a studio-clean voiceover, or cleans out background generator and fan noise in one click.',
      },
      {
        q: 'Do I need a laptop or video editing skills?',
        a: 'Not at all. Record on your laptop or upload a screen recording from your phone, and SabiLaunch AI handles the zooming, scriptwriting, subtitles, and voiceover automatically.',
      },
    ],
    footerTagline:
      'Built for Nigerian builders, vendors, and marketers. From rough recording to nationwide sales in under 10 minutes.',
  },
  {
    id: 'naija-fintech',
    label: '2. Nigerian Fintech & B2B Startup',
    shortTag: 'Yaba / VI Tech & Fintech',
    marketFit: 'Best for Nigerian SaaS startups, Fintechs, POS/Agent networks, Logistics & B2B product teams.',
    voiceSummary: 'Paystack / Moniepoint-inspired executive clarity — sharp, trustworthy, metric-driven, and built for scale across Africa.',
    keyHook: 'Ship feature launches, agent training guides & merchant onboarding videos 10x faster across all 36 states.',
    brandName: 'VantageKit NG',
    announcement: 'Backed by pan-African operators • Powering 400+ Nigerian tech teams',
    heroTitlePrefix: 'Turn Product Demos into ',
    heroTitleHighlight: 'Nationwide Adoption',
    heroSubtitle:
      'VantageKit transforms a single screen recording into merchant onboarding videos, help-center guides, and localized release notes—built for Nigerian bandwidth and scale.',
    primaryCta: 'Create Free Workspace',
    secondaryCta: 'Book Product Demo',
    demoUrl: 'app.vantagekit.ng/merchant-kyc-flow',
    demoDashboardTitle: 'VantageKit Enterprise',
    demoDashboardSubtitle: 'Merchant & Agent Enablement',
    demoVideoLabel: 'BVN/NIN Tier-3 Upgrade Guide',
    demoStatLabel: 'Merchant Activation',
    demoStatValue: '89.4%',
    demoStatTrend: '+24% faster KYC',
    demoLanguages: ['EN-NG', 'HAU', 'YOR', 'IGB', 'FR'],
    demoTimeline: {
      step1: 'PII & Account Number Masking',
      step2: 'Localized Voiceover (5 Languages)',
      step3: 'Help Center & WhatsApp Bot Sync',
    },
    trustedLogos: ['Paystack', 'Moniepoint', 'PiggyVest', 'Kuda', 'Termii', 'Seamfix'],
    howItWorksSectionTitle: 'Ship product education as fast as your engineering team ships code',
    steps: [
      {
        tag: 'Step 1',
        badgeText: 'Capture Flow',
        title: 'Record your web or mobile flow',
        description:
          'Walk through your new dashboard, POS terminal app, or KYC flow once. Sensitive BVN, NIN, and NUBAN data is blurred automatically.',
      },
      {
        tag: 'Step 2',
        badgeText: 'Auto-Localize',
        title: 'AI builds videos & step-by-step docs',
        description:
          'Instantly generates narrated product videos AND illustrated Intercom/Freshdesk articles localized for merchants from Lagos to Kano.',
      },
      {
        tag: 'Step 3',
        badgeText: 'Multi-Channel',
        title: 'Embed in-app or push via WhatsApp API',
        description:
          'Publish lightweight embeds inside your React/Flutter app, help center, or send via Termii/WhatsApp Business to field agents.',
      },
    ],
    browserSectionLabel: 'Engineered for modern product, growth, and customer success teams',
    features: {
      ai: {
        nav: 'Automated Product Documentation',
        title: 'One Recording = Video + Help Article + Release Notes',
        description:
          'Stop delaying feature launches because documentation isn’t ready. VantageKit watches your cursor clicks and writes accurate SOPs, changelog videos, and merchant guides simultaneously.',
        badgeBottom: 'UI Action Detection Active',
      },
      professional: {
        nav: 'Auto-PII Blur & Brand Governance',
        title: 'Bank-Grade Polish With Automatic Data Masking',
        description:
          'Recording live fintech dashboards is risky. Our AI automatically detects and blurs test account balances, phone numbers, BVN/NIN fields, and API keys while applying your company’s design system.',
        fileName: 'POS_Settlement_Walkthrough_4K.mp4',
        effects: ['Auto-Mask BVN / Account Nos', 'Smart Cursor Zoom', '3G/4G Adaptive Streaming', 'Brand Font & Color Lock'],
      },
      multilingual: {
        nav: 'Pan-Nigerian & Francophone Reach',
        title: 'Onboard Field Agents & Merchants in Their First Language',
        description:
          'Expanding into Northern Nigeria or Francophone West Africa? Translate a single English product demo into Hausa, Yoruba, Igbo, Pidgin, and French with accurate fintech terminology.',
        stat1Val: '36',
        stat1Label: 'States Covered',
        stat2Val: '15+',
        stat2Label: 'African Languages',
        languages: [
          { flag: '🇳🇬', name: 'English (NG)' },
          { flag: '🇳🇬', name: 'Hausa' },
          { flag: '🇳🇬', name: 'Yorùbá' },
          { flag: '🇳🇬', name: 'Igbo' },
          { flag: '🇸🇳', name: 'Français (WA)' },
          { flag: '🇰🇪', name: 'Swahili' },
        ],
      },
      collaboration: {
        nav: 'Cross-Functional Launch Hub',
        title: 'Align PMs, Compliance, and Growth in One Workspace',
        description:
          'Product managers record the flow, Compliance reviews the script, and Growth exports the launch assets—complete with version history and role-based approvals.',
        campaignName: 'Q4 Virtual Card & USD Payout Launch',
        campaignMeta: '14 members • Product, Legal & Growth',
        activities: [
          { user: 'Damilola (PM) recorded new flow', action: 'Virtual Card Creation', detail: '5m ago' },
          { user: 'Kemi (Compliance) approved script', action: 'CBN Disclosure Check', detail: '22m ago' },
          { user: 'Musa localized agent guide', action: 'Hausa Field Audio', detail: '1h ago' },
          { user: 'Uche published to Intercom', action: 'Merchant Help Center', detail: '2h ago' },
        ],
      },
    },
    testimonialsKicker: 'African Tech Leaders',
    testimonialsHeadingPrefix: 'Powering product adoption for ',
    testimonialsHeadingHighlight: 'category-defining',
    testimonialsHeadingSuffix: ' companies across Nigeria.',
    testimonials: [
      {
        quote: 'We onboard ',
        highlight1: '50,000+ POS agents',
        quoteMid: ' across all 36 states. Translating our training videos into Hausa, Yoruba, and Pidgin cut support tickets by ',
        highlight2: '64% in 60 days.',
        quoteEnd: '',
        name: 'Seyi Oladipo',
        role: 'VP Product Operations, FinServe NG',
      },
      {
        quote: 'Our PMs used to wait 2 weeks for the video team before announcing features. Now every sprint ships with a ',
        highlight1: 'polished launch video',
        quoteMid: ' generated in ',
        highlight2: 'under 5 minutes.',
        quoteEnd: '',
        name: 'Ngozi Onyeama',
        role: 'Head of Product Marketing, PayFlow',
      },
      {
        quote: 'Local Naira corporate billing with proper VAT & WHT documentation made procurement effortless. It saved our team ',
        highlight1: '₦14M annually',
        quoteMid: ' compared to foreign tools.',
        highlight2: '10/10 execution.',
        quoteEnd: '',
        name: 'Babajide Coker',
        role: 'CTO, CredoSwitch Lagos',
      },
      {
        quote: 'The automatic PII blurring is a lifesaver for fintech demos. We can record live staging flows without exposing ',
        highlight1: 'NUBAN or KYC data',
        quoteMid: ' during ',
        highlight2: 'enterprise demos.',
        quoteEnd: '',
        name: 'Amina Bello',
        role: 'Lead Solutions Engineer, VaultCore',
      },
      {
        quote: 'When we expanded from Lagos into Abidjan and Dakar, VantageKit localized our entire ',
        highlight1: '120-video knowledge base',
        quoteMid: ' into French in ',
        highlight2: 'one afternoon.',
        quoteEnd: '',
        name: 'Oluwaseun Adewale',
        role: 'VP Expansion, OmniRoute Africa',
      },
    ],
    pricingHeading: 'Transparent Naira billing for scaling teams',
    pricingSubheading: 'Pay via corporate bank transfer or Paystack. Full FIRS tax invoice & WHT support included.',
    plans: {
      starter: {
        name: 'Seed Stage',
        price: '₦0',
        period: '/month',
        desc: 'For early-stage founders & MVP launches',
        features: [
          '5 product launch packages / month',
          '1080p video + written SOP guide',
          'Nigerian English & Pidgin voiceovers',
          'Automatic cursor zoom & highlights',
          'Public share links & embeds',
        ],
        missingFeature: 'Auto-PII blurring & custom domain',
        cta: 'Start Building Free',
      },
      pro: {
        badge: 'GROWTH STAGE FAVORITE',
        name: 'Growth Team',
        price: '₦65,000',
        period: '/month',
        desc: 'For product, marketing & customer success teams',
        features: [
          'Unlimited videos & help-center guides',
          '4K export + Low-bandwidth mobile player',
          'All Nigerian + 50 global languages',
          'Auto-blur BVN, account numbers & PII',
          'Custom brand kit, fonts & domain',
          'Intercom, Freshdesk & Notion sync',
          'Priority Slack & WhatsApp support',
        ],
        cta: 'Start 14-Day Team Trial',
      },
      enterprise: {
        name: 'Enterprise & Banks',
        price: 'Custom',
        desc: 'For commercial banks, telcos & large fintechs',
        features: [
          'Everything in Growth Team, plus:',
          'NDPR compliance & SOC 2 Type II report',
          'SSO (Okta, Azure AD, Google Workspace)',
          'On-premise / private cloud option',
          'Custom AI voice trained on your brand',
          'SLA & dedicated Lagos Solutions Architect',
          'Annual Naira invoicing & procurement support',
        ],
        cta: 'Schedule Enterprise Demo',
      },
    },
    trustNote: 'Trusted by 400+ Nigerian fintechs, SaaS startups & financial institutions',
    trustBadges: ['🔒 NDPR & SOC 2 Compliant', '🧾 FIRS Tax Invoice Ready', '⚡ 99.9% Uptime SLA'],
    faqKicker: 'Enterprise & Product FAQ',
    faqs: [
      {
        q: 'How does VantageKit handle sensitive customer data on screen?',
        a: 'Our computer-vision model automatically detects and masks Nigerian bank account numbers (NUBAN), BVN, NIN, phone numbers, email addresses, and API keys before rendering your video or screenshots.',
      },
      {
        q: 'Can we pay annually via Nigerian corporate bank transfer?',
        a: 'Yes. While self-serve teams can pay monthly or annually via Paystack, Growth and Enterprise customers can request a formal Naira pro-forma invoice with VAT and Withholding Tax (WHT) support.',
      },
      {
        q: 'Does the embedded player work well on slow 3G/4G connections?',
        a: 'Yes. Our adaptive player serves ultra-lightweight streams optimized for Nigerian mobile networks, and also generates an instant step-by-step screenshot guide right below the video for zero-buffering reading.',
      },
      {
        q: 'Can we export guides directly to our existing Help Center?',
        a: 'Absolutely. With one click, VantageKit exports formatted HTML/Markdown with annotated screenshots directly to Intercom, Freshdesk, Zendesk, Notion, or your custom documentation site.',
      },
      {
        q: 'How accurate are the Hausa, Yoruba, and Igbo translations for technical terms?',
        a: 'You can define a custom Brand Glossary so product names, USSD codes, and banking terms remain in English where appropriate while the surrounding explanation flows naturally in the local language.',
      },
    ],
    footerTagline:
      'VantageKit NG helps African product and growth teams ship world-class launches, documentation, and agent training in minutes.',
  },
  {
    id: 'naija-creator',
    label: '3. Naija Creator, EdTech & Course Studio',
    shortTag: 'Selar / Tech Tutors / Creators',
    marketFit: 'Best for Nigerian course creators, tech bootcamps, forex/crypto mentors, YouTubers & Selar/Mainstack digital sellers.',
    voiceSummary: 'Bold, inspiring, creator-first ("Monetize what you sabi — turn screen tutorials into global courses and viral shorts").',
    keyHook: 'Turns raw laptop tutorials into studio-grade courses, YouTube videos & Selar sales assets without expensive mic/camera gear.',
    brandName: 'SabiCreator AI',
    announcement: 'New: 1-Click Selar & Mainstack Course Export — Used by 8,500+ African creators',
    heroTitlePrefix: 'Turn What You Sabi into ',
    heroTitleHighlight: 'Bestselling Courses',
    heroSubtitle:
      'No studio mic? No problem. SabiCreator AI turns your raw screen tutorials into studio-quality video lessons, PDF workbooks, and viral promotional reels in minutes.',
    primaryCta: 'Create Your First Lesson Free',
    secondaryCta: 'See Creator Examples',
    demoUrl: 'sabicreator.com/ui-ux-masterclass-ng',
    demoDashboardTitle: 'SabiCreator Studio',
    demoDashboardSubtitle: 'Course & Content Engine',
    demoVideoLabel: 'Module 1: Figma Auto-Layout',
    demoStatLabel: 'Course Downloads',
    demoStatValue: '1,280',
    demoStatTrend: '+₦4.2M on Selar',
    demoLanguages: ['NG-EN', 'US-EN', 'UK-EN', 'PIDGIN', 'FR'],
    demoTimeline: {
      step1: 'Remove "Umm/Ah" & Generator Noise',
      step2: 'Generate PDF Workbook & Quiz',
      step3: 'Render 4K Lesson + 60s TikTok Teaser',
    },
    trustedLogos: ['Selar', 'Mainstack', 'AltSchool', 'YouTube', 'Paystack', 'Nestcoin'],
    howItWorksSectionTitle: 'Record your skill once—get a full digital product ready to sell',
    steps: [
      {
        tag: 'Step 1',
        badgeText: 'Teach Naturally',
        title: 'Record your screen & workflow',
        description:
          'Coding, UI design, Excel, trading, or digital marketing—just record your screen. Mistakes and long pauses are cut out automatically.',
      },
      {
        tag: 'Step 2',
        badgeText: 'Studio Polish',
        title: 'AI upgrades your audio, zooms & PDF notes',
        description:
          'Get crisp studio audio (keep your voice or use an AI clone), automatic zoom-ins on code/menus, and a downloadable PDF study guide.',
      },
      {
        tag: 'Step 3',
        badgeText: 'Sell Everywhere',
        title: 'Publish to Selar, YouTube & Telegram',
        description:
          'Export your full course lessons alongside 60-second vertical promo clips for TikTok, Instagram Reels, and Twitter/X.',
      },
    ],
    browserSectionLabel: 'Built for African educators, tech mentors, and digital creators',
    features: {
      ai: {
        nav: 'Course + E-Book in One Click',
        title: 'Every Video Automatically Generates an Illustrated E-Book',
        description:
          'Nigerian students love having both video lessons and low-data PDF notes. SabiCreator extracts key screenshots and explanations from your recording to build a formatted workbook automatically.',
        badgeBottom: 'Curriculum AI Active',
      },
      professional: {
        nav: 'Studio Mic Quality Without a Studio',
        title: 'Erase Background Noise, Echo & Filler Words Instantly',
        description:
          'Don’t wait until midnight for the neighborhood to be quiet before recording your course. Our audio engine strips out fan, traffic, and generator hum while keeping your voice warm and authoritative.',
        fileName: 'Fullstack_React_Module_04.mp4',
        effects: ['Studio Voice Enhancer', 'Auto-Zoom on Code & UI', 'Silence & Filler Cutter', 'Custom Watermark Protection'],
      },
      multilingual: {
        nav: 'Sell to Local & Global Students',
        title: 'Reach Students in Nigeria, UK, US & Francophone Africa',
        description:
          'Want to sell your course on Udemy or to global audiences too? Keep your natural Nigerian accent with crystal clarity, or dub your entire course into US/UK English, French, or Portuguese.',
        stat1Val: '50+',
        stat1Label: 'Global Accents',
        stat2Val: '10x',
        stat2Label: 'Faster Course Creation',
        languages: [
          { flag: '🇳🇬', name: 'Naija Studio' },
          { flag: '🇬🇧', name: 'British English' },
          { flag: '🇺🇸', name: 'US English' },
          { flag: '🇳🇬', name: 'Pidgin' },
          { flag: '🇫🇷', name: 'Français' },
          { flag: '🇧🇷', name: 'Português' },
        ],
      },
      collaboration: {
        nav: 'Academy & Bootcamp Cohorts',
        title: 'Run a Full Tech Academy With Co-Instructors',
        description:
          'Manage multiple instructors, standardize video intros/outros across your bootcamp, and review student-facing tutorials in one shared dashboard.',
        campaignName: '2026 Data Analytics Bootcamp Cohort 4',
        campaignMeta: '5 instructors • 42 lessons ready',
        activities: [
          { user: 'Fisayo uploaded SQL Lesson 3', action: 'Auto-generated PDF notes', detail: '8m ago' },
          { user: 'David exported 3 TikTok trailers', action: 'Course Launch Funnel', detail: '30m ago' },
          { user: 'Amaka added Selar checkout CTA', action: 'Module 1 Free Preview', detail: '1h ago' },
          { user: 'Tobi approved 1080p student pack', action: 'Telegram Cohort Channel', detail: '3h ago' },
        ],
      },
    },
    testimonialsKicker: 'Creator Success Stories',
    testimonialsHeadingPrefix: 'Helping African creators build ',
    testimonialsHeadingHighlight: 'six-figure digital',
    testimonialsHeadingSuffix: ' academies from their laptops.',
    testimonials: [
      {
        quote: 'I procrastinated on launching my UI/UX course for 8 months because of editing. With SabiCreator, I recorded ',
        highlight1: '24 modules in a weekend',
        quoteMid: ' and made ',
        highlight2: '₦3.4M on Selar',
        quoteEnd: ' in my first month.',
        name: 'Kelechi Nnamdi',
        role: 'Design Mentor & Creator',
      },
      {
        quote: 'The automatic PDF workbook generator is pure gold. My students can revise offline when data is tight, which boosted our ',
        highlight1: 'course completion rate to 82%',
        quoteMid: ' across ',
        highlight2: '1,500+ learners.',
        quoteEnd: '',
        name: 'Zainab Lawal',
        role: 'Founder, DataHer Africa',
      },
      {
        quote: 'I record in a busy area in Yaba. The AI audio cleanup makes my laptop mic sound like a ',
        highlight1: '₦500k podcast studio',
        quoteMid: '—even when my neighbor’s ',
        highlight2: 'generator is running.',
        quoteEnd: '',
        name: 'Mayowa Adebayo',
        role: 'YouTuber & Dev Educator',
      },
      {
        quote: 'From every 15-minute tutorial, it automatically cuts ',
        highlight1: '3 viral short clips',
        quoteMid: ' for TikTok and Twitter. That alone grew my fanbase by ',
        highlight2: '40,000 followers.',
        quoteEnd: '',
        name: 'Ebuka Okafor',
        role: 'No-Code & AI Instructor',
      },
      {
        quote: 'We translated our coding bootcamp into French and started enrolling students in ',
        highlight1: 'Senegal and Côte d’Ivoire',
        quoteMid: ' without hiring ',
        highlight2: 'new instructors.',
        quoteEnd: '',
        name: 'korede Bello-Smith',
        role: 'Director, SabiTech Academy',
      },
    ],
    pricingHeading: 'Invest in your creator business in Naira',
    pricingSubheading: 'Start free, launch your first digital product, and scale as your students grow.',
    plans: {
      starter: {
        name: 'Creator Starter',
        price: '₦0',
        period: '/month',
        desc: 'Great for YouTube tutorials & free lead magnets',
        features: [
          '3 full video tutorials per month',
          'Auto-generated PDF study guide',
          'Background noise & silence removal',
          '720p video exports',
          '1 vertical TikTok/Reel clip per video',
        ],
        missingFeature: 'Custom course watermark & 4K export',
        cta: 'Start Creating Free',
      },
      pro: {
        badge: 'BEST FOR COURSE SELLERS',
        name: 'Creator Pro',
        price: '₦14,900',
        period: '/month',
        desc: 'For Selar sellers, coaches & YouTubers',
        features: [
          'Unlimited course videos & PDF e-books',
          '1080p & 4K crisp screen exports',
          'Clone your own voice or use 50+ AI voices',
          'Anti-piracy dynamic watermark option',
          'Unlimited TikTok / IG Reel promo clips',
          'Custom intro/outro & brand colors',
          'Direct Selar, Mainstack & YouTube export',
        ],
        cta: 'Start Pro Creator Trial',
      },
      enterprise: {
        name: 'Academy / Bootcamp',
        price: 'Custom',
        desc: 'For EdTech platforms, schools & cohorts',
        features: [
          'Everything in Creator Pro, plus:',
          'Multi-instructor team seats',
          'LMS & SCORM package exports',
          'Low-data student streaming portal',
          'Custom AI tutor trained on your lessons',
          'Dedicated onboarding & support',
          'Flexible Naira institutional billing',
        ],
        cta: 'Contact Academy Team',
      },
    },
    trustNote: 'Powering 8,500+ Nigerian creators, tutors & EdTech bootcamps',
    trustBadges: ['🎓 Selar & Mainstack Ready', '💳 Naira Cards & Transfer', '⚡ Cancel Anytime'],
    faqKicker: 'Creator FAQ',
    faqs: [
      {
        q: 'Can I use my own voice instead of an AI voice?',
        a: 'Yes! You can either enhance your own recorded voice with our Studio Noise & Echo Remover, clone your own voice so you can fix mistakes just by typing, or pick from our Nigerian and global AI voices.',
      },
      {
        q: 'How does the PDF E-Book / Workbook feature work?',
        a: 'As you record your screen, SabiCreator captures high-resolution screenshots of every key step, pairs them with clean written explanations, and exports a ready-to-sell PDF guide alongside your video.',
      },
      {
        q: 'Can this help protect my paid courses from Telegram piracy?',
        a: 'Creator Pro includes smart visual branding and optional subtle watermarks on your video lessons and PDF guides to deter unauthorized reselling.',
      },
      {
        q: 'What if I stumble over my words while recording a long tutorial?',
        a: 'Just keep going! Our AI transcript editor lets you delete mistakes, "umms", and long pauses just like editing a Word document.',
      },
      {
        q: 'How do I sell the videos I create here?',
        a: 'You own 100% of the content you generate. Download your MP4s and PDFs and upload them straight to Selar, Mainstack, Udemy, Teachable, or your private Telegram/WhatsApp community.',
      },
    ],
    footerTagline:
      'SabiCreator AI empowers Nigerian experts and creators to turn their knowledge into world-class video courses and digital products.',
  },
  {
    id: 'original',
    label: '4. Original LaunchKit AI (Global Baseline)',
    shortTag: 'Original Global SaaS',
    marketFit: 'The original global SaaS copy from your HTML template for side-by-side comparison.',
    voiceSummary: 'Standard Silicon Valley SaaS launch tone — clean, global, USD-priced.',
    keyHook: 'Transform one screen recording into complete product launch packages in 50+ languages.',
    brandName: 'LaunchKit AI',
    announcement: 'Announcing our $3M funding',
    heroTitlePrefix: 'Turn Screen Recordings into ',
    heroTitleHighlight: 'Viral Launches',
    heroSubtitle:
      'LaunchKit AI transforms raw footage into polished marketing assets. Guides, voiceovers, and videos—generated in minutes.',
    primaryCta: 'Get started for free',
    secondaryCta: 'Talk to us',
    demoUrl: 'launchkit.ai/product-demo',
    demoDashboardTitle: 'LaunchKit AI',
    demoDashboardSubtitle: 'Product Dashboard',
    demoVideoLabel: 'Product Demo',
    demoStatLabel: 'Generated Content',
    demoStatValue: '47',
    demoStatTrend: '+12 today',
    demoLanguages: ['EN', 'ES', 'FR', '+47'],
    demoTimeline: {
      step1: 'AI Script Generation',
      step2: 'Voiceover Synthesis',
      step3: 'Video Rendering',
    },
    trustedLogos: ['Microsoft', 'Google', 'Amazon', 'Salesforce', 'Adobe', 'Shopify', 'Stripe'],
    howItWorksSectionTitle: 'Go from rough recording to professional video in minutes',
    steps: [
      {
        tag: 'Step 1',
        badgeText: 'Screen Recording',
        title: 'Record your screen',
        description:
          'Capture any workflow with our simple Chrome extension. One click to start, automatic upload when done.',
      },
      {
        tag: 'Step 2',
        badgeText: 'AI Magic',
        title: 'AI generates everything',
        description:
          'Our AI analyzes your recording and creates professional videos, scripts, voiceovers, and guides automatically.',
      },
      {
        tag: 'Step 3',
        badgeText: 'Ready to Share',
        title: 'Export & share anywhere',
        description:
          'Download in any format or share directly to YouTube, LinkedIn, or embed on your website instantly.',
      },
    ],
    browserSectionLabel: 'Works with browsers you use',
    features: {
      ai: {
        nav: 'AI-Powered Creation',
        title: 'AI-Powered Creation',
        description:
          'Our advanced AI analyzes your screen recordings to automatically generate professional scripts, studio-quality voiceovers, and intelligent zoom effects that highlight key actions.',
        badgeBottom: 'Neural Network Active',
      },
      professional: {
        nav: 'Professional Quality',
        title: 'Professional Quality Output',
        description:
          'Create broadcast-ready videos with automated editing, smooth transitions, and professional effects. No editing experience required.',
        fileName: 'ProductLaunch_v2.mp4',
        effects: ['Auto Transitions', 'Smart Zoom', 'Color Grading', 'Audio Enhancement'],
      },
      multilingual: {
        nav: 'Multilingual Support',
        title: 'Multilingual Support',
        description:
          'Reach global audiences with support for 50+ languages. AI-generated voiceovers in multiple accents and languages automatically.',
        stat1Val: '50+',
        stat1Label: 'Languages',
        stat2Val: '100+',
        stat2Label: 'Voice Accents',
        languages: [
          { flag: '🇺🇸', name: 'English' },
          { flag: '🇪🇸', name: 'Español' },
          { flag: '🇮🇹', name: 'Italiano' },
          { flag: '🇩🇪', name: 'Deutsch' },
          { flag: '🇯🇵', name: '日本語' },
          { flag: '🇨🇳', name: '中文' },
        ],
      },
      collaboration: {
        nav: 'Team Collaboration',
        title: 'Seamless Team Collaboration',
        description:
          'Work together with your team in real-time. Share projects, leave comments, and manage permissions effortlessly.',
        campaignName: 'Product Launch Campaign',
        campaignMeta: '8 members • 2m ago',
        activities: [
          { user: 'Sarah added a comment', action: 'on Hero Section', detail: '2m ago' },
          { user: 'Mike approved video', action: 'CTA Section', detail: '15m ago' },
          { user: 'Alex uploaded new version', action: 'Features Overview', detail: '1h ago' },
          { user: 'Emma shared project', action: 'with Marketing team', detail: '2h ago' },
        ],
      },
    },
    testimonialsKicker: 'Customer Stories',
    testimonialsHeadingPrefix: 'Powering the ',
    testimonialsHeadingHighlight: 'content',
    testimonialsHeadingSuffix: ' stack for companies around the world.',
    testimonials: [
      {
        quote: 'Transformed how we train and support ',
        highlight1: '1Mn+ SMBs',
        quoteMid: ' across Latin America. We’ve rapidly created educational videos in ',
        highlight2: 'diverse accents.',
        quoteEnd: '',
        name: 'Sarah Martinez',
        role: 'Director Customer Experience',
      },
      {
        quote: 'ProductAI has been a ',
        highlight1: 'game changer',
        quoteMid: ' for us. What took 5-6 hours is now down to ',
        highlight2: '3-4 mins',
        quoteEnd: ' - the features are incredible.',
        name: 'Michael Chen',
        role: 'VP Product Education',
      },
      {
        quote: 'Saved us ',
        highlight1: '$125k.',
        quoteMid: ' ProductAI helped us pull off our smoothest ever product launch across ',
        highlight2: '100s of customers.',
        quoteEnd: '',
        name: 'Emily Rodriguez',
        role: 'Head of Marketing',
      },
      {
        quote: 'The AI quality is ',
        highlight1: 'mind-blowing.',
        quoteMid: ' Our sales team can now create personalized demo videos for every prospect in ',
        highlight2: 'minutes.',
        quoteEnd: '',
        name: 'Alex Johnson',
        role: 'Sales Director',
      },
      {
        quote: 'We launched in ',
        highlight1: '12 countries simultaneously',
        quoteMid: ' thanks to the multilingual support. Truly a game-changer for ',
        highlight2: 'global expansion.',
        quoteEnd: '',
        name: 'Lisa Wang',
        role: 'VP International Growth',
      },
    ],
    pricingHeading: 'Launch pricing that scales with you',
    pricingSubheading: "Start free, upgrade when you're ready. All plans include unlimited team members.",
    plans: {
      starter: {
        name: 'Starter',
        price: '$0',
        period: '/month',
        desc: 'Perfect for trying out LaunchKit AI',
        features: [
          '3 product launches per month',
          '720p video exports',
          '5 languages supported',
          'AI-generated scripts & voiceovers',
          'Basic templates',
        ],
        missingFeature: 'Custom branding',
        cta: 'Start Free',
      },
      pro: {
        badge: 'MOST POPULAR',
        name: 'Pro',
        price: '$49',
        period: '/month',
        desc: 'For growing product teams',
        features: [
          'Unlimited product launches',
          '4K video exports',
          '50+ languages supported',
          'Custom branding & brand kits',
          'Premium templates & effects',
          'API access',
          'Priority support',
        ],
        cta: 'Start Pro Trial',
      },
      enterprise: {
        name: 'Enterprise',
        price: 'Custom',
        desc: 'For large teams and organizations',
        features: [
          'Everything in Pro, plus:',
          'Dedicated account manager',
          'Custom AI training on your brand',
          'SSO & advanced security',
          'Custom integrations',
          'SLA & 24/7 support',
          'Onboarding & training',
        ],
        cta: 'Contact Sales',
      },
    },
    trustNote: 'Trusted by 10,000+ product teams',
    trustBadges: ['🔒 SOC 2 Certified', '💳 14-day money back', '⚡ Cancel anytime'],
    faqKicker: 'Ask Us Out',
    faqs: [
      {
        q: 'What is LaunchKit AI?',
        a: 'LaunchKit AI is an AI-powered platform that allows you to create professional-quality product videos and step-by-step guides in minutes, simply by recording your screen.',
      },
      {
        q: 'How do I create content?',
        a: 'Simply use our Chrome extension to record your screen. LaunchKit AI will automatically generate a video with professional script, studio-quality voiceover, and smart zoom effects.',
      },
      {
        q: 'Who is LaunchKit AI for?',
        a: 'LaunchKit AI is designed for product marketing teams, sales enablement, customer success, and training departments. Perfect for anyone creating product content.',
      },
      {
        q: 'Can I edit the content?',
        a: 'Absolutely! While AI does the heavy lifting, you have full control to edit scripts, adjust voiceovers, modify screenshots, and customize branding.',
      },
      {
        q: 'Do I need editing experience?',
        a: 'Not at all! LaunchKit AI is designed to be incredibly user-friendly. The AI handles all technical aspects, so you can create professional content without any prior experience.',
      },
    ],
    footerTagline:
      'LaunchKit AI helps product teams ship faster with AI-generated launch content. From screen recording to worldwide launch in under 30 minutes.',
  },
];
