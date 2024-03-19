const JarIcon = () => {
    return (
        <div className="relative text-center">
          
          <img src="https://send.monobank.ua/img/jar_bg.png" 
          className="bg-gray-100h-52 w-52 mb-5" 
          alt="jar"/>
          <img
            src="https://send.monobank.ua/img/jar/uah_50.png"
            className="h-53 w-40 left-9 top-2.5 absolute"
            
            alt="glass"
          />
          <p className="font-medium text-base leading-relaxed text-center">Артем К. збирає</p>
          <p className=" font-black  text-base md:text-2xl leading-normal md:leading-snug mb-2 md:mb-4">На ремонт медеваку</p>
        </div>
    );
}

export default JarIcon;