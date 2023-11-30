import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
import ToastGuard from "./ui/toast";

const AdminGuard = ({ children }) => {
    const isAdmin = useSelector((bigPie) => bigPie.authSlice.isAdmin);
    if (isAdmin) {
        return children;
    } else {
        return ToastGuard("admin") && <Navigate to={ROUTES.LOGIN} replace={true} />;
    }
};
export default AdminGuard;
