import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Card({ user, setPillars, setUser }) {

    let domain = JSON.parse(localStorage.getItem("domain"));
    let discarded = JSON.parse(localStorage.getItem("discarded"));
    let last = JSON.parse(localStorage.getItem("last"));
    const [settled, setSettled] = useState(false)
    const [lostBool, setLostBool] = useState(false)
    const navigate = useNavigate()

    let lostText = [
        "The people lost all the trust in you and decided to lynch you off and hang you publically.",
        "Due to lack of any practise your skillset got extremly poor and made you a weak target of other Wanderers, who decided to elimate you to reduce their competition.",
        "All the battles and attacks made you extremly weak, you ended up passing away due to extremly poor health.",
        "The crown got impatient with your works, he started considering you as more of a burden and decided to get your executed by his assassins."
    ]

    let lost = {
        "index": -1,
        "cid": -1,
        "text": "",
        "choices": ["Return", "Return"],
        "Return": {
            "coins": 0,
            "pillars": [0, 0, 0, 0],
            "items": [0, 0, 0, 0],
            "swap": "None",
            "next": [],
            "discarded": []
        },
        "Return": {
            "coins": 0,
            "pillars": [0, 0, 0, 0],
            "items": [0, 0, 0, 0],
            "swap": "None",
            "next": [],
            "discarded": []
        }
    }


    const [card, setCard] = useState({
        "index": 0,
        "cid": 0,
        "text": "Greetings, traveler! Welcome to our fair city of Aeros. As a token of our hospitality, here's a small gift to aid you on your journey. Will you accept it?",
        "choices": ["Yes", "No"],
        "Yes": {
            "coins": 20,
            "pillars": [0, 0, 0, 0.1],
            "items": [0, 0, 0, 0],
            "swap": "None",
            "next": [1],
            "discarded": []
        },
        "No": {
            "coins": 0,
            "pillars": [0, 0, 0, -0.1],
            "items": [0, 0, 0, 0],
            "swap": "None",
            "next": [2],
            "discarded": []
        }
    }
    )
    if (last != -1 && !settled) {
        let i = last
        import(`./../../files/data/${user.current}/cards.json`).then(
            (d) => {
                setCard(d.default[i])
            }
        )
    }



    const [data, setData] = useState({})
    if (!lostBool) {

        import(`./../../files/data/${user.current}/characters.json`).then(
            (d) => {

                setData(d.default[card.cid])
            }
        )
    }

    // 6 7 8
    let conv = {
        "Storm's Gate": "bg-[--blue]",
        "Aeros": "bg-[--green]",
        "Flare Town": "bg-[--red]",
        "Lake Walk Path": "bg-[--yellow]",
        "Red Woods": "bg-[--yellow]",
        "The Ridge": "bg-[--yellow]",
    }

    return <div className="h-full w-2/5 p-10 pl-16 border-r-2 border-[#ffffff0f]">
        <div className="rounded-t-lg px-5 pt-2 bg-[--primary-dark] w-5/6 text-[--secondary-light] text-3xl">{data.name}</div>
        <div className="px-5 bg-[--primary-dark] w-5/6  text-[--primary-light] text-2xl">{user.current}</div>
        <div className={"rounded-b-lg w-5/6 h-5/6 flex flex-col justify-between border-[--primary-dark]  border-2 " + conv[user.current]} >
            <div className="w-full h-5/6 flex flex-col justify-between items-center pt-6">
                <div className="overflow-y-scroll bg-[#ffffff11] w-5/6 rounded-lg p-4 border-white border">{card.text}</div>
                <img src={data.image} className="w-2/5" ></img>
            </div>
            <div className="flex h-1/6 justify-around w-full  bg-[--primary-light] border-[--primary-dark] border-2">
                <button onClick={() => {
                    let choiceData = card[card.choices[0]];
                    if (lostBool) {
                        navigate("/")
                        return;
                    }
                    let z = false
                    setPillars((p) => {
                        let pNew = []
                        let l = -1
                        for (let i = 0; i < p.length; i++) {
                            let temp = p[i] + choiceData.pillars[i];
                            if (temp > 1) {
                                pNew.push(1)
                            } else if (temp < 0) {
                                l = i;
                                pNew.push(0)
                            } else {
                                pNew.push(temp)
                            }
                        }
                        if (l != -1) {
                            lost.text = lostText[l]
                            setCard(lost)
                            z = true
                            let d = {
                                name: "You lost",
                                image: "/characters/General/" + (l == 0 ? "Death1" : (l == 2 ? "Male" : "Death2")) + ".png"
                            }
                            setData(d)
                            setLostBool(true)
                        }
                        localStorage.setItem("pillars", JSON.stringify(pNew))
                        return pNew
                    })
                    if (z) {
                        return;
                    }
                    setSettled(true)

                    for (let i = 0; i < choiceData.discarded.length; i++) {
                        const index = domain[user.current].indexOf(choiceData.discarded[i]);
                        console.log(index)
                        if (index > -1) {
                            domain[user.current].splice(index, 1);
                            if (!discarded[user.current].includes(choiceData.discarded[i])) {
                                discarded[user.current].push(choiceData.discarded[i])
                            }
                        }
                    }

                    localStorage.setItem("domain", JSON.stringify(domain))
                    localStorage.setItem("discarded", JSON.stringify(discarded))

                    if (choiceData.next.length == 0) {
                        let i = domain[user.current][Math.floor((Math.random() * domain[user.current].length))]
                        import(`./../../files/data/${user.current}/cards.json`).then(
                            (d) => {
                                setCard(d.default[i])
                                localStorage.setItem("last", JSON.stringify(i))

                            }
                        )
                    } else {
                        let i = choiceData.next[Math.floor((Math.random() * choiceData.next.length))]
                        import(`./../../files/data/${user.current}/cards.json`).then(
                            (d) => {
                                setCard(d.default[i])
                                localStorage.setItem("last", JSON.stringify(i))
                            }
                        )
                    }
                    user.coins += choiceData.coins
                    user.cards += 1
                    localStorage.setItem("user", JSON.stringify(user))
                    setUser(user)

                }} className="w-1/2 text-xl">{card.choices[0]}</button>
                <button onClick={() => {
                    let choiceData = card[card.choices[1]];
                    if (lostBool) {
                        navigate("/")
                        return;
                    }
                    let z = false
                    setPillars((p) => {
                        let pNew = []
                        let l = -1
                        for (let i = 0; i < p.length; i++) {
                            let temp = p[i] + choiceData.pillars[i];
                            if (temp > 1) {
                                pNew.push(1)
                            } else if (temp < 0) {
                                l = i;
                                pNew.push(0)
                            } else {
                                pNew.push(temp)
                            }
                        }
                        if (l != -1) {
                            lost.text = lostText[l]
                            setCard(lost)
                            z = true
                            let d = {
                                name: "You lost",
                                image: "/characters/General/" + (l == 0 ? "Death1" : (l == 2 ? "Male" : "Death2")) + ".png"
                            }
                            setData(d)
                            setLostBool(true)
                        }
                        localStorage.setItem("pillars", JSON.stringify(pNew))
                        return pNew
                    })
                    if (z) {
                        return;
                    }
                    setSettled(true)
                    for (let i = 0; i < choiceData.discarded; i++) {
                        const index = domain[user.current].indexOf(choiceData.discarded[i]);
                        if (index > -1) {
                            domain[user.current].splice(index, 1);
                            if (!discarded[user.current].includes(choiceData.discarded[i])) {
                                discarded[user.current].push(choiceData.discarded[i])
                            }
                        }
                    }

                    localStorage.setItem("domain", JSON.stringify(domain))
                    localStorage.setItem("discarded", JSON.stringify(discarded))
                    if (choiceData.next.length == 0) {
                        let i = domain[user.current][Math.floor((Math.random() * domain[user.current].length))]
                        import(`./../../files/data/${user.current}/cards.json`).then(
                            (d) => {
                                setCard(d.default[i])
                                localStorage.setItem("last", JSON.stringify(i))

                            }
                        )
                    } else {
                        let i = choiceData.next[Math.floor((Math.random() * choiceData.next.length))]
                        import(`./../../files/data/${user.current}/cards.json`).then(
                            (d) => {
                                setCard(d.default[i])
                                localStorage.setItem("last", JSON.stringify(i))
                            }
                        )
                    }
                    user.coins += choiceData.coins
                    user.cards += 1
                    localStorage.setItem("user", JSON.stringify(user))
                    setUser(user)
                }} className="w-1/2 text-xl">{card.choices[1]}</button>
            </div>
        </div>

    </div >
}
export default Card;