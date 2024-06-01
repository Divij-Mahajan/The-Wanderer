import { useNavigate } from "react-router-dom";
import logo from "/logo.png"
function Home() {
    const navigate = useNavigate();
    return <div className="h-full w-full flex items-center justify-center flex-col ">
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
        />
        <div className="flex absolute left-0 bottom-0 p-3 items-center text-[--secondary-light]" >
            <div className="text-xl" >Developer Contact :</div>
            <a className="fa fa-github fa-2x m-2 opacity-60 " target='_blank' href="https://github.com/Divij-Mahajan/The-Wanderer"></a>
            <a className="fa fa-linkedin fa-2x m-1 opacity-60" target='_blank' href="https://www.linkedin.com/in/divij-mahajan-73b17b250/"></a>
        </div>
        <div className="flex items-end gap-5">
            <img src={logo} width={120} />
            <div className="text-[--secondary-mid] text-6xl">The Wanderer</div>
        </div>
        <div className="mt-5 text-[--secondary-light] text-2xl w-2/5 text-center font-thin italic">"You always regret the roads not taken, more than the ones you took."</div>
        <button onClick={() => {
            //if (!localStorage.getItem("user")) {
            localStorage.setItem('user', JSON.stringify({
                "name": "The Wanderer",
                "start": "Aeros",
                "current": "Aeros",
                "cards": 0,
                "battles": 0,
                "wins": 0,
                "coins": 0
            }))
            localStorage.setItem("pillars", JSON.stringify([0.5, 0.5, 1.0, 0.5]))
            localStorage.setItem("items", JSON.stringify([0, 0, 0, 0]))
            let l = []
            let count = 14
            for (let i = 0; i <= count; i++) {
                if (![6, 7, 8, 10, 11, 12, 14].includes(i)) {
                    l.push(i)
                }
            }
            localStorage.setItem("domain", JSON.stringify({
                "Storm's Gate": [],
                "Aeros": l,
                "Flare Town": [],
                "Lake Walk Path": [],
                "Red Woods": [],
                "The Ridge": [],
            }))
            localStorage.setItem("last", JSON.stringify(-1))
            localStorage.setItem("pending", JSON.stringify(0))

            localStorage.setItem("discarded", JSON.stringify({
                "Storm's Gate": [],
                "Aeros": [],
                "Flare Town": [],
                "Lake Walk Path": [],
                "Red Woods": [],
                "The Ridge": [],
            }))
            localStorage.setItem("hp", JSON.stringify(0))

            // }
            navigate("/game")
        }} className="bg-[--secondary-light] mt-8 rounded-2xl text-black hover:text-black mb-2 text-xl hover:bg-[--secondary-mid] ">Start Game</button>
        <div onClick={() => navigate("/how")} className="text-[--secondary-light] hover:text-[--secondary-mid] cursor-pointer">How to Play?</div>
    </div>
}
export default Home;