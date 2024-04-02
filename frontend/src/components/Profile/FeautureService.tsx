import { ServiceMap } from "./ProfileMaps"



const FeatureServiveData = [
    {
        image: "https://res.cloudinary.com/dxarul6xr/image/upload/v1711677109/ftqc66hsl43dt81chr0k.jpg",
        type: "Machine Learning",
        levelNum: "2",
        topic: "Machine Learning Predictive",
        rate: "5.0",
        rateNum: "23",
        orderNum: "10",
        price: "400"
    },
    {
        image: "https://res.cloudinary.com/dxarul6xr/image/upload/v1711677109/ftqc66hsl43dt81chr0k.jpg",
        type: "Machine Learning",
        levelNum: "2",
        topic: "Machine Learning Predictive",
        rate: "5.0",
        rateNum: "23",
        orderNum: "10",
        price: "400"
    },
    {
        image: "https://res.cloudinary.com/dxarul6xr/image/upload/v1711677109/ftqc66hsl43dt81chr0k.jpg",
        type: "Machine Learning",
        levelNum: "2",
        topic: "Machine Learning Predictive",
        rate: "5.0",
        rateNum: "23",
        orderNum: "10",
        price: "400"
    },
    {
        image: "https://res.cloudinary.com/dxarul6xr/image/upload/v1711677109/ftqc66hsl43dt81chr0k.jpg",
        type: "Machine Learning",
        levelNum: "2",
        topic: "Machine Learning Predictive",
        rate: "5.0",
        rateNum: "23",
        orderNum: "10",
        price: "400"
    }
]

export const FeatureServive = () => {
    return (
        <div className="w-full h-fit flex flex-col items-center justify-center gap-6 py-6 ">
            <div className="w-[816px] flex flex-col justify-around  ">
                <strong className="text-[32px] font-sans text-[#222E48]">Featured Services</strong>
            </div>
            <div className="w-[840px] flex flex-wrap pl-2 gap-6  ">
                {FeatureServiveData.map((el, index) => {
                    return (
                        <ServiceMap key={index}
                            image={el.image}
                            type={el.type}
                            levelNum={el.levelNum}
                            topic={el.topic}
                            rate={el.rate}
                            rateNum={el.rateNum}
                            orderNum={el.orderNum}
                            price={el.price} />
                    )
                })}
            </div>
        </div>
    )
}