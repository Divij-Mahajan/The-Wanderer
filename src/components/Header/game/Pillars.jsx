import community from "/community.png"
import skill from "/skill.png"
import health from "/health.png"
import crown from "/crown.png"
function Pillars() {
    return <div className="w-full h-2/5 border-b-2 border-[#ffffff0f] flex px-20 py-10 gap-3 justify-between items-center">
        <div className="h-full w-1/4 justify-end items-center flex flex-col">
            <img src={community} style={{ height: "90%", width: "70%" }}></img>
            <div>community</div>
        </div>
        <div className="h-full w-1/4 justify-end items-center flex flex-col">
            <img src={skill} style={{ height: "87%", width: "45%" }}></img>
            <div>skill</div>
        </div>
        <div className="h-full w-1/4 justify-end items-center flex flex-col">
            <img src={health} style={{ height: "80%", width: "80%" }}></img>
            <div>health</div>
        </div>
        <div className="h-full w-1/4 justify-end items-center flex flex-col">
            <img src={crown} style={{ height: "90%", width: "80%" }}></img>
            <div>crown</div>
        </div>
    </div>
}
export default Pillars;