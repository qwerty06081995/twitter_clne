import React, {useState} from "react";
import {navigationMenu} from "./NavigationMenu";
import {useNavigate} from "react-router";
import {Avatar, Button, MenuItem, Menu} from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/auth/Action";

const Navigation = () => {
    const {auth} = useSelector(store=>store);
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        setAnchorEl(null);
    };
    const handleLogout = (event) => {
        console.log("Logout");
        handleClose(event);
        dispatch(logout());
    };

    const navigate = useNavigate()
    return (
        <div className={"h-screen sticky top-0"}>
            <div>
                <div className={"py-5"}>
                    <svg height={30} width={30} viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-18jsvk2 r-rxcuwo r-1777fci r-m327ed r-494qqr">
                        <g>
                            <path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path>
                        </g>
                    </svg>
                </div>
                <div className={"space-y-6"}>
                    {navigationMenu.map((item)=>
                        <div className={"cursor-pointer flex space-x-3 items-center"} onClick={()=>item.title==="Profile"?navigate(`/profile/${5}`):navigate(item.path)} key={item.key}>
                            {item.icon}
                            <p className={"text-xl"}>{item.title}</p>
                        </div>
                    )}
                </div>
                <div className={"py-10"}>
                    <Button
                        sx={{
                            width: "100%",
                            borderRadius: "29px",
                            py: "15px",
                            bgcolor: "#1e88e5"
                        }}
                        variant={"contained"}
                    >
                        Tweet
                    </Button>
                </div>
            </div>
            <div className={"flex items-center justify-between"}>
                <div className={"flex items-center space-x-3"}>
                    <Avatar
                        alt={"username"}
                        src={"https://avatars.mds.yandex.net/get-yapic/0/0-0/islands-200"}
                    />
                    <div>
                        <p>{auth.user?.fullName}</p>
                        <div className={"opacity-70"}>@{auth.user?.fullName.split(" ").join("_").toLowerCase()}</div>
                    </div>

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
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default Navigation