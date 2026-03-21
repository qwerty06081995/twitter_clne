import React, {useState} from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {useNavigate} from "react-router";
import {Avatar, Button} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import TweetCard from "../home_section/TweetCard";

const Profile = () => {
    const navigate = useNavigate()
    const handleBack = ()=>navigate(-1);
    const handleOpenProfileModel = (event)=>{
        console.log("handleOpenProfileModel");
    };
    const handleFollowUser = (event)=>{
        console.log("handleFollowUser");
    };

    const [tabValue, setTabValue] = useState("1");

    const handleTabChange = (event, newValue)=>{
        setTabValue(newValue);
        if (newValue===4){
            console.log("tab 4");
        } else if(newValue===1){
            console.log("tab 1");
        }
    };

    return (
        <div>
            <section className={"bg-white z-50 flex items-center sticky top-0 bg-opacity-95"}>
                <KeyboardBackspaceIcon className={"cursor-pointer"} onClick={handleBack} />
                <h1 className={"py-5 text-xl font-bold opacity-90 ml-5"}>Code with Nurzhan</h1>
            </section>
            <section>
                <img
                    className={"w-[100%] h-[15rem] object-cover"}
                    src="https://cdn.pixabay.com/photo/2025/12/26/14/35/asian-green-bee-eater-10036230_1920__e0b61329ea.jpg"
                    alt=""/>
            </section>
            <section className={"pl-6"}>
                <div className={"flex justify-between items-start mt-5 h-[5rem]"}>
                    <Avatar
                        className={"transform -translate-y-24"}
                        alt={"code with nurzhan"}
                        src={"https://avatars.mds.yandex.net/get-yapic/0/0-0/islands-200"}
                        sx={{width:"10rem", height:"10rem", border: "4px solid white"}}
                    />
                    {true?
                        (<Button
                            onClick={handleOpenProfileModel}
                            className={"rounded-full"}
                            variant={"contained"}
                            sx={{borderRadius: "20px"}}
                        >Edit Profile</Button>
                        ) : (
                        <Button
                            onClick={handleFollowUser}
                            className={"rounded-full"}
                            variant={"contained"}
                            sx={{borderRadius: "20px"}}
                        >{true?"Follow":"Unfollow"}</Button>
                        )}
                </div>
                <div>
                    <div className={"flex items-center"}>
                        <h1 className={"font-bold text-lg"}>Code with Nurzhan</h1>
                        {true && (<VerifiedIcon />)}
                    </div>
                    <h1 className={"text-gray-500"}>@nurzhan</h1>
                </div>
                <div className={"mt-2 space-y-3"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate deleniti dicta dolorum exercitationem magnam quibusdam tempora?
                        Dicta in ipsum iure maiores nam nobis perferendis quasi, ut vel veritatis? Adipisci.
                    </p>
                    <div className={"py-1 flex space-x-5"}>
                        <div className={"flex items-center text-gray-500"}>
                            <BusinessCenterIcon />
                            <p className={"ml-2"}>Education</p>
                        </div>
                        <div className={"flex items-center text-gray-500"}>
                            <LocationOnIcon />
                            <p className={"ml-2"}>Kazakhstan</p>
                        </div>
                        <div className={"flex items-center text-gray-500"}>
                            <CalendarMonthIcon />
                            <p className={"ml-2"}>Joined Aug 2025</p>
                        </div>
                    </div>
                    <div className={"flex items-center space-x-5"}>
                        <div className={"flex items-center space-x-1 font-semibold"}>
                            <span>190</span>
                            <span className={"text-gray-500"}>Following</span>
                        </div>
                        <div className={"flex items-center space-x-1 font-semibold"}>
                            <span>590</span>
                            <span className={"text-gray-500"}>Followers</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"py-6"}>
                <Box sx={{ width: '100%' }}>
                    <TabContext value={tabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                                <Tab label="Tweets" value="1" />
                                <Tab label="Replies" value="2" />
                                <Tab label="Media" value="3" />
                                <Tab label="Likes" value="4" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            {[1,2,3,4,5].map((item) => <TweetCard key={item}/>)}
                        </TabPanel>
                        <TabPanel value="2">Replies</TabPanel>
                        <TabPanel value="3">Media</TabPanel>
                        <TabPanel value="4">Likes</TabPanel>
                    </TabContext>
                </Box>
            </section>
        </div>
    )
}

export default Profile