import Image from "next/image";

export const HeaderHero = () => {
  return (
    <div className="w-screen relative ">
      <div className="w-screen lg:h-[784px] h-[870px] relative flex justify-center">
        <Image alt="" src="/bg.jpeg" layout="fill" />
        <div className="absolute left-[120px] sm:top-[90px] top-[130px] animate-[wiggle_1s_ease-in-out_infinite]">
          <Image alt="" src="/dash.png" width={170} height={150} />
        </div>
        <div className=" absolute md:left-[400px] left-[120px] md:w-[70px] w-[50px] md:h-[70px] h-[50px] md:top-[90px] top-[40px] animate-[wiggle_1s_ease-in-out_infinite] ">
          <Image alt="" src="/phone.png" layout="fill" />
        </div>
        <div className="absolute md:w-[270px] w-[180px]   md:h-[400px] h-[259px]  xl:left-[90px] left-[10px] bottom-[90px] rounded-[130px] overflow-hidden animate-[BigImage_1s_ease-in-out_infinite] ">
          <Image alt="" src="/neg.jpeg" layout="fill" />
        </div>
        <div className="absolute lg:w-[270px] sm:w-[180px] w-[100px] lg:h-[400px] sm:h-[259px] h-[160px] xl:right-[90px] right-[10px] sm:top-[90px] top-[20px] rounded-[130px] overflow-hidden animate-[BigImage_1s_ease-in-out_infinite]">
          <Image alt="" src="/hoyr.jpeg" layout="fill" />
        </div>
        <div className="absolute md:w-[200px] w-[200px] md:h-[120px] h-[120px] md:right-[120px] sm:right-[70px] right-[20px] lg:bottom-[90px] sm:bottom-[180px] bottom-[100px] animate-[wiggle_1s_ease-in-out_infinite] ">
          <Image alt="" src="/dash2.png" layout="fill" />
        </div>

        <div className="absolute   text-center flex justify-center items-center mt-[200px]">
          <div className="lg:w-[724px]  sm:w-[600px]   gap-[25px] flex flex-col ">
            <div className=" text-amber-600 font-semibold text-[23px]">
              Empower Your AI Journey
            </div>
            <div className="text-center font-semibold lg:text-[68px] sm:text-[50px] mobile:text-[40px] text-[30px] leading-tight text-white">
              Discover AI Freelance <br />
              Collaboration
            </div>
            <div className="border border-zinc-400 bg-[#1d1b2f] rounded-[32px] mobile:h-[60px] h-[40px] flex items-center ">
              <input
                className="mx-[25px] bg-[#1d1b2f] sm:w-[350px] w-[300px] text-white outline-none"
                placeholder="What you're looking for?"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};