import React from 'react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <nav className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop & Mobile Header */}
        <div className="flex items-center justify-between h-16 mt-5">
          {/* Logo */}
          <div className="flex-shrink-0 ml-5">
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#5f000c] drop-shadow-[0_2px_8px_rgba(255,215,255,0.6)]">
              صمم مذكراتك
            </h1>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:block flex-grow mx-8">
            <div className="relative max-w-3xl">
            <input 
            type="text"
            className="w-full py-3 pl-20 pr-4 text-sm rounded-[20px] border border-dark-charcoal focus:outline-none focus:border-golden-orange"
            placeholder="ابحث عن مذكرات مادتك ..."
              />
              <button className="absolute left-0 top-0 h-full px-4 text-sm bg-yellow-orange text-dark-charcoal rounded-l-[20px] border-y border-l border-dark-charcoal hover:bg-golden-orange/10 transition-colors readex-pro-medium">
                ابحث
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5">
            <button className="px-3 py-1.5 text-xs bg-transparent hover:bg-golden-orange/10 rounded-lg transition-colors readex-pro-medium group relative overflow-hidden">
              <span className="inline-flex items-center animate-pulse">
              🔥 عروض اليوم 🔥
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-red-400 to-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            <button className="px-3 py-1.5 text-xs bg-transparent hover:bg-golden-orange/10 rounded-lg transition-colors readex-pro-medium">
              تسجيل الدخول
            </button>
            <button className="px-3 py-1.5 text-xs bg-transparent hover:bg-golden-orange/10 rounded-lg border-2 border-yellow-orange transition-colors readex-pro-medium">
              إنشاء حساب
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark-charcoal hover:bg-golden-orange/10"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Bar - Only visible on mobile below header */}
        <div className="md:hidden py-4">
          <div className="relative max-w-3xl mx-auto">
            <input 
              type="text"
              className="w-full py-3 pl-20 pr-4 text-sm rounded-[20px] border border-dark-charcoal focus:outline-none focus:border-golden-orange"
              placeholder="ابحث عن مذكرات مادتك ..."
            />
            <button className="absolute left-0 top-0 h-full px-4 text-sm bg-yellow-orange text-dark-charcoal rounded-l-[20px] border-y border-l border-dark-charcoal hover:bg-golden-orange/10 transition-colors readex-pro-medium">
              ابحث
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`md:hidden fixed inset-y-0 right-0 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out bg-white w-64 z-50 shadow-lg`}>
        <div className="p-6 space-y-4">
          {/* Logo */}
          <div className="flex justify-center mb-6">
          <h1 className="text-xl sm:text-2xl font-extrabold text-[#5f000c] drop-shadow-[0_2px_8px_rgba(255,215,255,0.6)]">
              صمم مذكراتك
            </h1>
          </div>

          {/* Navigation Links */}
          <button className="px-3 py-1.5 text-sm bg-transparent hover:bg-golden-orange/10 rounded-lg transition-colors readex-pro-medium group relative overflow-hidden cursor-pointer">
            <span className="inline-flex items-center animate-pulse relative z-10">
              عروض اليوم 🔥
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-red-500 to-yellow-300 opacity-0 group-hover:opacity-30 transition-all duration-500 animate-gradient-x"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button className="w-full px-3 py-1.5 text-sm bg-transparent hover:bg-golden-orange/10 rounded-lg transition-colors readex-pro-medium text-right">
            تسجيل الدخول
          </button>
          <button className="w-full px-3 py-1.5 text-sm bg-transparent hover:bg-golden-orange/10 rounded-lg border-2 border-yellow-orange transition-colors readex-pro-medium text-right">
            إنشاء حساب
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;