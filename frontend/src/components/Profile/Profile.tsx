import { ProfileDetails } from "./ProfileDetails"
import { Description } from "./Description"
import { Skills } from "./Skils"
import { Education } from "./Education"
import { WorkExprience } from "./WorkExprience"
import { UserDetails } from "./UserDetails"
import { FeatureServive } from "./FeautureService"
import { BadgetAndLinks } from "./Budget&Links"

export const Profile = () => {
    return (
        <div className="w-screen h-fit flex items-center justify-center gap-10 bg-[#F3F6FA] py-10 relative">
            <div className="flex flex-col">
                <div className="w-[860px] flex items-center justify-center  bg-white border  rounded-lg">
                    <div className="w[816px] flex flex-col items-center justify-around">
                        <ProfileDetails />
                        <Description />
                        <Skills />
                        <Education />
                        <WorkExprience />
                        <UserDetails />
                    </div>
                </div>

                <div className="w-[860px] h-fit  flex items-center justify-center bg-white rounded-lg ">
                    <FeatureServive />
                </div>
            </div>
            <div className="fixed top-[10%] right-[8%] w-[416px] h-[623px]  rounded-lg ">
                <BadgetAndLinks />
            </div>
        </div>

    )
}