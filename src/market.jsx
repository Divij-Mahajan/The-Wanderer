import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { useSuiClient } from '@mysten/dapp-kit';
import { useEnokiFlow, useZkLogin } from '@mysten/enoki/react';
import shield from "/shield.png"
import sword from "/sword.png"
import magic from "/magic.png"
import bow from "/bow.png"


function sum(l) {
    let s = 0
    for (let i = 0; i < l.length; i++) {
        const element = l[i];
        s += Number(element)
    }
    return s;
}

function getList(client, setList, item, address = "nothing", setClaim = null, pending = []) {
    let l1 = import.meta.env.VITE_SHIELD_LIST;
    let l2 = import.meta.env.VITE_SWORD_LIST;
    let l3 = import.meta.env.VITE_BOW_LIST;
    let l4 = import.meta.env.VITE_MAGIC_LIST;
    let lis = [l1, l2, l3, l4]

    client.getObject({
        id: lis[item],
        options: {
            showContent: true
        }
    }).then((e) => {
        let arr = []
        let found = false;
        for (let i = 0; i < e.data.content.fields.list.length; i++) {
            const elemnt = e.data.content.fields.list[i];
            let ele = { level: elemnt.fields.level, price: elemnt.fields.price, seller: elemnt.fields.seller }
            if (address == ele.seller) {
                found = true;
            }

            arr.push(ele)
        }
        if (!found) {
            if (Number(pending[item]) > 0) {
                setClaim((prev) => {
                    prev[item] = pending[item];
                    return prev;
                })
            }

        }
        setList((prev) => arr)
    })

}
function getAllList(client, setShieldList, setSwordList, setBowList, setMagicList, address, setClaim, pending) {

    getList(client, setShieldList, 0, address, setClaim, pending)
    getList(client, setSwordList, 1, address, setClaim, pending)
    getList(client, setBowList, 2, address, setClaim, pending)
    getList(client, setMagicList, 3, address, setClaim, pending)

}

function Item({ setUser, setItems, item, level, available, enokiFlow, client, setAvailable, address, coins, setPending }) {
    let li = ["Shield", "Sword", "Bow", "Magic"];
    let name = li[item]
    const [selling, setSelling] = useState(level * 30)
    const PACKAGE_ID = import.meta.env.VITE_PACKAGE_ID
    let l1 = import.meta.env.VITE_SHIELD_LIST;
    let l2 = import.meta.env.VITE_SWORD_LIST;
    let l3 = import.meta.env.VITE_BOW_LIST;
    let l4 = import.meta.env.VITE_MAGIC_LIST;
    let lis = [l1, l2, l3, l4]

    async function buyHandler(level, price, seller) {
        if (coins < price) {
            console.log("not enough coins")
            return;
        }
        const txb = new TransactionBlock();
        let l = lis[item];
        txb.setGasBudget(1000000)
        txb.setGasPrice(1000)

        txb.moveCall({
            arguments: [txb.object(l), txb.pure.u64(level), txb.pure.u64(price), txb.pure.address(seller)],
            target: `${PACKAGE_ID}::my_module::buy`,
        });
        await enokiFlow.sponsorAndExecuteTransactionBlock({ transactionBlock: txb, network: "testnet", client }).then(
            (x) => {
                client.waitForTransactionBlock({
                    digest: x.digest,
                    options: {
                        showEffects: true,
                    },
                })
                    .then((tx) => {
                        setItems((prev) => {
                            prev[item] = Number(level)
                            localStorage.setItem("items", JSON.stringify(prev))
                            return prev
                        })
                        setUser((prev) => {
                            prev.coins -= Number(price)
                            localStorage.setItem("user", JSON.stringify(prev))
                            return prev
                        })
                        getList(client, setAvailable, item)
                    })
                    .catch((e) => {
                        console.log(e)
                    })
            }
        )


    }
    async function sellHandler() {
        const txb = new TransactionBlock();
        let l = lis[item];

        txb.setGasBudget(1000000)
        txb.setGasPrice(1000)

        txb.moveCall({
            arguments: [txb.object(l), txb.pure.u64(level), txb.pure.u64(selling)],
            target: `${PACKAGE_ID}::my_module::list_items`,
        });
        await enokiFlow.sponsorAndExecuteTransactionBlock({ transactionBlock: txb, network: "testnet", client })
            .then(
                (x) => {
                    client.waitForTransactionBlock({
                        digest: x.digest,
                        options: {
                            showEffects: true,
                        },
                    })
                        .then((tx) => {
                            setAvailable((prev) => [...prev, { level: level, price: selling, seller: address }])
                            setItems((prev) => {
                                prev[item] = 0
                                localStorage.setItem("items", JSON.stringify(prev))
                                return prev
                            })
                            setPending((prev) => {
                                prev[item] = selling
                                localStorage.setItem("pending", JSON.stringify(prev))
                                return prev;
                            })
                        })
                        .catch((e) => {
                            console.log(e)
                        })
                }
            )

    }
    return <div className="w-2/5 flex rounded-lg bg-[--primary-light] overflow-hidden" style={{ height: "90%" }}>
        <div className="h-full w-2/5 bg-[--primary-mid] flex flex-col justify-center items-center">
            <img src={((name == "Shield") ? shield : ((name == "Sword") ? sword : ((name == "Bow") ? bow : magic)))} style={{ height: "25%", width: "30%" }}></img>
            <div>{name}</div>
            <div className="text-[gray]">Level {level}</div>
            <input type="range" min={level * 10} max={level * 70} value={selling} onChange={(e) => { setSelling(e.target.value) }} className="slider mt-4 mb-7"></input>
            <div className="flex items-center gap-4">
                <div className="text-xl">{selling}/-</div>
                {(level == 0) ?
                    <button className="rounded-xl h-10 p-4 px-8 items-center flex focus:text-white hover:text-white" >Sell</button> :
                    <button onClick={sellHandler} className="rounded-xl h-10 p-4 px-8 items-center flex">Sell</button>
                }
            </div>
            {(level == 0) ? <div className="text-md mt-3 text-[--secondary-light]">No Item to sell</div> : <div className="text-md mt-3 text-[--secondary-light]">Please sell before buying</div>}
        </div>
        <div className="h-full w-3/5 flex flex-col pt-4 text-xl items-center pb-2">
            <div className="text-[--secondary-light]">Availability</div>
            <div className="flex flex-col gap-3 overflow-scroll  mt-3">
                {available.map((e, i) => {
                    return <div key={i} className="text-white flex gap-12">
                        <div>Level {e.level}</div>
                        <div>{e.price}/-</div>
                        {(level == 0) ?
                            <button onClick={() => { buyHandler(e.level, e.price, e.seller) }} className="text-sm rounded-xl h-8 p-4 px-6 items-center flex bg-[--primary-mid]">Buy</button> :
                            <button className="text-sm rounded-xl h-8 p-4 px-6 items-center flex bg-[--primary-mid] focus:text-white hover:text-white">Buy</button>
                        }
                    </div>
                })}
            </div>

        </div>
    </div>
}


function Connect({ enokiFlow }) {

    async function handleButtonClick() {
        let googleSignInUrl = await enokiFlow.createAuthorizationURL({
            provider: 'google',
            clientId: import.meta.env.VITE_CLIENT_ID,
            redirectUrl: window.location.href.split("#")[0],
            network: "testnet"
        })
        window.location.href = googleSignInUrl
    }

    return <button onClick={handleButtonClick} className="bg-[--primary-mid] rounded-xl mt-6">Sign In</button>;

}


function Market() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {})
    const enokiFlow = useEnokiFlow()
    const client = useSuiClient();
    const zkLogin = useZkLogin();
    const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")) || [0, 0, 0, 0])
    const [claim, setClaim] = useState([0, 0, 0, 0])
    const [pending, setPending] = useState(JSON.parse(localStorage.getItem("pending")) || [0, 0, 0, 0])

    const [shieldList, setShieldList] = useState([])
    const [swordList, setSwordList] = useState([])
    const [bowList, setBowList] = useState([])
    const [magicList, setMagicList] = useState([])


    useEffect(() => {
        if (window.location.hash)
            enokiFlow.handleAuthCallback().then(() => {
                window.location = window.location.href.split("#")[0];
            });
        if (zkLogin.address) {

            getAllList(client, setShieldList, setSwordList, setBowList, setMagicList, zkLogin.address, setClaim, pending)
        }
    }, []);

    const [auth, setAuth] = useState(false)
    enokiFlow.getSession().then((e) => {
        if (e) {
            setAuth(true)
        }
    })
    console.log("meta :", import.meta.env.VITE_ENOKI_API_KEY)
    //console.log("prcoess :", process.env.VITE_ENOKI_API_KEY)
    if (!zkLogin.address) {
        return <div>
            <Header user={user} />
            <div className=" h-full w-full mt-20 flex flex-col justify-center items-center">

                <div className="text-5xl mb-10 mt-24 text-[--secondary-light]">The Market</div>
                <div className="text-3xl">Greetings Traveller, want to begin trading with other players?</div>
                <div className="text-3xl mt-2">Sign In to start your journey</div>

                <Connect enokiFlow={enokiFlow} />
            </div>
        </div>
    }
    //console.log(zkLogin.address)

    //getAllList(client, setShieldList, setSwordList, setBowList, setMagicList,zkLogin.address,setClaim,pending)


    return <div className="h-full w-full">
        <Header user={user} />
        <div className="h-full w-full pt-20">
            <div className="flex h-1/2 w-full justify-end gap-4 pr-4 items-end mb-4">
                <div className="flex flex-col justify-start items-center w-1/5 h-full pt-14 text-center">
                    <div className="text-3xl mb-7">Welcome to the marketplace</div>
                    <div className="text-[gray] mb-4">To fetch latest availability click refresh</div>
                    <button onClick={() => {
                        getAllList(client, setShieldList, setSwordList, setBowList, setMagicList, zkLogin.address, setClaim, pending)
                    }} className="bg-[--primary-mid] rounded-lg">Refresh</button>
                </div>
                <Item setPending={setPending} coins={user.coins} address={zkLogin.address} setAvailable={setShieldList} enokiFlow={enokiFlow} client={client} setUser={setUser} setItems={setItems} item={0} level={items[0]} available={shieldList} />
                <Item setPending={setPending} coins={user.coins} address={zkLogin.address} setAvailable={setSwordList} enokiFlow={enokiFlow} client={client} setUser={setUser} setItems={setItems} item={1} level={items[1]} available={swordList} />
            </div>
            <div className="flex h-1/2 w-full justify-end gap-4 pr-4 pb-3">
                <div className="flex flex-col justify-start items-center w-1/5 text-center">
                    <div className="text-xl text-[--secondary-light] mb-4">Claim Desk:</div>
                    <div>
                        <div>You can claim coins for successfully sold items here.</div>
                        <div className="mt-4">Pending Coins: <span className="text-[--secondary-light] text-xl">{sum(pending)}/-</span></div>
                        <div className="mt-4">Claimable Coins: <span className="text-[--secondary-light] text-xl">{sum(claim)}/-</span></div>
                        <button className="mt-4 bg-[--primary-mid] rounded-lg" onClick={() => {
                            if (sum(claim) == 0) {
                                return;
                            }
                            let change = [false, false, false, false]
                            setUser((prev) => {
                                prev.coins += sum(claim)
                                localStorage.setItem("user", JSON.stringify(prev))
                                return prev
                            })

                            setClaim((prev) => {
                                for (let i = 0; i < prev.length; i++) {
                                    const element = prev[i];
                                    if (element > 0) {
                                        prev[i] = 0
                                        change[i] = true
                                    }
                                }
                                return prev;
                            })
                            setPending((prev) => {
                                for (let i = 0; i < prev.length; i++) {
                                    const element = prev[i];
                                    if (change[i]) {
                                        prev[i] = 0
                                    }
                                }
                                localStorage.setItem("pending", JSON.stringify(prev))
                                return prev;
                            })
                            location.reload()
                        }}>Claim Now</button>
                    </div>
                </div>
                <Item setPending={setPending} coins={user.coins} address={zkLogin.address} setAvailable={setBowList} enokiFlow={enokiFlow} client={client} setUser={setUser} setItems={setItems} item={2} level={items[2]} available={bowList} />
                <Item setPending={setPending} coins={user.coins} address={zkLogin.address} setAvailable={setMagicList} enokiFlow={enokiFlow} client={client} setUser={setUser} setItems={setItems} item={3} level={items[3]} available={magicList} />
            </div>

        </div>
    </div>
}
export default Market;