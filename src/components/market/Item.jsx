import shield from "/shield.png"
import sword from "/sword.png"
import magic from "/magic.png"
import bow from "/bow.png"
import { useState } from "react"

function Item({ name, level, available = [] }) {
    const [selling, setSelling] = useState(50)
    return <div className="w-2/5 flex rounded-lg bg-[--primary-light] overflow-hidden" style={{ height: "90%" }}>
        <div className="h-full w-2/5 bg-[--primary-mid] flex flex-col justify-center items-center">
            <img src={((name == "Shield") ? shield : ((name == "Sword") ? sword : ((name == "Bow") ? bow : magic)))} style={{ height: "25%", width: "30%" }}></img>
            <div>{name}</div>
            <div className="text-[gray]">Level {level}</div>
            <input type="range" value={selling} onChange={(e) => { setSelling(e.target.value) }} className="slider mt-4 mb-7"></input>
            <div className="flex items-center gap-4">
                <div className="text-xl">{selling}/-</div>
                <button className="rounded-xl h-10 p-4 px-8 items-center flex">Sell</button>
            </div>
        </div>
        <div className="h-full w-3/5 flex flex-col pt-4 text-xl items-center">
            <div className="text-[--secondary-light]">Availability</div>
            <div>
                {available}
            </div>

        </div>
    </div>
}
export default Item;