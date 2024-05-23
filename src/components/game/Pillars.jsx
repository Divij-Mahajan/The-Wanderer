import community from "/community.png"
import skill from "/skill.png"
import health from "/health.png"
import crown from "/crown.png"
function Pillars() {
    return <div className="w-full h-2/5 border-b-2 border-[#ffffff0f] flex px-20 py-10 gap-3 justify-between items-center">
        <div className="h-full pt-4 gap-2 w-1/4 justify-end items-center flex flex-col relative">
            <img src={community} style={{ height: "80%", width: "70%" }} className="absolute top-0 pillar-image-unfilled"></img>
            <div className="h-full w-full  absolute overflow-hidden">
                <img src={community} style={{ height: "80%", width: "70%" }} className="absolute top-0 pillar-image-filled left-1/2 -translate-x-1/2"></img>
            </div>
            <div>Community</div>
        </div>
        <div className="h-full pt-4 gap-2 w-1/4 justify-end items-center flex flex-col relative">
            <img src={skill} style={{ height: "81%", width: "41%" }} className="absolute top-0 pillar-image-unfilled"></img>
            <div className="h-full w-full  absolute top-10 overflow-hidden">
                <img src={skill} style={{ height: "81%", width: "41%" }} className="absolute -top-10 pillar-image-filled left-1/2 -translate-x-1/2"></img>
            </div>
            <div>Skill</div>
        </div>
        <div className="h-full pt-4 gap-2 w-1/4 justify-end items-center flex flex-col relative">
            <img src={health} style={{ height: "75%", width: "80%" }} className="absolute top-2 pillar-image-unfilled"></img>
            <div className="h-full w-full absolute overflow-hidden">
                <img src={health} style={{ height: "75%", width: "80%" }} className="absolute top-2 pillar-image-filled left-1/2 -translate-x-1/2"></img>
            </div>
            <div>Health</div>
        </div>
        <div className="h-full pt-4 gap-2 w-1/4 justify-end items-center flex flex-col relative">
            <img src={crown} style={{ height: "80%", width: "72%" }} className="absolute top-0 pillar-image-unfilled"></img>
            <div className="h-full w-full  absolute overflow-hidden">
                <img src={crown} style={{ height: "80%", width: "72%" }} className="absolute top-0 pillar-image-filled left-1/2 -translate-x-1/2"></img>
            </div>
            <div>Crown</div>
        </div>
    </div>
}
export default Pillars;