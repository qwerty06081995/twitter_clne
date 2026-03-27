import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import {useLocation, useNavigate} from "react-router";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    outline: 'none',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};

export default function AuthModal({open, handleClose}) {
    const location = useLocation();
    const navigate = useNavigate();
    const handleNavigate = ()=>{
        const path = location.pathname==="/signUp"?"/signIn":"/signUp";
        navigate(path);
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1 className={"text-center font-bold text-3xl pb-20"}>
                        Create your account
                    </h1>
                    {location.pathname==="/signUp"?<SignUpForm/>:<SignInForm />}
                    <h1 className={"text-center font-semibold py-5 text-lg text-gray-500"}>
                        {location.pathname==="/signUp"?"Already have account?":"if you do not have account"}
                    </h1>
                    <Button
                        fullWidth={true}
                        variant={"outlined"}
                        onClick={handleNavigate}
                        sx={{borderRadius:"29px", py:"15px"}}
                    >
                        {location.pathname==="/signUp"?"sign in":"sign up"}
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}