function Card() {
    let card = {
        "name": "The Merchant",
        "location": "Storm's Gate",
        "text": "The local marketplace is under attack by a group of people, will you help fight them off?",
        "yes": [0.2, -0.3, 0.1, -0.3],
        "no": [0.2, -0.3, 0.1, -0.3],
        "yesItems": [1, 0, 1, 0],
        "noItems": [0, 1, 0, -1],
        "swap": "Red Woods|None",
        "mode": "chain|random",
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
        <div className="px-5 bg-[--primary-dark] w-5/6  text-[--primary-light] text-2xl">{card.location}</div>
        <div className={"rounded-b-lg w-5/6 h-5/6 flex flex-col justify-between border-[--primary-dark]  border-2 " + conv[card.location]} >
            <div className="w-full">

            </div>
            <div className="flex justify-around w-full  bg-[--primary-light] border-[--primary-dark] border-2">
                <button className="w-1/2 text-xl">Yes</button>
                <button className="w-1/2 text-xl">No</button>
            </div>
        </div>

    </div >
}
export default Card;