import Image from "next/image"

export const HeaderLeft = () => {
    return <div className="w-[100px] h-[26px] md:w-[434px] md:h-[49px] flex justify-between ">
        <Image src="https://res.cloudinary.com/dxarul6xr/image/upload/v1711431278/ceeje3gqfjhgdrsayyi3.png" alt="" priority={true} width={186} height={49} />
        <button className="hidden md:block md:btn md:text-white">How It Works</button>
        <button className="hidden md:block md:btn md:text-white">Why AIHire</button>
    </div>
}