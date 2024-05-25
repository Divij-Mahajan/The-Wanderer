import map from "/map.png"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
gsap.registerPlugin(useGSAP);
function About({ user }) {
    let container = useRef()
    const [open, setOpen] = useState(true)
    const { contextSafe } = useGSAP(() => {
    }, { scope: container });
    let popUp = contextSafe(() => {
        gsap.to("#map", { "scale": 4.6 })
        gsap.to("#map", { translateX: "-150%", translateY: "-150%" });
    })
    let popDown = contextSafe(() => {
        gsap.to("#map", { "scale": 1 })
        gsap.to("#map", { translateX: "0", translateY: "0" });
    })


    return <div ref={container} className="w-1/2 h-3/5 p-14 py-7 items-start justify-start flex flex-col relative">
        <div className="text-[--secondary-light] text-3xl text-center flex items-center justify-center w-full mb-3"><div>About</div></div>
        <div className="text-[#B59C6F] text-xl mb-1">Name : <span className="text-[rgba(255,255,255,0.8)]">{user.name}</span></div>
        <div className="text-[#B59C6F] text-xl mb-1">Current Location : <span className="text-[rgba(255,255,255,0.8)]">{user.current}</span></div>
        <div className="text-[#B59C6F] text-xl mb-1">Start Location : <span className="text-[rgba(255,255,255,0.8)]">{user.start}</span></div>
        <div className="text-[#B59C6F] text-xl mb-1">Total Battles : <span className="text-[rgba(255,255,255,0.8)]">{user.battles}</span></div>
        <div className="text-[#B59C6F] text-xl mb-1">Battles Won : <span className="text-[rgba(255,255,255,0.8)]">{user.wins}</span></div>
        <div className="text-[#B59C6F] text-xl mb-1">Cards Viewed : <span className="text-[rgba(255,255,255,0.8)]">{user.cards}</span></div>
        <img id="map" onClick={() => {
            if (open) {
                popUp()
            } else {
                popDown()
            }
            setOpen(!open)

        }} className="absolute bottom-10 right-10" src={map} style={{ width: "120px" }}></img>
    </div>
}
export default About;