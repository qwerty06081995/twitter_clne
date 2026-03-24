import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {Button} from "@mui/material";
import SubscriptionModal from "../subscription_modal/SubscriptionModal";

const RightPart = () => {

    const [openSubscriptionModal, setOpenSubscriptionModal] = React.useState(false);

    const handleSubscriptionModalOpen = ()=>setOpenSubscriptionModal(true);
    const handleSubscriptionModalClose = ()=>setOpenSubscriptionModal(false);

    const handleChangeTheme = (event)=>{
        console.log("handleChangeTheme");
    };
    return (
        <div className={"py-5 sticky top"}>
            <div className={"relative flex items-center"}>
                <input type="text" className={"py-3 rounded-full text-gray-500 w-full pl-12"}/>

                <div className={"absolute top-0 left-0 pl-3 pt-3"}>
                    <SearchIcon className={"text-gray-500"}/>
                </div>
                <Brightness4Icon className={"ml-3 cursor-pointer"} onClick={handleChangeTheme}/>
            </div>
            <section className={"my-5"}>
                <h1 className={"text-xl font-bold"}>Get Verified</h1>
                <h1 className={"font-bold my-2"}>Subscribe to unlock Features</h1>
                <Button onClick={handleSubscriptionModalOpen} variant={"contained"} sx={{padding: "10px", paddingX: "20px", borderRadius: "25px"}}>Get Verified</Button>
            </section>
            <section className={"mt-7 space-y-5"}>
                <h1 className={"font-bold text-xl py-1"}>What's up man!</h1>
                <div>
                    <p className={"text-sm"}>
                        FIFA Women's World Cup
                    </p>
                    <p className={"font-bold"}>
                        Philippines vs Switzerland
                    </p>
                </div>
                {[1,2,3,4].map((item)=>
                    <div className={"flex justify-between w-full"} key={item}>
                        <div>
                            <p>Entertainment - Trending</p>
                            <p className={"font-bold"}>#TheMarvels</p>
                            <p>34.4k Tweets</p>
                        </div>
                        <MoreHorizIcon />
                    </div>
                )}
            </section>
            <section>
                <SubscriptionModal handleClose={handleSubscriptionModalClose} open={openSubscriptionModal}/>
            </section>
        </div>
    )
}

export default RightPart