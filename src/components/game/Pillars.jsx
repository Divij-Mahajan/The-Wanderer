import community from "/community.png"
import skill from "/skill.png"
import health from "/health.png"
import crown from "/crown.png"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

function Pillars({ pillars }) {
    const container = useRef();
    console.log(pillars)
    const { contextSafe } = useGSAP(() => { }, { scope: container });

    let pillarsUpdate = contextSafe(() => {
        gsap.to('.pillar-image-box-community', { translateY: 126 * (1 - pillars[0]) });
        gsap.to('.pillar-image-filled-community', { translateY: -126 * (1 - pillars[0]) });
        gsap.to('.pillar-image-box-skill', { translateY: 126 * (1 - pillars[1]) });
        gsap.to('.pillar-image-filled-skill', { translateY: -126 * (1 - pillars[1]) });
        gsap.to('.pillar-image-box-health', { translateY: 118 * (1 - pillars[2]) });
        gsap.to('.pillar-image-filled-health', { translateY: -118 * (1 - pillars[2]) });
        gsap.to('.pillar-image-box-crown', { translateY: 126 * (1 - pillars[3]) });
        gsap.to('.pillar-image-filled-crown', { translateY: -126 * (1 - pillars[3]) });
    })
    // useGSAP(
    //     () => {
    //         gsap.to('.pillar-image-box-community', { translateY: 126 * (1 - pillars[0]) });
    //         gsap.to('.pillar-image-filled-community', { translateY: -126 * (1 - pillars[0]) });
    //         gsap.to('.pillar-image-box-skill', { translateY: 126 * (1 - pillars[1]) });
    //         gsap.to('.pillar-image-filled-skill', { translateY: -126 * (1 - pillars[1]) });
    //         gsap.to('.pillar-image-box-health', { translateY: 118 * (1 - pillars[2]) });
    //         gsap.to('.pillar-image-filled-health', { translateY: -118 * (1 - pillars[2]) });
    //         gsap.to('.pillar-image-box-crown', { translateY: 126 * (1 - pillars[3]) });
    //         gsap.to('.pillar-image-filled-crown', { translateY: -126 * (1 - pillars[3]) });
    //     },
    //     { revertOnUpdate: container }
    // );
    useEffect(() => {
        pillarsUpdate()

    }, [pillars])
    return <div ref={container} className="w-full h-2/5 border-b-2 border-[#ffffff0f] flex px-20 py-10 gap-3 justify-between items-center">
        <div className="h-full pt-4 gap-2 w-1/4 justify-end items-center flex flex-col relative">
            <img src={community} style={{ height: "80%", width: "70%" }} className="absolute top-0 pillar-image-unfilled"></img>
            <div className="h-full w-full absolute overflow-hidden pillar-image-box-community">
                <img src={community} style={{ height: "80%", width: "70%" }} className="absolute top-0 pillar-image-filled-community left-1/2 -translate-x-1/2"></img>
            </div>
            <div>Community</div>
        </div>
        <div className="h-full pt-4 gap-2 w-1/4 justify-end items-center flex flex-col relative">
            <img src={skill} style={{ height: "80%", width: "41%" }} className="absolute top-0 pillar-image-unfilled"></img>
            <div className="h-full w-full  absolute top-0 overflow-hidden pillar-image-box-skill">
                <img src={skill} style={{ height: "80%", width: "41%" }} className="absolute top-0 pillar-image-filled-skill left-1/2 -translate-x-1/2"></img>
            </div>
            <div>Skill</div>
        </div>
        <div className="h-full pt-4 gap-2 w-1/4 mt-2 justify-end items-center flex flex-col relative">
            <img src={health} style={{ height: "75%", width: "80%" }} className="absolute top-0 pillar-image-unfilled"></img>
            <div className="h-full w-full absolute overflow-hidden pillar-image-box-health">
                <img src={health} style={{ height: "75%", width: "80%" }} className="absolute top-0 pillar-image-filled-health left-1/2 -translate-x-1/2"></img>
            </div>
            <div>Health</div>
        </div>
        <div className="h-full pt-4 gap-2 w-1/4 justify-end items-center flex flex-col relative">
            <img src={crown} style={{ height: "80%", width: "72%" }} className="absolute top-0 pillar-image-unfilled"></img>
            <div className="h-full w-full  absolute overflow-hidden pillar-image-box-crown">
                <img src={crown} style={{ height: "80%", width: "72%" }} className="absolute top-0 pillar-image-filled-crown left-1/2 -translate-x-1/2"></img>
            </div>
            <div>Crown</div>
        </div>
    </div>
}
export default Pillars;