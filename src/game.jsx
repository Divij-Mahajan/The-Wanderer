import { useState } from "react";
import Header from "./components/Header/Header";
import About from "./components/game/About";
import Card from "./components/game/Card";
import Pillars from "./components/game/Pillars";
import Items from "./components/game/items";

function Game() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {})
    const [pillars, setPillars] = useState(JSON.parse(localStorage.getItem("pillars")) || [0, 0, 0, 0])
    const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")) || [0, 0, 0, 0])
    return <div className="h-full scroll overflow-hidden">
        <Header user={user} />
        <div className="flex bg-[--primary-light] rounded-3xl m-10 mt-24  mx-16 h-5/6 ">
            <div className="h-full w-2/5 relative">
                {(user.coins < 0) && <div className="absolute top-4 left-1/4">You are in debt to the crown</div>}
                <Card user={user} setPillars={setPillars} setUser={setUser} setItems={setItems} items={items} pillars={pillars} />
            </div>
            <div className="h-full w-3/5">
                <Pillars pillars={pillars} />
                <div className="w-full h-full flex">
                    <Items items={items} />
                    <About user={user} />

                </div>
            </div>
        </div>

    </div>
}
export default Game;