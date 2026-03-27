import React from "react";
import {Grid, TextField} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from 'yup';
import Button from "@mui/material/Button";
import {blue} from "@mui/material/colors";
import {useDispatch} from "react-redux";
import {loginUser} from "../../store/auth/Action";

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string().required("Password is Required"),
});

const SignInForm = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: (values)=>{
            dispatch(loginUser(values));
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container={true} spacing={2}>
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
                <Grid size={{xs:12}}>
                    <Button
                        sx={{borderRadius:"29px", py:"15px", bgcolor:blue[500]}}
                        type={"submit"}
                        fullWidth={true}
                        variant={"contained"}
                        size="large"
                    >Sign In</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default SignInForm