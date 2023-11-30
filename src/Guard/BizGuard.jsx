import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
import ToastGuard from "./ui/toast";

const BizGuard = ({ children }) => {
    const userData = useSelector((bigPie) => bigPie.authSlice.userData);
    if (userData && userData.isBusiness) {
        return children;
    } else {
        return ToastGuard("business member") && <Navigate to={ROUTES.LOGIN} replace={true} />;
    }
};
export default BizGuard;
