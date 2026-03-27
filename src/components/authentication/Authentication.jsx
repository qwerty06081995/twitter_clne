import React from "react";
import {Grid} from "@mui/material";
import {GoogleLogin} from "@react-oauth/google";
import Button from "@mui/material/Button";
import AuthModal from "./AuthModal";

const Authentication = () => {
    const [openAuthModal, setOpenAuthModal] = React.useState(false);
    const handleOpenAuthModal = ()=>setOpenAuthModal(true);
    const handleCloseAuthModal = ()=>setOpenAuthModal(false);
    return (
        <div>
            <Grid className={"overflow-y-hidden"} container>
                <Grid className={"hidden lg:block"} size={{lg:7}}>
                    <img
                        className={"w-full h-screen"}
                        src="https://i.playground.ru/p/vtrj9pzLan4heZouzc9E6A.jpeg"
                        alt=""/>
                    <div className={"absolute top-[26%] left-[19%]"}>
                        <svg
                            height={300}
                            width={300}
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-18jsvk2 r-rxcuwo r-1777fci r-m327ed r-494qqr">
                            <g>
                                <path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path>
                            </g>
                        </svg>
                    </div>
                </Grid>
                <Grid className={"px-10"} size={{lg:5, xs:12}}>
                    <h1 className={"mt-10 font-bold text-7xl"}>Happening Now</h1>
                    <h1 className={"font-bold text-3xl py-16"}>Join Twitter Clne Today</h1>
                    <div className={"w-[60%]"}>
                        <div className={"w-full"}>
                            <GoogleLogin width={330} onSuccess={(response) => console.log(response)}/>
                            <p className={"py-5 text-center"}>OR</p>
                            <Button
                                onClick={handleOpenAuthModal}
                                fullWidth={true}
                                variant={"contained"}
                                size="large"
                                sx={{
                                    borderRadius: "29px",
                                    py:"7px"
                                }}>Create Account</Button>
                            <p className={"text-sm mt-2"}>By continuing, you agree to our Terms of Service and acknowledge that you have read our Privacy Policy.</p>
                        </div>
                        <div className={"w-full mt-10"}>
                            <h1 className={"font-bold text-xl mb-5"}>Already have account?</h1>
                            <Button
                                onClick={handleOpenAuthModal}
                                fullWidth={true}
                                variant={"outlined"}
                                size="large"
                                sx={{
                                    borderRadius: "29px",
                                    py:"7px"
                                }}>Login</Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <AuthModal open={openAuthModal} handleClose={handleCloseAuthModal} />
        </div>
    )
}

export default Authentication