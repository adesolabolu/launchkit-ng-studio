import React, { useState, useEffect } from 'react';
import { MARKET_DIRECTIONS } from './data/directions';

const FEATURE_IDS = [
  'feature-ai',
  'feature-professional',
  'feature-multilingual',
  'feature-collaboration',
];

export default function App() {
  // Lock in Direction 3: Naija Creator, EdTech & Course Studio (SabiCreator AI)
  const direction =
    MARKET_DIRECTIONS.find((d) => d.id === 'naija-creator') || MARKET_DIRECTIONS[2];

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeFeatureId, setActiveFeatureId] = useState<string>('feature-ai');
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  // Accurate scroll spy so the sticky left navigation always matches the active right-side section
  useEffect(() => {
    const handleScroll = () => {
      const triggerLine = window.innerHeight * 0.38;
      let currentId = FEATURE_IDS[0];

      for (const id of FEATURE_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerLine) {
            currentId = id;
          }
        }
      }

      setActiveFeatureId(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featureNavItems = [
    { id: 'feature-ai', label: direction.features.ai.nav },
    { id: 'feature-professional', label: direction.features.professional.nav },
    { id: 'feature-multilingual', label: direction.features.multilingual.nav },
    { id: 'feature-collaboration', label: direction.features.collaboration.nav },
  ];

  return (
    <div className="font-primary bg-neutral-background text-text-primary min-h-screen">
      {/* Header — 3-Zone Top Bar */}
      <header className="fixed top-0 left-0 w-full z-50 py-3 border-b border-black/10 backdrop-blur-md bg-[#f7f9fc]/75">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Title */}
          <a
            href="#top"
            onClick={(e) => scrollToSection(e, '#top')}
            className="text-xl font-semibold text-text-primary whitespace-nowrap shrink-0 font-heading tracking-tight"
          >
            {direction.brandName}
          </a>

          {/* Zone 2: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              onClick={(e) => scrollToSection(e, '#features')}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors whitespace-nowrap shrink-0"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => scrollToSection(e, '#how-it-works')}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors whitespace-nowrap shrink-0"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              onClick={(e) => scrollToSection(e, '#testimonials')}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors whitespace-nowrap shrink-0"
            >
              Stories
            </a>
            <a
              href="#pricing"
              onClick={(e) => scrollToSection(e, '#pricing')}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors whitespace-nowrap shrink-0"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={(e) => scrollToSection(e, '#faq')}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors whitespace-nowrap shrink-0"
            >
              FAQ
            </a>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() =>
                setModalMessage(
                  `Welcome to ${direction.brandName}! Upload your first screen recording or start a new course module.`
                )
              }
              className="hidden md:inline-flex items-center px-5 py-2.5 bg-text-primary text-white font-medium text-sm rounded-md hover:shadow-soft transition-all hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer"
            >
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center cursor-pointer"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-full bg-text-primary rounded-full transition-transform ${
                  mobileMenuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-text-primary rounded-full transition-opacity ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-text-primary rounded-full transition-transform ${
                  mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-neutral-surface border-t border-border-light shadow-lg">
            <div className="flex flex-col px-6 py-4 gap-1">
              <a
                href="#features"
                onClick={(e) => scrollToSection(e, '#features')}
                className="py-3 text-sm font-medium text-text-primary border-b border-border-light"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => scrollToSection(e, '#how-it-works')}
                className="py-3 text-sm font-medium text-text-primary border-b border-border-light"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                onClick={(e) => scrollToSection(e, '#testimonials')}
                className="py-3 text-sm font-medium text-text-primary border-b border-border-light"
              >
                Stories
              </a>
              <a
                href="#pricing"
                onClick={(e) => scrollToSection(e, '#pricing')}
                className="py-3 text-sm font-medium text-text-primary border-b border-border-light"
              >
                Pricing
              </a>
              <a
                href="#faq"
                onClick={(e) => scrollToSection(e, '#faq')}
                className="py-3 text-sm font-medium text-text-primary"
              >
                FAQ
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        {/* Hero Section */}
        <section className="hero-gradient pt-36 pb-16 px-6 relative overflow-hidden">
          {/* Blur Gradient Background */}
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-[1220px] h-[543px] blur-gradient rounded-full -rotate-12 z-0 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Announcement Line */}
            <div className="flex justify-center mb-8">
              <a
                href="#pricing"
                onClick={(e) => scrollToSection(e, '#pricing')}
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                <span className="font-medium">{direction.announcement}</span>
                <span aria-hidden="true">·</span>
                <span className="underline">Explore Plans</span>
              </a>
            </div>

            {/* Hero Content */}
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1
                className="font-heading text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-none mb-6"
                style={{ textWrap: 'balance' }}
              >
                {direction.heroTitlePrefix}
                <span className="italic text-brand-primary">{direction.heroTitleHighlight}</span>
              </h1>
              <p className="text-lg md:text-xl text-text-primary leading-relaxed max-w-2xl mx-auto mb-8">
                {direction.heroSubtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setModalMessage(
                      `Ready to create your first lesson on ${direction.brandName}! Record your screen or upload an existing tutorial.`
                    )
                  }
                  className="w-full sm:w-auto px-6 py-3 bg-text-primary text-white font-medium text-sm rounded-md hover:shadow-soft transition-all hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {direction.primaryCta}
                </button>
                <a
                  href="#how-it-works"
                  onClick={(e) => scrollToSection(e, '#how-it-works')}
                  className="w-full sm:w-auto px-6 py-3 bg-transparent text-text-primary font-medium text-sm rounded-md hover:bg-black/5 transition-all flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
                >
                  {direction.secondaryCta}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Hero Product Image */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/40 rounded-xl md:rounded-2xl p-2 md:p-3 shadow-medium">
                <div className="aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg md:rounded-xl overflow-hidden relative">
                  {/* Browser Chrome */}
                  <div className="bg-gray-800 px-2 md:px-4 py-2 md:py-3 flex items-center gap-2 md:gap-3 border-b border-gray-700">
                    <div className="flex gap-1 md:gap-2">
                      <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-500" />
                      <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-500" />
                      <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 bg-gray-700 rounded px-2 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs text-gray-300 font-mono truncate">
                      {direction.demoUrl}
                    </div>
                  </div>

                  {/* Product Interface */}
                  <div className="p-3 md:p-6 space-y-3 md:space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-8 md:w-10 h-8 md:h-10 rounded-md md:rounded-lg bg-gradient-to-br from-brand-primary via-brand-secondary to-purple-400 flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 md:w-6 h-5 md:h-6" viewBox="0 0 24 24" fill="white">
                            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <div className="text-white font-semibold text-xs md:text-sm truncate">
                            {direction.demoDashboardTitle}
                          </div>
                          <div className="text-gray-400 text-[10px] md:text-xs hidden sm:block">
                            {direction.demoDashboardSubtitle}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-1 md:gap-2 flex-shrink-0">
                        <div className="hidden sm:block px-2 md:px-3 py-1 md:py-1.5 bg-gray-700 rounded text-[10px] md:text-xs text-gray-300">
                          Export to Selar
                        </div>
                        <div className="px-2 md:px-3 py-1 md:py-1.5 bg-brand-primary text-white rounded text-[10px] md:text-xs font-medium">
                          Generate Course Pack
                        </div>
                      </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
                      {/* Video Preview Card */}
                      <div className="md:col-span-2 bg-gray-800 rounded-md md:rounded-lg p-2 md:p-4 space-y-2 md:space-y-3">
                        <div className="aspect-video bg-gradient-to-br from-brand-primary via-brand-secondary to-purple-400 rounded relative overflow-hidden">
                          <div className="absolute inset-0 bg-black/20" />
                          <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 md:right-3 flex items-center justify-between">
                            <div className="flex items-center gap-1.5 md:gap-2">
                              <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                                <svg className="w-3 md:w-4 h-3 md:h-4" viewBox="0 0 12 12" fill="white">
                                  <polygon points="3,2 3,10 9,6" />
                                </svg>
                              </div>
                              <div className="text-white text-[10px] md:text-xs font-medium hidden sm:block">
                                {direction.demoVideoLabel}
                              </div>
                            </div>
                            <div className="text-white text-[10px] md:text-xs font-mono tabular-nums">12:45</div>
                          </div>
                          <div className="absolute top-2 md:top-3 right-2 md:right-3 px-2 py-0.5 bg-black/50 backdrop-blur text-white text-[9px] md:text-xs rounded">
                            AI Studio Polish
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 md:gap-2">
                          <div className="flex-1 h-0.5 md:h-1 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-brand-primary" />
                          </div>
                          <div className="text-gray-400 text-[10px] md:text-xs font-mono tabular-nums">75%</div>
                        </div>
                      </div>

                      {/* Sidebar Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-3">
                        <div className="bg-gray-800 rounded-md md:rounded-lg p-2 md:p-3">
                          <div className="text-gray-400 text-[10px] md:text-xs mb-1 md:mb-2">
                            {direction.demoStatLabel}
                          </div>
                          <div className="text-xl md:text-2xl font-bold text-white font-mono tabular-nums">
                            {direction.demoStatValue}
                          </div>
                          <div className="flex items-center gap-1 mt-0.5 md:mt-1">
                            <svg className="w-3 md:w-4 h-3 md:h-4" viewBox="0 0 12 12" fill="#4ade80">
                              <path d="M6 2l4 4H7v4H5V6H2l4-4z" />
                            </svg>
                            <span className="text-brand-primary text-[10px] md:text-xs">
                              {direction.demoStatTrend}
                            </span>
                          </div>
                        </div>
                        <div className="bg-gray-800 rounded-md md:rounded-lg p-2 md:p-3">
                          <div className="text-gray-400 text-[10px] md:text-xs mb-1 md:mb-2">Voice & Accents</div>
                          <div className="flex flex-wrap gap-1">
                            {direction.demoLanguages.map((lang) => (
                              <div
                                key={lang}
                                className="px-1.5 md:px-2 py-0.5 md:py-1 bg-gray-700 rounded text-[10px] md:text-xs text-gray-300 font-mono"
                              >
                                {lang}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="space-y-1.5 md:space-y-2">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="flex-1 bg-gray-800 rounded px-2 md:px-3 py-1.5 md:py-2 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <div className="text-white text-[10px] md:text-xs truncate">
                              {direction.demoTimeline.step1}
                            </div>
                            <div className="text-gray-400 text-[10px] md:text-xs flex-shrink-0">Complete</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="flex-1 bg-gray-800 rounded px-2 md:px-3 py-1.5 md:py-2 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <div className="text-white text-[10px] md:text-xs truncate">
                              {direction.demoTimeline.step2}
                            </div>
                            <div className="text-brand-primary text-[10px] md:text-xs flex-shrink-0">
                              In Progress...
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="flex-1 bg-gray-800 rounded px-2 md:px-3 py-1.5 md:py-2 opacity-50 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <div className="text-white text-[10px] md:text-xs truncate">
                              {direction.demoTimeline.step3}
                            </div>
                            <div className="text-gray-500 text-[10px] md:text-xs flex-shrink-0">Queued</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-secondary to-transparent opacity-10 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos Section */}
        <section className="py-14 bg-neutral-background overflow-hidden border-b border-border-light">
          <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
            <p className="text-xs font-mono uppercase tracking-wider text-text-secondary">
              Built for creators selling and teaching across Nigeria & global platforms
            </p>
          </div>
          <div
            className="w-full"
            style={{
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 12.5%, black 87.5%, transparent)',
              maskImage:
                'linear-gradient(to right, transparent, black 12.5%, black 87.5%, transparent)',
            }}
          >
            <div className="flex gap-16 items-center animate-marquee" style={{ width: 'fit-content' }}>
              {[...direction.trustedLogos, ...direction.trustedLogos, ...direction.trustedLogos].map(
                (logo, idx) => (
                  <div key={`${logo}-${idx}`} className="flex items-center gap-3 px-6">
                    <div className="w-7 h-7 rounded-md bg-brand-primary/15 flex items-center justify-center font-heading font-bold text-sm text-text-primary">
                      {logo.slice(0, 1)}
                    </div>
                    <span className="text-lg font-semibold text-text-secondary whitespace-nowrap">
                      {logo}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 md:py-20 bg-neutral-background" id="how-it-works">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="text-xs md:text-sm font-mono font-medium text-text-secondary mb-3">
                How It Works
              </div>
              <h2
                className="font-heading text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight max-w-3xl mx-auto px-4"
                style={{ textWrap: 'balance' }}
              >
                {direction.howItWorksSectionTitle}
              </h2>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              {/* Card 1: Record */}
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="aspect-square gradient-pink rounded-xl md:rounded-2xl overflow-hidden relative flex items-center justify-center p-6 md:p-8">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="w-full max-w-[200px] md:max-w-[280px] bg-white rounded-lg md:rounded-xl shadow-2xl overflow-hidden">
                      <div className="bg-gray-800 px-2 md:px-3 py-2 md:py-2.5 flex items-center gap-1.5 md:gap-2">
                        <div className="flex gap-1 md:gap-1.5">
                          <div className="w-1.5 md:w-2.5 h-1.5 md:h-2.5 rounded-full bg-red-500" />
                          <div className="w-1.5 md:w-2.5 h-1.5 md:h-2.5 rounded-full bg-yellow-400" />
                          <div className="w-1.5 md:w-2.5 h-1.5 md:h-2.5 rounded-full bg-green-500" />
                        </div>
                        <div className="flex-1 bg-gray-700 rounded px-1.5 md:px-2 py-0.5 md:py-1 text-[8px] md:text-[10px] text-gray-300 font-mono flex items-center justify-between">
                          <span className="truncate">figma.com/file/ui-course</span>
                          <span className="text-[8px] text-red-400 font-mono ml-1">REC</span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-2 md:p-4 h-32 md:h-48 relative">
                        <div className="space-y-1.5 md:space-y-2">
                          <div className="h-4 md:h-6 bg-white rounded shadow-sm flex items-center px-1.5 md:px-2 gap-1 md:gap-2">
                            <div className="w-2.5 md:w-4 h-2.5 md:h-4 rounded bg-brand-primary flex-shrink-0" />
                            <div className="h-1.5 md:h-2 bg-gray-200 rounded flex-1" />
                          </div>
                          <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                            <div className="h-10 md:h-16 bg-white rounded shadow-sm" />
                            <div className="h-10 md:h-16 bg-white rounded shadow-sm" />
                          </div>
                          <div className="h-12 md:h-20 bg-white rounded shadow-sm" />
                        </div>

                        <div
                          className="absolute top-4 md:top-8 left-4 md:left-8 w-3 md:w-5 h-3 md:h-5 animate-float"
                          style={{ animationDuration: '2s' }}
                        >
                          <svg viewBox="0 0 24 24" fill="black" className="drop-shadow-lg">
                            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -bottom-3 md:-bottom-5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] md:text-xs px-3 md:px-4 py-1.5 md:py-2 rounded-full flex items-center gap-1.5 md:gap-2 shadow-xl z-10">
                      <span className="font-bold tracking-wide">REC</span>
                      <span className="font-mono text-[9px] md:text-xs tabular-nums">12:45</span>
                    </div>

                    <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 bg-white text-text-primary px-2 md:px-3 py-1 md:py-1.5 rounded-md md:rounded-lg shadow-lg text-[10px] md:text-xs font-semibold flex items-center gap-1 md:gap-2">
                      <span>{direction.steps[0].badgeText}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <div className="text-xs font-mono font-semibold text-brand-primary">
                    01. {direction.steps[0].tag}
                  </div>
                  <h3 className="font-mono text-lg md:text-xl font-medium tracking-tight text-text-primary">
                    {direction.steps[0].title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-text-light">
                    {direction.steps[0].description}
                  </p>
                </div>
              </div>

              {/* Card 2: AI Generate */}
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="aspect-square gradient-peach rounded-xl md:rounded-2xl overflow-hidden relative flex items-center justify-center p-6 md:p-8">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="w-full max-w-[200px] md:max-w-[280px] bg-white rounded-lg md:rounded-xl shadow-2xl overflow-hidden">
                      <div className="bg-gradient-to-r from-brand-primary to-brand-secondary p-2 md:p-3 text-white">
                        <div className="flex items-center gap-1.5 md:gap-2 mb-1">
                          <span className="text-xs md:text-sm font-semibold">AI Course Engine</span>
                        </div>
                        <div className="text-[10px] md:text-xs opacity-90">Building lesson & PDF guide...</div>
                      </div>

                      <div className="p-2 md:p-4 space-y-2 md:space-y-3">
                        <div className="flex items-start gap-2 md:gap-3">
                          <div className="w-4 md:w-5 h-4 md:h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-2 md:w-3 h-2 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[10px] md:text-xs font-medium text-text-primary truncate">
                              {direction.demoTimeline.step1}
                            </div>
                            <div className="text-[8px] md:text-[10px] text-text-secondary">Completed</div>
                          </div>
                        </div>

                        <div className="flex items-start gap-2 md:gap-3">
                          <div className="w-4 md:w-5 h-4 md:h-5 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-white rounded-full" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[10px] md:text-xs font-medium text-text-primary truncate">
                              {direction.demoTimeline.step2}
                            </div>
                            <div className="h-0.5 md:h-1 bg-gray-200 rounded-full mt-1 overflow-hidden">
                              <div className="h-full bg-brand-primary rounded-full" style={{ width: '65%' }} />
                            </div>
                            <div className="text-[8px] md:text-[10px] text-brand-primary mt-0.5 font-mono tabular-nums">
                              65% complete
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-2 md:gap-3 opacity-50">
                          <div className="w-4 md:w-5 h-4 md:h-5 rounded-full border-2 border-gray-300 flex-shrink-0 mt-0.5" />
                          <div className="flex-1 min-w-0">
                            <div className="text-[10px] md:text-xs font-medium text-text-primary truncate">
                              {direction.demoTimeline.step3}
                            </div>
                            <div className="text-[8px] md:text-[10px] text-text-secondary">Pending</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 bg-white text-text-primary px-2 md:px-3 py-1 md:py-1.5 rounded-md md:rounded-lg shadow-lg text-[10px] md:text-xs font-semibold flex items-center gap-1 md:gap-2">
                      <span>{direction.steps[1].badgeText}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <div className="text-xs font-mono font-semibold text-brand-primary">
                    02. {direction.steps[1].tag}
                  </div>
                  <h3 className="font-mono text-lg md:text-xl font-medium tracking-tight text-text-primary">
                    {direction.steps[1].title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-text-light">
                    {direction.steps[1].description}
                  </p>
                </div>
              </div>

              {/* Card 3: Share */}
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="aspect-square gradient-coral rounded-xl md:rounded-2xl overflow-hidden relative flex items-center justify-center p-6 md:p-8">
                  <div className="relative w-full h-full flex flex-col items-center justify-center gap-4 md:gap-6">
                    <div className="relative w-full max-w-[140px] md:max-w-[200px]">
                      <div className="bg-white rounded-lg md:rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform">
                        <div className="aspect-video bg-gradient-to-br from-brand-primary to-brand-secondary relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 md:w-12 h-8 md:h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                              <svg
                                className="w-4 md:w-6 h-4 md:h-6 text-brand-primary ml-0.5 md:ml-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <polygon points="6,4 6,20 18,12" />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute bottom-1 md:bottom-2 right-1 md:right-2 bg-black/70 text-white text-[8px] md:text-[10px] px-1 md:px-1.5 py-0.5 rounded font-mono tabular-nums">
                            4K + PDF
                          </div>
                          <div className="absolute top-1 md:top-2 left-1 md:left-2 bg-green-600 text-white text-[7px] md:text-[8px] px-1.5 py-0.5 rounded font-bold">
                            READY
                          </div>
                        </div>

                        <div className="p-2 md:p-3 space-y-1 md:space-y-1.5">
                          <div className="h-1.5 md:h-2 bg-gray-200 rounded w-full" />
                          <div className="h-1.5 md:h-2 bg-gray-200 rounded w-3/4" />
                          <div className="flex gap-0.5 md:gap-1 mt-1 md:mt-2">
                            <div className="flex-1 h-0.5 md:h-1 bg-brand-primary rounded" />
                            <div className="flex-1 h-0.5 md:h-1 bg-gray-200 rounded" />
                          </div>
                        </div>
                      </div>

                      <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 bg-white text-text-primary px-2 md:px-3 py-1 md:py-1.5 rounded-md md:rounded-lg shadow-lg text-[10px] md:text-xs font-semibold flex items-center gap-1 md:gap-2">
                        <span>{direction.steps[2].badgeText}</span>
                      </div>
                    </div>

                    {/* Platform Icons Row */}
                    <div className="flex items-center justify-center gap-2 md:gap-3 mt-2 md:mt-4">
                      <div className="px-2.5 h-9 md:h-11 bg-purple-700 rounded-lg md:rounded-xl shadow-xl flex items-center justify-center text-white font-bold text-xs">
                        Selar
                      </div>
                      <div className="w-9 md:w-11 h-9 md:h-11 bg-red-600 rounded-lg md:rounded-xl shadow-xl flex items-center justify-center text-white font-bold text-xs">
                        YT
                      </div>
                      <div className="w-9 md:w-11 h-9 md:h-11 bg-sky-500 rounded-lg md:rounded-xl shadow-xl flex items-center justify-center text-white font-bold text-xs">
                        TG
                      </div>
                      <div className="w-9 md:w-11 h-9 md:h-11 bg-black rounded-lg md:rounded-xl shadow-xl flex items-center justify-center text-white font-bold text-xs">
                        X
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <div className="text-xs font-mono font-semibold text-brand-primary">
                    03. {direction.steps[2].tag}
                  </div>
                  <h3 className="font-mono text-lg md:text-xl font-medium tracking-tight text-text-primary">
                    {direction.steps[2].title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-text-light">
                    {direction.steps[2].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Browser Support */}
            <div className="border-t border-border-light pt-6 md:pt-8">
              <p className="text-center text-sm md:text-base text-text-primary mb-4 md:mb-6">
                {direction.browserSectionLabel}
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {['Chrome', 'Safari', 'Arc', 'Edge', 'Firefox'].map((browser) => (
                  <div
                    key={browser}
                    className="flex items-center gap-2 px-4 py-2 bg-neutral-surface rounded-lg border border-border-light"
                  >
                    <span className="text-sm text-text-primary font-medium">{browser}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section — Sticky Left Nav Moving Down With Right Content */}
        <section className="py-16 md:py-28 bg-neutral-surface" id="features">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
              {/* Sticky Navigation Column: stretches across the flex container so the sticky inner box travels all the way down */}
              <div className="w-full lg:w-1/3 lg:self-stretch">
                <div className="lg:sticky lg:top-32 space-y-2 md:space-y-3">
                  {featureNavItems.map((item, idx) => {
                    const isActive = activeFeatureId === item.id;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => scrollToSection(e, `#${item.id}`)}
                        className={`block py-3 px-4 text-base md:text-lg rounded-xl transition-all duration-200 ${
                          isActive
                            ? 'bg-white shadow-soft text-text-primary font-bold translate-x-1 border border-border-light'
                            : 'text-text-secondary opacity-50 hover:opacity-90 hover:text-text-primary font-medium'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span>{item.label}</span>
                          <span
                            className={`text-xs font-mono tabular-nums transition-opacity ${
                              isActive ? 'text-brand-primary opacity-100' : 'opacity-0'
                            }`}
                          >
                            0{idx + 1}
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Right-Side Features Content */}
              <div className="w-full lg:w-2/3 space-y-24 md:space-y-36">
                {/* Feature 1: Course + E-Book in One Click */}
                <div
                  id="feature-ai"
                  className="space-y-4 md:space-y-6 min-h-0 md:min-h-[78vh] flex flex-col justify-center"
                >
                  <div className="text-xs font-mono text-brand-primary uppercase tracking-wider">
                    01 · {direction.features.ai.nav}
                  </div>
                  <h3 className="font-heading text-2xl md:text-4xl lg:text-5xl font-normal tracking-tight leading-tight">
                    {direction.features.ai.title}
                  </h3>
                  <p className="text-sm md:text-lg leading-relaxed text-text-secondary max-w-2xl">
                    {direction.features.ai.description}
                  </p>

                  <div className="aspect-video bg-gradient-to-br from-brand-primary via-brand-secondary to-purple-300 rounded-lg md:rounded-xl overflow-hidden relative p-4 md:p-8 shadow-medium">
                    <div className="relative h-full flex items-center justify-center">
                      {/* Central AI Brain + Input/Output Nodes */}
                      <div className="relative scale-75 md:scale-100">
                        <div className="w-32 md:w-40 h-32 md:h-40 relative">
                          <div className="absolute inset-0 bg-white/20 rounded-full" />
                          <div className="absolute inset-2 md:inset-4 bg-white/30 rounded-full" />
                          <div className="absolute inset-4 md:inset-8 bg-white rounded-full flex items-center justify-center shadow-2xl">
                            <svg
                              className="w-12 md:w-16 h-12 md:h-16 text-brand-primary"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
                            </svg>
                          </div>
                        </div>

                        {/* Input nodes */}
                        <div className="absolute -left-20 md:-left-36 top-1/2 -translate-y-1/2 space-y-3">
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="bg-white rounded-lg px-3 py-2 shadow-xl text-xs font-semibold text-text-primary whitespace-nowrap">
                              Screen Video
                            </div>
                            <div className="h-px w-8 md:w-14 bg-white/60" />
                          </div>
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="bg-white rounded-lg px-3 py-2 shadow-xl text-xs font-semibold text-text-primary whitespace-nowrap">
                              Voice Notes
                            </div>
                            <div className="h-px w-8 md:w-14 bg-white/60" />
                          </div>
                        </div>

                        {/* Output nodes */}
                        <div className="absolute -right-20 md:-right-36 top-1/2 -translate-y-1/2 space-y-3">
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="h-px w-8 md:w-14 bg-white/60" />
                            <div className="bg-white rounded-lg px-3 py-2 shadow-xl text-xs font-semibold text-purple-700 whitespace-nowrap">
                              4K Course Video
                            </div>
                          </div>
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="h-px w-8 md:w-14 bg-white/60" />
                            <div className="bg-white rounded-lg px-3 py-2 shadow-xl text-xs font-semibold text-purple-700 whitespace-nowrap">
                              PDF Workbook
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute top-3 md:top-6 left-3 md:left-6 bg-white/20 backdrop-blur px-3 py-1.5 rounded-md text-white text-xs md:text-sm font-medium">
                        Extracting Steps & Screenshots...
                      </div>
                      <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur px-4 py-1.5 rounded-md text-white text-[10px] md:text-xs font-mono">
                        {direction.features.ai.badgeBottom}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 2: Studio Mic Quality Without a Studio */}
                <div
                  id="feature-professional"
                  className="space-y-4 md:space-y-6 min-h-0 md:min-h-[78vh] flex flex-col justify-center"
                >
                  <div className="text-xs font-mono text-brand-primary uppercase tracking-wider">
                    02 · {direction.features.professional.nav}
                  </div>
                  <h3 className="font-heading text-2xl md:text-4xl lg:text-5xl font-normal tracking-tight leading-tight">
                    {direction.features.professional.title}
                  </h3>
                  <p className="text-sm md:text-lg leading-relaxed text-text-secondary max-w-2xl">
                    {direction.features.professional.description}
                  </p>

                  <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg md:rounded-xl overflow-hidden relative shadow-medium">
                    <div className="bg-gray-950 border-b border-gray-700 px-2 md:px-4 py-2 md:py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2 md:gap-4">
                        <div className="flex gap-1 md:gap-2">
                          <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-500" />
                          <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-500" />
                          <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-green-500" />
                        </div>
                        <span className="text-white text-[10px] md:text-sm font-mono truncate">
                          {direction.features.professional.fileName}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <div className="px-2 md:px-3 py-1 md:py-1.5 bg-brand-primary text-white text-[10px] md:text-xs rounded font-semibold">
                          Export Ready
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 p-2 md:p-4 h-[calc(100%-48px)]">
                      <div className="md:col-span-2 bg-black rounded-md md:rounded-lg overflow-hidden relative flex flex-col justify-between">
                        <div className="aspect-video bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center relative">
                          <div className="w-12 md:w-16 h-12 md:h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                            <svg
                              className="w-6 md:w-8 h-6 md:h-8 text-white ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <polygon points="6,4 6,20 18,12" />
                            </svg>
                          </div>
                          <div className="absolute top-2 md:top-3 left-2 md:left-3 flex gap-1 md:gap-2">
                            <div className="px-2 py-0.5 bg-black/60 backdrop-blur text-white text-[10px] md:text-xs rounded font-bold">
                              4K 60fps
                            </div>
                            <div className="px-2 py-0.5 bg-black/60 backdrop-blur text-white text-[10px] md:text-xs rounded font-bold">
                              Noise-Free Audio
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-900 p-2">
                          <div className="flex gap-1">
                            <div className="h-8 flex-1 bg-gradient-to-br from-brand-primary to-purple-500 rounded" />
                            <div className="h-8 flex-1 bg-gradient-to-br from-brand-secondary to-purple-400 rounded" />
                            <div className="h-8 flex-1 bg-gradient-to-br from-purple-300 to-brand-primary rounded" />
                            <div className="h-8 flex-1 bg-gradient-to-br from-brand-primary to-brand-secondary rounded" />
                          </div>
                        </div>
                      </div>

                      <div className="hidden md:block space-y-3">
                        <div className="bg-gray-800 rounded-lg p-3">
                          <div className="text-white text-xs font-semibold mb-2">Studio Enhancements</div>
                          <div className="space-y-2">
                            {direction.features.professional.effects.map((eff) => (
                              <div key={eff} className="flex items-center gap-2 text-xs text-gray-300">
                                <span className="text-brand-primary">✓</span>
                                <span>{eff}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-3">
                          <div className="text-white text-xs font-semibold mb-2">Export Formats</div>
                          <div className="space-y-1.5 text-xs text-gray-300">
                            <div>Video: 1080p / 4K MP4</div>
                            <div>Notes: Illustrated PDF</div>
                            <div>Teaser: 9:16 Vertical Reel</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 3: Sell to Local & Global Students */}
                <div
                  id="feature-multilingual"
                  className="space-y-4 md:space-y-6 min-h-0 md:min-h-[78vh] flex flex-col justify-center"
                >
                  <div className="text-xs font-mono text-brand-primary uppercase tracking-wider">
                    03 · {direction.features.multilingual.nav}
                  </div>
                  <h3 className="font-heading text-2xl md:text-4xl lg:text-5xl font-normal tracking-tight leading-tight">
                    {direction.features.multilingual.title}
                  </h3>
                  <p className="text-sm md:text-lg leading-relaxed text-text-secondary max-w-2xl">
                    {direction.features.multilingual.description}
                  </p>

                  <div className="aspect-video bg-gradient-to-br from-brand-secondary via-purple-300 to-brand-primary rounded-lg md:rounded-xl overflow-hidden relative p-6 md:p-8 shadow-medium">
                    <div className="h-full flex flex-col items-center justify-center gap-6">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg w-full">
                        {direction.features.multilingual.languages.map((lang) => (
                          <div
                            key={lang.name}
                            className="bg-white rounded-xl px-3.5 py-2.5 shadow-lg flex items-center gap-2"
                          >
                            <span className="text-lg">{lang.flag}</span>
                            <span className="text-xs md:text-sm font-semibold text-gray-800 truncate">
                              {lang.name}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 text-white text-center">
                          <div className="text-xl md:text-2xl font-bold font-mono tabular-nums">
                            {direction.features.multilingual.stat1Val}
                          </div>
                          <div className="text-xs opacity-90">{direction.features.multilingual.stat1Label}</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 text-white text-center">
                          <div className="text-xl md:text-2xl font-bold font-mono tabular-nums">
                            {direction.features.multilingual.stat2Val}
                          </div>
                          <div className="text-xs opacity-90">{direction.features.multilingual.stat2Label}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 4: Academy & Bootcamp Cohorts */}
                <div
                  id="feature-collaboration"
                  className="space-y-4 md:space-y-6 min-h-0 md:min-h-[78vh] flex flex-col justify-center"
                >
                  <div className="text-xs font-mono text-brand-primary uppercase tracking-wider">
                    04 · {direction.features.collaboration.nav}
                  </div>
                  <h3 className="font-heading text-2xl md:text-4xl lg:text-5xl font-normal tracking-tight leading-tight">
                    {direction.features.collaboration.title}
                  </h3>
                  <p className="text-sm md:text-lg leading-relaxed text-text-secondary max-w-2xl">
                    {direction.features.collaboration.description}
                  </p>

                  <div className="bg-white rounded-lg md:rounded-xl overflow-hidden shadow-medium border border-gray-200">
                    <div className="bg-gray-50 border-b border-gray-200 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm md:text-base truncate">
                          {direction.features.collaboration.campaignName}
                        </h4>
                        <p className="text-xs text-gray-500 truncate">
                          {direction.features.collaboration.campaignMeta}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setModalMessage(
                            `Shared "${direction.features.collaboration.campaignName}" workspace link with your co-instructors!`
                          )
                        }
                        className="px-3 py-1.5 bg-brand-primary text-white text-xs md:text-sm rounded font-medium cursor-pointer"
                      >
                        Share Cohort
                      </button>
                    </div>

                    <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {direction.features.collaboration.activities.map((act, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 flex items-start gap-3"
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                            {act.user.slice(0, 1)}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-xs md:text-sm font-medium text-gray-900">{act.user}</div>
                            <div className="text-xs text-gray-500">
                              {act.action} · {act.detail}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 md:py-24 bg-neutral-dark text-white overflow-hidden" id="testimonials">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <div className="text-xs md:text-sm font-mono font-medium text-brand-accent mb-3">
                {direction.testimonialsKicker}
              </div>
              <p
                className="font-heading text-2xl md:text-4xl lg:text-5xl font-normal tracking-tight leading-tight max-w-3xl mx-auto px-4"
                style={{ textWrap: 'balance' }}
              >
                {direction.testimonialsHeadingPrefix}
                <em className="not-italic font-semibold text-brand-accent">
                  {direction.testimonialsHeadingHighlight}
                </em>
                {direction.testimonialsHeadingSuffix}
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-dark to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-dark to-transparent z-10 pointer-events-none" />

              <div className="overflow-hidden">
                <div className="flex gap-6 animate-testimonial-scroll" style={{ width: 'fit-content' }}>
                  {[...direction.testimonials, ...direction.testimonials].map((t, idx) => (
                    <div
                      key={`${t.name}-${idx}`}
                      className="flex-none w-[340px] bg-white text-text-primary rounded-xl p-6 flex flex-col justify-between h-[320px]"
                    >
                      <h4 className="font-heading text-lg md:text-xl font-normal tracking-tight leading-snug mb-auto">
                        {t.quote}
                        <em className="not-italic font-semibold">{t.highlight1}</em>
                        {t.quoteMid}
                        <em className="not-italic font-semibold">{t.highlight2}</em>
                        {t.quoteEnd}
                      </h4>
                      <div className="flex items-center gap-3 mt-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">
                          {t.name.slice(0, 1).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-mono font-semibold text-xs">{t.name}</div>
                          <div className="text-xs text-text-secondary">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 md:py-24 bg-neutral-surface" id="pricing">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <div className="text-xs md:text-sm font-mono font-medium text-text-secondary mb-3">
                Pricing
              </div>
              <h2
                className="font-heading text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight max-w-3xl mx-auto mb-3 md:mb-4 px-4"
                style={{ textWrap: 'balance' }}
              >
                {direction.pricingHeading}
              </h2>
              <p className="text-sm md:text-lg text-text-secondary max-w-2xl mx-auto px-4">
                {direction.pricingSubheading}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {/* Starter Plan */}
              <div className="bg-white rounded-xl p-8 border border-border-light flex flex-col justify-between">
                <div>
                  <div className="mb-6">
                    <h3 className="font-mono text-lg font-semibold text-text-primary mb-2">
                      {direction.plans.starter.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl lg:text-5xl font-bold text-text-primary font-mono tabular-nums">
                        {direction.plans.starter.price}
                      </span>
                      <span className="text-text-secondary">{direction.plans.starter.period}</span>
                    </div>
                    <p className="text-sm text-text-light mt-2">{direction.plans.starter.desc}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {direction.plans.starter.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm text-text-primary">{f}</span>
                      </li>
                    ))}
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-text-secondary opacity-30 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span className="text-sm text-text-secondary line-through opacity-50">
                        {direction.plans.starter.missingFeature}
                      </span>
                    </li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setModalMessage(`Selected ${direction.plans.starter.name} (${direction.plans.starter.price})`)
                  }
                  className="block w-full text-center px-6 py-3 bg-neutral-surface text-text-primary font-medium text-sm rounded-md hover:bg-text-primary hover:text-white transition-all cursor-pointer"
                >
                  {direction.plans.starter.cta}
                </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-text-primary text-white rounded-xl p-8 border-2 border-brand-primary relative flex flex-col justify-between">
                <div>
                  <div className="mb-6">
                    <div className="text-xs font-mono uppercase tracking-wider text-brand-primary mb-2">
                      {direction.plans.pro.badge}
                    </div>
                    <h3 className="font-mono text-lg font-semibold mb-2">{direction.plans.pro.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl lg:text-5xl font-bold font-mono tabular-nums">
                        {direction.plans.pro.price}
                      </span>
                      <span className="opacity-70">{direction.plans.pro.period}</span>
                    </div>
                    <p className="text-sm opacity-70 mt-2">{direction.plans.pro.desc}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {direction.plans.pro.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setModalMessage(`Selected ${direction.plans.pro.name} (${direction.plans.pro.price})`)
                  }
                  className="block w-full text-center px-6 py-3 bg-brand-primary text-text-primary font-medium text-sm rounded-md hover:shadow-soft transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  {direction.plans.pro.cta}
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white rounded-xl p-8 border border-border-light flex flex-col justify-between">
                <div>
                  <div className="mb-6">
                    <h3 className="font-mono text-lg font-semibold text-text-primary mb-2">
                      {direction.plans.enterprise.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl lg:text-5xl font-bold text-text-primary font-mono">
                        {direction.plans.enterprise.price}
                      </span>
                    </div>
                    <p className="text-sm text-text-light mt-2">{direction.plans.enterprise.desc}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {direction.plans.enterprise.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm text-text-primary">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setModalMessage(`Contacting academy team for ${direction.plans.enterprise.name}`)
                  }
                  className="block w-full text-center px-6 py-3 bg-neutral-surface text-text-primary font-medium text-sm rounded-md hover:bg-text-primary hover:text-white transition-all cursor-pointer"
                >
                  {direction.plans.enterprise.cta}
                </button>
              </div>
            </div>

            {/* Trust Note */}
            <div className="mt-12 md:mt-16 text-center">
              <p className="text-sm text-text-secondary mb-4">{direction.trustNote}</p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-text-secondary">
                {direction.trustBadges.map((badge, index) => (
                  <React.Fragment key={badge}>
                    {index > 0 && <span aria-hidden="true">·</span>}
                    <span className="font-medium">{badge}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-24 bg-neutral-background" id="faq">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-16">
              <div className="lg:w-2/5">
                <div className="text-xs md:text-sm font-mono font-medium text-text-secondary mb-3">
                  {direction.faqKicker}
                </div>
                <h2
                  className="font-heading text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight"
                  style={{ textWrap: 'balance' }}
                >
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="lg:w-3/5 space-y-3 md:space-y-4">
                {direction.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={faq.q}
                      className="border border-border-light rounded-lg overflow-hidden bg-white"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full flex justify-between items-center p-4 md:p-6 text-left cursor-pointer"
                      >
                        <span className="font-medium text-sm md:text-base text-text-primary">
                          {faq.q}
                        </span>
                        <div className="w-6 h-6 relative flex-shrink-0 ml-4">
                          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-0.5 bg-text-primary" />
                          <span
                            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-3.5 bg-text-primary transition-transform ${
                              isOpen ? 'rotate-90' : 'rotate-0'
                            }`}
                          />
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base text-text-light leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="hero-gradient pt-16 pb-8 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-12 pb-12 border-b border-black/10">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 flex-1">
              <div className="flex flex-col gap-3">
                <h4 className="font-mono text-base font-medium mb-1">Product</h4>
                <a
                  href="#features"
                  onClick={(e) => scrollToSection(e, '#features')}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  onClick={(e) => scrollToSection(e, '#how-it-works')}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  How It Works
                </a>
                <a
                  href="#pricing"
                  onClick={(e) => scrollToSection(e, '#pricing')}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#faq"
                  onClick={(e) => scrollToSection(e, '#faq')}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  FAQ
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="font-mono text-base font-medium mb-1">Creator Use Cases</h4>
                <a
                  href="#features"
                  onClick={(e) => scrollToSection(e, '#features')}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  Selar & Mainstack Courses
                </a>
                <a
                  href="#features"
                  onClick={(e) => scrollToSection(e, '#features')}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  Coding & Tech Bootcamps
                </a>
                <a
                  href="#features"
                  onClick={(e) => scrollToSection(e, '#features')}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  YouTube & TikTok Tutorials
                </a>
                <a
                  href="#features"
                  onClick={(e) => scrollToSection(e, '#features')}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  PDF Workbooks & Study Guides
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="font-mono text-base font-medium mb-1">Ecosystem</h4>
                <span className="text-sm text-text-secondary">Selar & Mainstack Export</span>
                <span className="text-sm text-text-secondary">Paystack Naira Billing</span>
                <span className="text-sm text-text-secondary">Telegram Cohort Ready</span>
                <span className="text-sm text-text-secondary">Low-Data Student PDFs</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-8">
            <div className="max-w-md">
              <p className="text-sm text-text-primary font-light leading-relaxed">
                {direction.footerTagline}
              </p>
            </div>
            <p className="text-sm text-text-primary whitespace-nowrap">
              © 2026 {direction.brandName}. Built for Nigerian & African Creators.
            </p>
          </div>
        </div>
      </footer>

      {/* Interactive Feedback Modal */}
      {modalMessage && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <h3 className="font-heading text-xl font-semibold text-text-primary">
              {direction.brandName}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">{modalMessage}</p>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setModalMessage(null)}
                className="px-4 py-2 bg-text-primary text-white text-xs font-medium rounded-md cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
