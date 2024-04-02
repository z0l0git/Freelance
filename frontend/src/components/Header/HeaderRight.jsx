"use client"
import { CiSearch } from "react-icons/ci";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

//searchin hajuudah menuni mock data
const Drops = [
    {
        place: "Talent"
    }, {
        place: "Hire Me"
    },
    {
        place: "Professional"
    }
]



export const HeaderRight = (props) => {

    const [show, setShow] = useState(false)

    const [select, setSelect] = useState("Talent")

    const [open, setOpen] = useState(false)

    const handleSearchShow = () => {
        setShow(!show)
        console.log("wrok");
    }


    const handleSelect = (place) => {
        setSelect(place)
        setOpen(!open)

    }

    return <div className="relative  h-[80px] flex items-center justify-center  md:w-[574px] md:h-[60px] md:flex md:items-center md:justify-between">
        <div className="w-[159px] h-[33px] flex items-center justify-between md:w-[400px] md:h-[60px] md:rounded-3xl md:border md:border-[#3f3877] md:flex md:items-center md:justify-around ">
            <button onClick={() => { handleSearchShow() }} className="w-[30px] h-[30px] flex items-center justify-center border border-black rounded-full  md:hidden">
                <CiSearch className="w-[20px] h-[20px] text-white" width={16} height={24} />
            </button>
            <div className="md:flex md:items-center">
                <CiSearch className="hidden md:block md:w-[25px] md:h-[25px] text-white" width={20} height={20} />
                <input type="text" id="name" name="name" placeholder="Search" className="hidden md:block md:w-[205px] md:h-[30px] md:bg-transparent border-transparent text-white" />
            </div>
            <div className="hidden md:relative md:w-[382px] md:flex md:flex-col md:items-center md:rounded-full">
                {!open ? (
                    <div onClick={() => setOpen((prev) => !prev)} className="md:w-fit md:h-[42px] md:cursor-pointer md:px-4 md:gap-[10px] md:rounded-full md:bg-[#0D47A1] md:text-white flex justify-around items-center  border-transparent duration-300">
                        <h1>{select}</h1>
                        <FaChevronDown />
                    </div>
                ) : (
                    <div onClick={() => setOpen((prev) => !prev)} className="md:w-fit md:h-[42px] md:px-4 md:cursor-pointer md:gap-[10px] md:rounded-full md:bg-[#0D47A1] md:text-white flex justify-center items-center">
                        <h1>{select}</h1>
                        <FaChevronUp />
                    </div>
                )}
                {open && (
                    <div className="absolute top-11 w-[120px] h-fit bg-white  text-black rounded-full">
                        {Drops.map((el, index) => {
                            return (
                                <div key={index} onClick={() => {
                                    handleSelect(el.place)
                                }} className="w-[120px] h-[42px] divide-y divide-solid cursor-pointer bg-white rounded-sm text-black flex flex-row justify-around items-center active:font-semibold ">
                                    {el.place}
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
            {show &&
                <motion.div
                    initial={{ top: -100 }}
                    animate={{ top: 0, onDurationChange: 0.3 }}
                    exit={{ top: -100 }}
                    className="  absolute bg-white left-[-168%] flex items-center justify-between md:hidden ">
                    <div className="w-[316px] h-[60px] flex items-center justify-center ">
                        <input className="w-[260px]" type="text" name="name" id="name" placeholder="Search here" />
                    </div>
                    <button onClick={() => { handleSearchShow(show) }} className="w-[109px] h-[60px]  bg-[#0D47A1] text-white text-[36px] cursor-pointer">Close</button>
                </motion.div>
            }
            {/* button orj irne */}
        </div>
    </div>
}