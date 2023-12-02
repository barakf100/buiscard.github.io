import "react-toastify/dist/ReactToastify.css";
import LayoutComponent from "./layout/LayoutComponent";
import { ToastContainer } from "react-toastify";
import Router from "./routes/Router";
import useAutoLogin from "./hooks/useAutoLogin";
import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import ServerToast from "./toast/toastServer";

const App = () => {
    const [doneAuth, setDoneAuth] = useState(false);
    const autoLogin = useAutoLogin();
    useEffect(() => {
        (async () => {
            try {
                await autoLogin(); //false is default
            } catch (err) {
                ServerToast();
            } finally {
                setDoneAuth(true);
            }
        })();
    }, []);
    return (
        <LayoutComponent>
            <ToastContainer />
            {doneAuth ? <Router /> : <LinearProgress />}
        </LayoutComponent>
    );
};

export default App;
