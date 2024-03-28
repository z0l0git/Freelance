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

    return <div className="relative h-[80px] flex items-center justify-center  md:w-[574px] md:h-[60px] md:flex md:items-center md:justify-between flex items-center justify-between">
        <div className="flex items-center justify-between  md:block md:w-[362px] md:h-[60px] md:rounded-3xl md:border md:border-[#3f3877] md:flex md:items-center md:justify-around border border-black">
            <button onClick={() => { handleSearchShow() }} className="w-[30px] h-[30px] flex items-center justify-center border border-black rounded-full block  md:hidden">
                <CiSearch className="w-[20px] h-[20px] text-white" width={16} height={24} />
            </button>
            <div className="md:flex md:items-center">
                <CiSearch className="hidden md:block md:w-[25px] md:h-[25px] text-white" width={20} height={20} />
                <input type="text" id="name" name="name" placeholder="Search" className="hidden md:block md:w-[205px] md:h-[30px] md:bg-transparent border-transparent text-white" />
            </div>
            <div className="hidden md:relative md:w-[382px] md:flex md:flex-col md:items-center md:rounded-[18px]">
                {!open ? (
                    <div onClick={() => setOpen((prev) => !prev)} className="md:w-fit md:h-[42px] md:cursor-pointer md:px-8 md:gap-[10px] md:rounded-full md:bg-gradient-to-r from-sky-600 to-indigo-600 md:rounded-lg md:text-white flex justify-around items-center  border-transparent duration-300">
                        <h1>{select}</h1>
                        <FaChevronDown />
                    </div>
                ) : (
                    <div onClick={() => setOpen((prev) => !prev)} className="md:w-fit md:h-[42px] md:px-8 md:cursor-pointer md:gap-10px] md:rounded-full md:bg-gradient-to-r from-sky-600 to-indigo-600 md:rounded-lg md:text-white flex justify-center items-center">
                        <h1>{select}</h1>
                        <FaChevronUp />
                    </div>
                )}
                {open && (
                    <div className="absolute top-11 w-[120px] h-fit bg-gradient-to-r from-sky-600 to-indigo-600  active:border-white duration-300 active:text-white text-white rounded-lg">
                        {Drops.map((el, index) => {
                            return (
                                <div key={index} onClick={() => {
                                    handleSelect(el.place)
                                }} className="w-[120px] h-[42px] cursor-pointer  bg-gradient-to-r from-sky-600 to-indigo-600 rounded-lg text-white flex flex-row justify-around items-center active:border-white duration-300 active:text-white">
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
                    className=" border border-black absolute top-[-100%]  right-0  bg-white  w-screen h-[60px] flex items-center justify-between md:hidden ">
                    <div className="w-[316px] h-[60px] flex items-center justify-center ">
                        <input className="w-[260px] h-[40px]" type="text" name="name" id="name" placeholder="Search here" />
                    </div>
                    <button onClick={() => { handleSearchShow(show) }} className="w-[109px] h-[60px] border border-black bg-[#0D47A1] text-white text-[36px] cursor-pointer">Close</button>
                </motion.div>
            }
            {/* button orj irne */}
        </div>
    </div>
}