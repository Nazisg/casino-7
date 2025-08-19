import Link from "next/link";

export default function Card({ rank, name, icon, rating, minDeposit, methods, bonus, link }) {
    return (
        <div className="relative transform hover:scale-[1.02] group bg-[#34611C]/30 border border-[#34611C]/60 overflow-hidden transition-all duration-300 ease-in-out hover:bg-[#34611C]/30 hover:border-[#34611C] hover:shadow-2xl hover:shadow-amber-500/10 rounded-[12px] xl:p-8 p-4 grid xl:grid-cols-5 grid-cols-2 gap-5">

            {/* Card Icon + Rank */}
            <div className="col-span-1 flex gap-4 items-center">
                <div className="xl:text-[30px] text-[16px] col-span-1 flex xl:items-center justify-center text-4xl font-bold text-[#34611C]/50 transition-colors duration-300 group-hover:text-[#34611C]">
                    #{rank}
                </div>
                <Link href={link} target="_blank" rel="noopener noreferrer">
                    <img
                        src={icon}
                        alt={name || "casino-logo"}
                        className="w-full h-full object-contain max-h-[50px]"
                    />
                </Link>
            </div>

            {/* Expert Rating */}
            <div className="col-span-1 flex flex-col gap-2 items-center justify-center">
                <p className="opacity-50 text-[12px] xl:text-[16px]">Expert Rating</p>
                <div className="flex gap-1 items-center">
                    {Array(5)
                        .fill()
                        .map((_, i) => (
                            <img
                                key={i}
                                src="/icons/rating-star.svg"
                                alt="star"
                                className={`w-4 h-4 ${i >= Math.round(rating) ? "opacity-30" : ""}`}
                            />
                        ))}
                </div>
                <h4 className="xl:text-[24px] font-bold">{rating}</h4>
            </div>

            {/* Min Deposit */}
            <div className="col-span-1 flex flex-col gap-1 xl:gap-2 xl:items-center justify-center">
                <p className="opacity-50 text-[12px] xl:text-[16px]">Min Deposit</p>
                <h4 className="xl:text-[24px] font-bold">{minDeposit}</h4>
                <div className="flex gap-1 flex-wrap xl:justify-center">
                    {methods.map((method, i) => (
                        <div
                            key={i}
                            className="text-[#34611C] px-1 xl:py-1 xl:px-2 rounded-[12px] border border-[#34611C] text-[10px] xl:text-[12px]"
                        >
                            {method}
                        </div>
                    ))}
                </div>
            </div>

            {/* Welcome Bonus */}
            <div className="col-span-1 flex flex-col gap-2 xl:items-center justify-center">
                <p className="opacity-50 text-[12px] xl:text-[16px]">Welcome Bonus</p>
                <h4 className="xl:text-[24px] xl:text-center font-bold">{bonus}</h4>
            </div>

            {/* Button */}
            <div className="col-span-2 xl:col-span-1 flex items-center w-full ">
                <Link href={link} target="_blank" rel="noopener noreferrer" className="w-full">
                    <button className="font-bold py-2 px-10 w-full rounded-[8px] bg-[#34611C] cursor-pointer bg-[#34611C] text-white border border-[#34611C] shadow-[0_0_5px_#34611C,0_0_10px_#34611C,0_0_20px_#34611C]">
                        Visit
                    </button>
                </Link>
            </div>
        </div>
    );
}
