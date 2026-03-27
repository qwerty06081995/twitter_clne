import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Authentication from "./components/authentication/Authentication";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserProfile} from "./store/auth/Action";
import {useNavigate} from "react-router";

function App() {
    const jwt = localStorage.getItem("jwt");
    const {auth} = useSelector(store=>store);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        if (jwt){
            dispatch(getUserProfile(jwt));
            navigate("/")
        }
    }, [auth.jwt]);
    return (
        <div className="">
            <Routes>
              <Route path="/*" element={auth.user?<HomePage/>:<Authentication/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
