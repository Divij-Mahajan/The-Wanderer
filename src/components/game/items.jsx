import shield from "/shield.png"
import sword from "/sword.png"
import magic from "/magic.png"
import bow from "/bow.png"

function Items() {
    return <div className="h-3/5 w-1/2 p-4 py-2 flex flex-col items-center justify-center border-r-2 border-[#ffffff0f]">
        <div className="text-[--secondary-light] text-3xl">Items</div>
        <div className="w-full h-2/5 items-center justify-center flex" >
            <div className="flex flex-col h-full w-1/2 items-center justify-center">
                <img src={shield} style={{ height: "60%", width: "45%" }} className="filter:brightn"></img>
                <div>Sheild</div>
            </div>
            <div className="flex flex-col h-full w-1/2 items-center justify-center">
                <img src={sword} style={{ height: "70%", width: "50%" }}></img>
                <div>Sword</div>
            </div>
        </div>
        <div className="w-full h-2/5 items-center justify-center flex" >
            <div className="flex flex-col h-full w-1/2 items-center justify-center">
                <img src={bow} style={{ height: "80%", width: "60%" }}></img>
                <div>Bow</div>
            </div>
            <div className="flex flex-col h-full w-1/2 items-center justify-center">
                <img src={magic} style={{ height: "80%", width: "60%" }}></img>
                <div>Magic</div>
            </div>
        </div>
    </div>
}
export default Items;