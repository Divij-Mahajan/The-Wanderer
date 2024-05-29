import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { useSuiClient, useCurrentWallet, useConnectWallet, useCurrentAccount } from '@mysten/dapp-kit';
import { useEnokiFlow, useZkLogin } from '@mysten/enoki/react';
import { useSuiClientQuery, useWallets } from "@mysten/dapp-kit";
import axios from "axios"
import Item from "./components/market/Item";

function Demo({ enokiFlow, client }) {

    async function handleButtonClick() {

        const keypair = await enokiFlow.getKeypair();
        const txb = new TransactionBlock();

        let x = await client.signAndExecuteTransactionBlock({

            signer: keypair,
            transactionBlock: txb,
        });
        console.log(x)


    }

    return <button onClick={handleButtonClick}>Sign transaction</button>;
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

    useEffect(() => {
        if (window.location.hash)
            enokiFlow.handleAuthCallback().then(() => {
                window.location = window.location.href.split("#")[0];
            });
    }, []);
    const [auth, setAuth] = useState(false)
    enokiFlow.getSession().then((e) => {
        if (e) {
            setAuth(true)
        }
    })


    if (!auth) {
        return <div>
            <Header user={user} />
            <div className=" h-full w-full mt-20 flex flex-col justify-center items-center">
                {/* <Demo enokiFlow={enokiFlow} client={client} />
            <button onClick={async () => {
                await axios.post('https://faucet.testnet.sui.io/gas', {
                    FixedAmountRequest: {
                        recipient: zkLogin.address,
                    },
                });
            }}>Request Gas</button> */}
                <div className="text-5xl mb-10 mt-24 text-[--secondary-light]">The Market</div>
                <div className="text-3xl">Greetings Traveller, want to begin trading with other players?</div>
                <div className="text-3xl mt-2">Sign In to start your journey</div>

                <Connect enokiFlow={enokiFlow} />
            </div>
        </div>
    }



    return <div className="h-full w-full">
        <Header user={user} />
        <div className="h-full w-full pt-20">
            <div className="flex h-1/2 w-full justify-end gap-4 pr-4 items-end mb-4">
                <div className="flex flex-col justify-start items-center w-1/5 h-full pt-14 text-center">
                    <div className="text-3xl mb-7">Welcome to the marketplace</div>
                    <div className="text-[gray] mb-4">To fetch latest availability click refresh</div>
                    <button className="bg-[--primary-mid] rounded-lg">Refresh</button>
                </div>
                <Item name="Shield" level={items[0]} />
                <Item name="Sword" level={items[1]} />
            </div>
            <div className="flex h-1/2 w-full justify-end gap-4 pr-4 pb-3">
                <div className="flex flex-col justify-start items-center w-1/5 text-center">
                    <div className="text-xl text-[--secondary-light] mb-4">Market Notice:</div>
                    <div>
                        <div>- The price for selling an item will be available and can be claimed from market after it has been successfully purchased by someone.</div>
                        <div className="mt-4">- You must sell your current item before buying the same one again.</div>
                    </div>
                </div>
                <Item name="Bow" level={items[2]} />
                <Item name="Magic" level={items[3]} />
            </div>

        </div>
    </div>
}
export default Market;