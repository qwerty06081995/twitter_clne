import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {useNavigate} from "react-router";
import TweetCard from "../home_section/TweetCard";
import {Divider} from "@mui/material";

const TweetDetail = () => {
    const navigate = useNavigate()
    const handleBack = ()=>navigate(-1);
    return (
        <React.Fragment>
            <section className={"bg-white z-50 flex items-center sticky top-0 bg-opacity-95"}>
                <KeyboardBackspaceIcon className={"cursor-pointer"} onClick={handleBack} />
                <h1 className={"py-5 text-xl font-bold opacity-90 ml-5"}>Tweet</h1>
            </section>
            <section>
                <TweetCard />
                <Divider sx={{margin: "2rem 0rem"}}/>
            </section>

            <section>
                {[1,2,3,4,5].map((item) => <TweetCard key={item}/>)}
            </section>
        </React.Fragment>
    )
}

export default TweetDetail