const Navbar = () => {
  return (
    <div className="w-full h-24 max-w-5xl mx-auto px-8 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-extrabold text-[#5f000c] drop-shadow-[0_2px_8px_rgba(255,215,255,0.6)]">صمم مذكراتك </h1>

      <div className="flex items-center flex-1 mx-[85px]">
        <div className="flex-1 relative">
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

      <div className="flex items-center gap-5">
        <button className="px-3 py-1.5 text-xs bg-transparent hover:bg-golden-orange/10 rounded-lg transition-colors readex-pro-medium">
          مسارات التعلم
        </button>
        <button className="px-3 py-1.5 text-xs bg-transparent hover:bg-golden-orange/10 rounded-lg transition-colors readex-pro-medium">
          تسجيل الدخول
        </button>
        <button className="px-3 py-1.5 text-xs bg-transparent hover:bg-golden-orange/10 rounded-lg border-2 border-yellow-orange transition-colors readex-pro-medium">
          إنشاء حساب
        </button>
      </div>
    </div>
  )
}

export default Navbar