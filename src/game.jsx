import Header from "./components/Header/Header";
import About from "./components/game/About";
import Card from "./components/game/Card";
import Pillars from "./components/game/Pillars";
import Items from "./components/game/items";

function Game() {
    let user = {
        "name": "Dario Naharis",
        "start": "Aeros",
        "current": "Storm's Gate",
        "cards": 2,
        "battles": 34,
        "wins": 2,
        "pillars": [
            0.5,
            0.5,
            1.0,
            0.5
        ],
        "items": [
            0,
            0,
            0,
            0
        ]
    }
    return <div className="h-full scroll overflow-hidden">
        <Header />
        <div className="flex bg-[--primary-light] rounded-3xl m-10 mt-24  mx-16 h-5/6">
            <Card />
            <div className="h-full w-3/5">
                <Pillars />
                <div className="w-full h-full flex">
                    <Items />
                    <About user={user} />

                </div>
            </div>
        </div>

    </div>
}
export default Game;