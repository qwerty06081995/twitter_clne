import React, {useState} from "react";
import RepeatIcon from '@mui/icons-material/Repeat';
import {Avatar, Button, Menu, MenuItem} from "@mui/material";
import {useNavigate} from "react-router";
import VerifiedIcon from "@mui/icons-material/Verified";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
const TweetCard = () => {
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        setAnchorEl(null);
    };
    const handleDelete = (event) => {
        console.log("Delete");
        handleClose(event);
    };
    const handleEdit = (event) => {
        console.log("Edit");
        handleClose(event);
    };

    const handleOpenReplyModel = (event) => {
        console.log("handleOpenReplyModel");
    };

    const handleCreateRetweet = (event) => {
        console.log("handleCreateRetweet");
    };

    const handleLikeTweet = (event) => {
        console.log("handleLikeTweet");
    };
    //
    // const handleOpenReplyModel = (event) => {
    //     console.log("handleOpenReplyModel");
    // };

    return (
        <div>
            <div className={"flex space-x-5"}>
                <Avatar
                    onClick={()=>navigate(`/profile/${6}`)}
                    className={"cursor-pointer"}
                    alt={"username"}
                    src={"https://avatars.mds.yandex.net/get-yapic/0/0-0/islands-200"}
                />
                <div className={"w-full"}>
                    <div className={"flex justify-between items-center"}>
                        <div className={"flex cursor-pointer items-center space-x-2"}>
                            <div className={"font-semibold"}>Code with Nurzhan</div>
                            <div className={"text-gray-600"}>@nurzhan . 2m</div>
                            <VerifiedIcon />
                            {/*<img*/}
                            {/*    className={"ml-2 w-5 h-5"}*/}
                            {/*    src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*BHMJVgK_uXwhjv4AHAGD3w.jpeg"*/}
                            {/*    alt=""/>*/}
                        </div>
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHorizIcon />
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                slotProps={{
                                    list: {
                                        'aria-labelledby': 'basic-button',
                                    },
                                }}
                            >
                                <MenuItem onClick={handleDelete}>Delete</MenuItem>
                                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <div className={"mt-2"}>
                        <div className={"cursor-pointer"}>
                            <p className={"mb-2 p-0"}>Twitter Clone Full-Stack Project</p>
                            <img
                                className={"w-[28rem] border border-gray-400 p-5 rounded-md"}
                                src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*BHMJVgK_uXwhjv4AHAGD3w.jpeg"
                                alt=""/>
                        </div>
                        <div className={"py-6 flex flex-wrap justify-between items-center"}>
                            <div className={"space-x-3 flex items-center text-gray-600"}>
                                <ChatBubbleOutlineIcon className={"cursor-pointer"} onClick={handleOpenReplyModel}/>
                                <p>43</p>
                            </div>
                            <div className={`${true?"text-pink-600":"text-gray-600"} space-x-3 flex items-center`}>
                                <RepeatIcon className={"cursor-pointer"} onClick={handleCreateRetweet}/>
                                <p>56</p>
                            </div>
                            <div className={`${true?"text-pink-600":"text-gray-600"} space-x-3 flex items-center`}>
                                {true
                                    ?<FavoriteIcon className={"cursor-pointer"} onClick={handleLikeTweet}/>
                                    :<FavoriteBorderIcon className={"cursor-pointer"} onClick={handleLikeTweet}/>
                                }
                            </div>
                            <div className={"space-x-3 flex items-center text-gray-600"}>
                                <BarChartIcon className={"cursor-pointer"} onClick={handleOpenReplyModel}/>
                                <p>4300</p>
                            </div>
                            <div className={"space-x-3 flex items-center text-gray-600"}>
                                <FileUploadIcon className={"cursor-pointer"} onClick={handleOpenReplyModel}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TweetCard