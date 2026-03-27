import React from "react";
import {Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from 'yup';
import Button from "@mui/material/Button";
import {blue} from "@mui/material/colors";
import {useDispatch} from "react-redux";
import {registerUser} from "../../store/auth/Action";

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string().required("Password is Required"),
});

const currentYear = new Date().getFullYear();
const years = Array.from({length:100}, (_, i)=>currentYear-i);
const days = Array.from({length:31}, (_, i)=>i+1);
const months = [
    {value: 1, label: "January"},
    {value: 2, label: "February"},
]

const SignUpForm = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            fullName: "",
            dateOfBirth: {
                day: "",
                month: "",
                year: "",
            }
        },
        validationSchema,
        onSubmit: (values)=>{
            const {day, month, year} = values.dateOfBirth;
            values.dateOfBirth = `${year}-${month}-${day}`;
            dispatch(registerUser(values));
        }
    });

    const handleDateChange=(name)=>(event)=>{
        formik.setFieldValue("dateOfBirth", {
           ...formik.values.dateOfBirth,
            [name]:event.target.value,
        });
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container={true} spacing={2}>
                <Grid size={{xs:12}}>
                    <TextField
                        fullWidth={true}
                        label={"FullName"}
                        name={"fullName"}
                        variant={"outlined"}
                        size="large"
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                        helperText={formik.touched.fullName && formik.errors.fullName}
                    />
                </Grid>
                <Grid size={{xs:12}}>
                    <TextField
                        fullWidth={true}
                        label={"Email"}
                        name={"email"}
                        variant={"outlined"}
                        size="large"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Grid>
                <Grid size={{xs:12}}>
                    <TextField
                        fullWidth={true}
                        label={"Password"}
                        name={"password"}
                        variant={"outlined"}
                        size="large"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </Grid>
                <Grid size={{xs:4}}>
                    <InputLabel>Date</InputLabel>
                    <Select
                        fullWidth
                        name={"day"}
                        value={formik.values.dateOfBirth.day}
                        onChange={handleDateChange("day")}
                        onBlur={formik.handleBlur}
                    >
                        {days.map((day)=>(
                            <MenuItem key={day} value={day}>
                                {day}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>
                <Grid size={{xs:4}}>
                    <InputLabel>Month</InputLabel>
                    <Select
                        fullWidth
                        name={"month"}
                        value={formik.values.dateOfBirth.month}
                        onChange={handleDateChange("month")}
                        onBlur={formik.handleBlur}
                    >
                        {months.map((month)=>(
                            <MenuItem key={month.value} value={month.value}>
                                {month.label}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>
                <Grid size={{xs:4}}>
                    <InputLabel>Year</InputLabel>
                    <Select
                        fullWidth
                        name={"year"}
                        value={formik.values.dateOfBirth.year}
                        onChange={handleDateChange("year")}
                        onBlur={formik.handleBlur}
                    >
                        {years.map((year)=>(
                            <MenuItem key={year} value={year}>
                                {year}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>
                <Grid size={{xs:12}}>
                    <Button
                        sx={{borderRadius:"29px", py:"15px", bgcolor:blue[500]}}
                        type={"submit"}
                        fullWidth={true}
                        variant={"contained"}
                        size="large"
                    >Sign Up</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default SignUpForm