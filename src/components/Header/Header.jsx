import { useLocation, useNavigate } from "react-router-dom"
import logo from "/logo.png"

function Header({ user }) {
    const navigate = useNavigate()
    const loc = useLocation();
    return <div className="bg-[--primary-dark] fixed top-0 left-0  h-16 z-50 pt-20 px:4 sm:px-12 flex justify-between items-end" style={{ width: "100vw" }}>
        <div className="flex items-center justify-between w-full text-[--secondary-light]">
            <div className="flex items-center sm:items-end pl-8 text-xl sm:text-3xl text-[--secondary-light] gap-2" onClick={() => { navigate("/") }}>
                <img src={logo} width={60} />
                <div>The Wanderer</div>
            </div>
            <div className="flex justify-center items-center pr-10">
                <div className="flex justify-end gap-10 items-end  h-full">
                    {loc.pathname == "/game" ?
                        <button className="text-xl text-[--secondary-light]" onClick={() => { navigate("/market") }}>Marketplace</button>
                        :
                        <button className="text-xl text-[--secondary-light]" onClick={() => { navigate("/game") }}>Return to Game</button>
                    }
                </div>
                <div className="text-xl">Coins : {user.coins}</div>
            </div>

        </div >
    </div >
}
export default Header;