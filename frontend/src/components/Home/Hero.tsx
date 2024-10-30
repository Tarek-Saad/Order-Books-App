const Hero = () => {
  const texts = [
    {type : "hook",text : "صمم مذكرتك بالشكل الى فى دماغك بالظبط"},
    {type : "description", text : "إنشاء مذكرات جذابة ومعقدة بأسهل طريقة ممكنة"},
  ]

  return (  
    <div className="flex flex-col lg:flex-row">
      <div className="min-h-[75vh] flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/6 flex flex-col items-center lg:items-start justify-center px-4 lg:px-0 text-center lg:text-right py-8 lg:py-0">
      <h1 
        className="text-3xl md:text-4xl lg:text-6xl lg:leading-tight font-semibold bg-clip-text text-transparent bg-gradient-to-t from-yellow-orange to-second drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
      >
        {texts[0].text}
      </h1>
      <p className="text-lg md:text-xl mt-4 lg:mt-5 text-golden-orange drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)]">{texts[1].text}</p>
      <div className="mt-6 lg:mt-8">
        <button className="text-dark-charcoal text-base lg:text-lg px-8 lg:px-10 py-2.5 lg:py-3 rounded-full border-2 border-golden-orange-100 hover:bg-golden-orange hover:text-white transition-all duration-300">إنشاء مذكرة</button>
      </div>
    </div>
    <div className="w-full lg:w-3/6 relative h-[300px] md:h-[400px] lg:h-auto mt-8 lg:mt-0">
      <img
        src="https://i.ibb.co/VY2VPdx/girl.png"
        alt="Notebook illustration" 
        className="w-full h-full mt-[-50px] object-cover lg:object-cover lg:mt-[40px] lg:mr-[100px] scale-100 lg:scale-125 relative z-10"
      />
      {/* 

      <div className="absolute top-1/4 -left-4 lg:-left-8 z-20">
        <img 
          src="https://i.ibb.co/8r7D48W/book1.png" 
          alt="Floating book" 
          className="w-16 h-14 lg:w-20 lg:h-20 scale-100 lg:scale-150 animate-[float_3s_ease-in-out_infinite]" 
        />
      </div>
      
      <div className="absolute bottom-1/3 right-2 lg:right-4 z-20">
        <img 
          src="https://i.ibb.co/8r7D48W/book1.png" 
          alt="Floating book" 
          className="w-16 h-14 lg:w-22 lg:h-22 scale-100 lg:scale-150 animate-[float_4s_ease-in-out_infinite]" 
        />
      </div>

      <div className="absolute top-1/3 right-4 lg:right-8 z-20">
        <img 
          src="https://i.ibb.co/SBPFwC3/Cover.png" 
          alt="Floating idea" 
          className="w-8 h-8 lg:w-12 lg:h-12 scale-100 lg:scale-150 animate-[float_2s_ease-in-out_infinite]" 
        />
      </div>

      <div className="absolute bottom-1/4 -left-2 lg:-left-4 z-20">
        <img 
          src="https://i.ibb.co/SBPFwC3/Cover.png" 
          alt="Floating idea" 
          className="w-10 h-10 lg:w-20 lg:h-20 scale-100 lg:scale-150 animate-[float_3.5s_ease-in-out_infinite]" 
        />
      </div>
            */}

    
    </div>
      </div>
    </div>
  );
};

export default Hero;
