import Card from "@/components/Card";
import { casinos } from "@/data/casinos";

export default function TopCasinos() {
    return (
        <section className="py-10 px-4">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
                <div className="lg:text-center mt-6 lg:mt-14">
                    <h2 className="text-[24px] lg:text-[48px] font-bold text-center text-[#34611C]">Discover <span className="glow-text">Premium</span>  Casinos</h2>
                    <p className="opacity-60 text-center">Expert reviews, exclusive bonuses, and trusted recommendations for the <span className="glow-text">UK's top-rated</span> online casinos</p>
                    <div className="lg:w-[60%] mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 pt-5 lg:pt-10 justify-items-center">
                            <div className="flex flex-col rouneded-[8px] gap-2 w-full items-center cursor-pointer group bg-white/5 backdrop-blur-sm border border-[#34611C] rounded-2xl p-4 text-center transition-all duration-300 hover:scale-105">
                                <h3 className="font-bold text-[#34611C] lg:text-[20px]">50M+</h3>
                                <p className="text-[14px] font-bold">Total Winnings Paid</p>
                            </div>
                            <div className="flex flex-col rouneded-[8px] gap-2 w-full items-center cursor-pointer group bg-white/5 backdrop-blur-sm border border-[#34611C] rounded-2xl p-4 text-center transition-all duration-300 hover:scale-105">
                                <h3 className="font-bold text-[#34611C] lg:text-[20px]">500K+</h3>
                                <p className="text-[14px] font-bold">Happy Players</p>
                            </div>
                            <div className="flex flex-col rouneded-[8px] gap-2 w-full items-center cursor-pointer group bg-white/5 backdrop-blur-sm border border-[#34611C] rounded-2xl p-4 text-center transition-all duration-300 hover:scale-105">
                                <h3 className="font-bold text-[#34611C] lg:text-[20px]">5000+</h3>
                                <p className="text-[14px] font-bold">Casino Games</p>
                            </div>
                            <div className="flex flex-col rouneded-[8px] gap-2 w-full items-center cursor-pointer group bg-white/5 backdrop-blur-sm border border-[#34611C] rounded-2xl p-4 text-center transition-all duration-300 hover:scale-105">
                                <h3 className="font-bold text-[#34611C] lg:text-[20px]">24/7</h3>
                                <p className="text-[14px] font-bold">Expert Support</p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Cards */}
                <h2 id="top-casinos" className="text-[24px] lg:text-[48px] font-bold text-center text-[#34611C]">Top Rated <span className="glow-text">Online Casinos</span></h2>
                <div className="flex flex-col xl:gap-8 gap-4">
                    {casinos.map((casino, index) => (
                        <Card
                            key={index}
                            rank={index + 1}
                            {...casino}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
