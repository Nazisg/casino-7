export default function Banner() {
    return (
        <section
            className="relative py-10 lg:py-20 px-4 bg-cover bg-center"
            style={{ backgroundImage: "url('/icons/3d-img.jpg')" }}
        >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

            <div className="relative max-w-7xl mx-auto flex">
                <div className="lg:w-[50%] w-full flex flex-col gap-3 items-start">
                  
                    <h2 className="text-[32px] md:text-[48px] xl:text-[54px] font-bold text-white">
                        Welcome to <span className="">Casinos</span> 
                    </h2>
                    <p className="opacity-80 text-white">
                        We've done the hard work of reviewing and ranking the world's best online casinos.
                        Play with confidence, claim the biggest bonuses, and win big.
                    </p>
                    <a href="/top-casinos">
                        <button className="bg-[#34611C] mt-3 text-white border cursor-pointer border-[#34611C] shadow-[0_0_5px_#34611C,0_0_10px_#34611C,0_0_20px_#34611C] rounded-[10px] py-3 font-bold px-6">
                            Claim Exclusive Bonus
                        </button>
                    </a>
                </div>

                <div className="lg:w-[50%] hidden lg:flex items-center justify-end w-full">
                    <img src="/icons/casino-3d.png" alt="3d image" className=" w-[250px] " />
                </div>
            </div>

        </section>
    );
}
