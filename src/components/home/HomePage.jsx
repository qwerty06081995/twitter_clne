import React from "react";
import {Grid} from "@mui/material";
import Navigation from "../navigation/Navigation"
import HomeSection from "../home_section/HomeSection";
import RightPart from "../right_part/RightPart";

const HomePage = () => {
    return (
        <div>
            <Grid container  size={{ xs: 12}} className="px-5 lg:px-36 justify-between">
                <Grid size={{ xs: 0, lg: 2.5 }} className="hidden lg:block w-full realtive">
                    <Navigation />
                </Grid>
                <Grid size={{ xs: 12, lg: 6 }} className="px-5 lg:px-9 hidden lg:block w-full realtive">
                    <HomeSection />
                </Grid>
                <Grid size={{ xs: 0, lg: 3 }} className="hidden lg:block w-full realtive">
                    <RightPart />
                </Grid>
            </Grid>
        </div>
    )
}

export default HomePage