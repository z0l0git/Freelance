import { HeaderLeft } from "@/components/Header/HeaderLeft"
import { HeaderRight } from "@/components/Header/HeaderRight"
import { url } from "inspector"




export const Header = () => {
    return (
        <div className="md:w-100% md:h-[108px] bg-[url(https://res.cloudinary.com/dxarul6xr/image/upload/v1711450248/a3hyxq2lk36i49zahacj.jpg)]  md:flex md:items-center md:justify-center ">
            <div className="w-[426px] h-[80px] flex items-center justify-between  md:w-[1296px] md:h-[60px] md:flex md:items-center md:justify-between ">
                <HeaderLeft />
                <HeaderRight />
            </div>
        </div>
    )
}