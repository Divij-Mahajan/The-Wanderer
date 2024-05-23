import Header from "./components/Header/Header";
import Card from "./components/Header/game/Card";
import Pillars from "./components/Header/game/Pillars";

function Game() {
    return <div className="h-full scroll overflow-hidden">
        <Header />
        <div className="flex bg-[--primary-light] rounded-3xl m-10 mt-24  mx-16 h-5/6">
            <Card />
            <div className="h-full w-3/5">
                <Pillars />
            </div>
        </div>

    </div>
}
export default Game;