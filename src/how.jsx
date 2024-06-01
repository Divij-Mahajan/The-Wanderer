import logo from "/logo.png"
import card from "/how/Card.png"
import battle from "/how/Battle.png"
import market from "/how/market.png"
import claim from "/how/claim.png"
import community from "/community.png"
import skill from "/skill.png"
import health from "/health.png"
import crown from "/crown.png"
import shield from "/shield.png"
import sword from "/sword.png"
import magic from "/magic.png"
import bow from "/bow.png"

import { useNavigate } from "react-router-dom"


function How() {
    const navigate = useNavigate();
    return <div className="w-full h-full ">
        <div className="flex items-center sm:items-end pl-8 text-xl mt-5 sm:text-3xl text-[--secondary-light] gap-2 cursor-pointer" onClick={() => { navigate("/") }}>
            <img src={logo} width={60} />
            <div>The Wanderer</div>
        </div>
        <div className="w-full px-28">
            <div className="text-6xl text-[--secondary-mid]  font-bold w-full text-center mt-5 tracking-wider mb-10"> <u>How To Play?</u></div>
            <div className="text-4xl mx-24 text-[--secondary-light]">So what is Wanderer?</div>
            <div className="text-xl p-3 mx-20 px-10">Wanderer is not just an ordinary RPG game. It features a captivating storyline spanning three towns: Flare Town, Aeors, and Storm Gate, each populated with unique characters. Built on the Sui blockchain, it immerses players in a world of decisions and trading offering an engaging and novel way to interact with the platform.</div>

            <div className="flex mt-8 ml-32">
                <img src={card} width={300} className="border-2 border-black "></img>
                <div className="ml-10 mt-12">
                    <div className="text-4xl text-[--secondary-light]">The Decision Based Game Play</div>
                    <ul className="text-xl list-disc px-10 ">
                        <li className="my-2">Your journey begins in the prosperous city of Aeros.</li>
                        <li className="my-2">You will be greeted with various characters, asking to make simple decisions.</li>
                        <li className="my-2">For example, maybe the King wants to help you in escorting someone.</li>
                        <li className="my-2">Every decision affects one of these four pillars of the game.</li>
                        <li className="my-2">The goal is to maintain a balance between these pillars, and avoid them to become zero.</li>
                        <li className="my-2">If any of them becomes zero, you lose.</li>
                    </ul>
                </div>
            </div>
            <div className="text-4xl text-[--secondary-light] text-center my-6">The Four Pillars</div>
            <div className="flex justify-center gap-32 my-4">
                <div className="flex flex-col items-center justify-center">
                    <img src={community} width={120} style={{ height: "130px" }} ></img>
                    <div className="text-xl my-2  w-full text-center">Community</div>
                </div>
                <div className="flex flex-col items-center">
                    <img src={skill} width={60} style={{ height: "130px" }} ></img>
                    <div className="text-xl my-2  w-full text-center">Skill</div>
                </div>
                <div className="flex flex-col items-center">
                    <img src={health} width={130} style={{ height: "130px" }} ></img>
                    <div className="text-xl my-2  w-full text-center">Health</div>
                </div>
                <div className="flex flex-col items-center">
                    <img src={crown} width={120} style={{ height: "130px" }} ></img>
                    <div className="text-xl my-2  w-full text-center">Crown</div>
                </div>
            </div>
            <div className="flex mt-8 mr-28 ml-32">
                <div className=" mt-8">
                    <div className="text-4xl text-[--secondary-light]">The Battle System</div>
                    <ul className="text-xl list-disc px-10 ">
                        <li className="my-2">Like any other RPG game, battles are one of the major aspect of The Wanderer.</li>
                        <li className="my-2">Each challenger has specific health points, close attack and range attack.</li>
                        <li className="my-2">You can choose to fight in close range with a sword or in far range with a bow.</li>
                        <li className="my-2">The damage done to the enemy is evaluated on the basis of your skills and the weapon level.</li>
                        <li className="my-2">Magic enhances the effectiveness of weapons against mystical creatures like the dragon or the witch.</li>
                    </ul>
                </div>
                <img src={battle} width={300} className="border-2 border-black mr-10"></img>
            </div>
            <div>
                <div className="text-4xl text-[--secondary-light] mx-28 my-3 mt-10">The Items</div>
                <div className="text-xl mx-32 mb-10">At times battles can be hard to win especially against the villains, who at times can be really hard to battle off. You can make use items to aid you during battles.</div>
                <div className="flex justify-center  my-4">
                    <div className="flex flex-col items-center justify-center w-1/6 pt-3">
                        <img src={shield} width={90} style={{ height: "80px" }} ></img>
                        <div className="text-xl my-2  w-full text-center">Shield</div>
                        <div className="px-10 text-center">Reduces damage on the health.</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-1/6">
                        <img src={sword} width={60} style={{ height: "90px" }} ></img>
                        <div className="text-xl my-2  w-full text-center">Sword</div>
                        <div className="px-10 text-center">Increases close range attack</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-1/6">
                        <img src={bow} width={100} style={{ height: "80px" }} className="mt-2"></img>
                        <div className="text-xl my-2  w-full text-center">Bow</div>
                        <div className="px-10 text-center">Increases far range attack</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-1/6">
                        <img src={magic} width={100} style={{ height: "90px" }} ></img>
                        <div className="text-xl my-2  w-full text-center">Magic</div>
                        <div className="px-10 text-center">Effectiveness towards mystical creatures</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="text-4xl text-[--secondary-light] mx-28 my-3 mt-10">The Market Place</div>
                <div className="flex mt-8 mx-32">
                    <img src={market} width={500} style={{ height: "100%" }}></img>
                    <div className="ml-10">
                        <ul className="text-xl list-disc px-10 ">
                            <li className="my-2">Marketplace provide users with the ability to trade items among them.</li>
                            <li className="my-2">You can sell an item you own at any price you want.</li>
                            <li className="my-2">You can buy an item from market place among the ones listed.</li>
                            <li className="my-2">Each Transaction takes upto a minute to process.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex mt-8 mx-32 mr-44">
                    <div className="ml-10">
                        <ul className="text-xl list-disc px-10 pr-16 mt-4">
                            <li className="my-2">On selling an items, the corresponding price is added to the pending coins.</li>
                            <li className="my-2">Once the item has been purchased by another user, the claimable coins are increased to match the amount of the transaction.</li>
                            <li className="my-2">The seller at any point can claim the coins earned by clicking the claim now button.</li>
                        </ul>
                    </div>
                    <img src={claim} width={250} style={{ height: "100%" }} ></img>
                </div>
            </div>
        </div>


    </div>
}
export default How;