import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PendingIcon from '@mui/icons-material/Pending';


export const navigationMenu = [
    {
        title: "Home",
        icon: <HomeIcon />,
        path: "/home",
        key: 1
    },
    {
        title: "Explore",
        icon: <ExploreIcon />,
        path: "/explore",
        key: 2
    },
    {
        title: "Notifications",
        icon: <NotificationIcon />,
        path: "/notification",
        key: 3
    },
    {
        title: "Messages",
        icon: <MessageIcon />,
        path: "/messages",
        key: 4
    },
    {
        title: "List",
        icon: <ListAltIcon />,
        path: "/list",
        key: 5
    },
    {
        title: "Communities",
        icon: <GroupIcon />,
        path: "/communities",
        key: 6
    },
    {
        title: "Verified",
        icon: <VerifiedIcon />,
        path: "/verified",
        key: 7
    },
    {
        title: "Profile",
        icon: <AccountCircleIcon />,
        path: "/profile",
        key: 8
    },
    {
        title: "More",
        icon: <PendingIcon />,
        path: "/more",
        key: 9
    },
];