function Card({ user }) {
    let card = {
        "id": 1001,
        "name": "The King",
        "image": "/characters/Aeros/King.png",
        "text": "Greetings, welcome to city of Aeros. Here's a small gift on your journey. Will you accept it?",
        "coins": 0,
        "yes": [0.2, -0.3, 0.1, -0.3],
        "no": [0.2, -0.3, 0.1, -0.3],
        "yesItems": [1, 0, 1, 0],
        "noItems": [0, 1, 0, -1],
        "yesSwap": "Red Woods|None",
        "noSwap": "Red Woods|None",
        "yesNext": [],
        "noNext": []
    }
    let conv = {
        "Storm's Gate": "bg-[--blue]",
        "Aeros": "bg-[--green]",
        "Flare Town": "bg-[--red]",
        "Lake Walk Path": "bg-[--yellow]",
        "Red Woods": "bg-[--yellow]",
        "The Ridge": "bg-[--yellow]",
    }
    console.log(`bg-[${conv[card.location]}]`)
    return <div className="h-full w-2/5 p-10 pl-16 border-r-2 border-[#ffffff0f]">
        <div className="rounded-t-lg px-5 pt-2 bg-[--primary-dark] w-5/6 text-[--secondary-light] text-3xl">{card.name}</div>
        <div className="px-5 bg-[--primary-dark] w-5/6  text-[--primary-light] text-2xl">{user.current}</div>
        <div className={"rounded-b-lg w-5/6 h-5/6 flex flex-col justify-between border-[--primary-dark]  border-2 " + conv[user.current]} >
            <div className="w-full h-5/6 flex flex-col justify-between items-center pt-6">
                <div className="overflow-y-scroll bg-[#ffffff11] w-5/6 rounded-lg p-4 border-white border">{card.text}</div>
                <img src={card.image} className="w-2/5" ></img>
            </div>
            <div className="flex h-1/6 justify-around w-full  bg-[--primary-light] border-[--primary-dark] border-2">
                <button className="w-1/2 text-xl">Yes</button>
                <button className="w-1/2 text-xl">No</button>
            </div>
        </div>

    </div >
}
export default Card;