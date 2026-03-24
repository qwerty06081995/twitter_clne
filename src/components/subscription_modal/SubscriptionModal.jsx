import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VerifiedIcon from "@mui/icons-material/Verified";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    outline: 'none',
    borderRadius: 4
};

const features = [
    {key: 1, text: "Rule 1"},
    {key: 2, text: "Rule 2"},
    {key: 3, text: "Rule 3"},
    {key: 4, text: "Rule 4"},
    {key: 5, text: "Rule 5"},
];

export default function SubscriptionModal({handleClose, open}) {

    const [plan, setPlan] = React.useState("Annually")

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={"flex items-center space-x-3"}>
                        <IconButton onClick={handleClose} aria-label={"delete"}>
                            <CloseIcon/>
                        </IconButton>
                    </div>
                    <div className={"flex justify-center py-10"}>
                        <div className={"w-[80%] space-y-10"}>
                            <div className={"p-5 rounded-md flex items-center justify-between bg-slate-200 shadow-lg"}>
                                <h1 className={"text-xl pr-5"}>Twitter's Blue Subscribers Get Exclusive Video Download Feature: Restrictions Apply!</h1>
                                <VerifiedIcon className={"w-24 h-24"}/>
                            </div>
                            <div className={"flex justify-between border rounded-full px-5 py-3 border border-gray-500"}>
                                <div>
                                    <span onClick={()=>{setPlan("Annually")}} className={`${plan==="Annually"?"text-black":"text-gray-400"} cursor-pointer`}>Annually</span>
                                    <span className={"text-green-500 text-sm ml-5"}>SAVE 12%</span>
                                </div>
                                <p onClick={()=>{setPlan("Monthly")}} className={`${plan==="Monthly"?"text-black":"text-gray-400"} cursor-pointer`}>
                                    Monthly
                                </p>
                            </div>

                            <div className={"space-y-3"}>
                                {
                                    features.map(
                                        (item) =>
                                            <div className={"flex items-center space-x-5"} key={item.key}>
                                                <FiberManualRecordIcon sx={{width: "7px", height: "7px"}}/>
                                                <p className={"text-xs"}>{item.text}</p>
                                            </div>
                                    )
                                }
                            </div>

                            <div className={"cursor-pointer flex justify-center bg-gray-900 text-white rounded-full px-5 py-3"}>
                                <span className={"line-through italic"}>10000tg</span>
                                <span className={"px-5"}>8000tg</span>
                            </div>

                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}