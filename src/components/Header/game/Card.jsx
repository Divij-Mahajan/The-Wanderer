function Card() {
    let card = {
        "name": "The Merchant",
        "location": "Flare Town",
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
    return <div className="h-full w-2/5 border-r-2 p-10 pl-16 border-[#ffffff0f]">
        <div className="text-[--secondary-light] text-3xl">{card.name}</div>
        <div className="text-[--primary-dark] text-2xl">{card.location}</div>
        <div className={"w-5/6 h-5/6 flex flex-col justify-between border-[--primary-dark] mt-3 border-2 " + conv[card.location]} >
            <div className="w-full">

            </div>
            <div className="flex justify-around w-full gap-0.5 bg-[--primary-light] border-[--primary-dark] border-2">
                <button className="w-1/2">Yes</button>
                <button className="w-1/2">No</button>
            </div>
        </div>

    </div >
}
export default Card;