import { Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES";
import HomePage from "../pages/home/HomePage";
import RegisterPage from "../pages/register/RegisterPage";
import Error404Page from "../pages/404/Error404Page";
import LoginPage from "../pages/login/LoginPage";
import EditCardPage from "../pages/EditCardPage/EditCardPage";
import CreateCardPage from "../pages/createCardPage/createCardPage";
import AuthGuard from "../Guard/AuthGuard";
import BizGuard from "../Guard/BizGuard";
import UserManagement from "../pages/users/UserManagement";
import ProfileComponent from "../pages/profile/profileComp";
import AboutComp from "../pages/about/about";
import FavoriteComp from "../pages/favorite/favorite";
import AdminGuard from "../Guard/adminGuard";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route
                path={ROUTES.USER}
                element={
                    <AdminGuard>
                        <UserManagement />
                    </AdminGuard>
                }
            />
            <Route
                path={ROUTES.CREATECARD}
                element={
                    <AuthGuard>
                        <BizGuard>
                            <CreateCardPage />
                        </BizGuard>
                    </AuthGuard>
                }
            />
            <Route
                path={`${ROUTES.PROFILE}`}
                element={
                    <AuthGuard>
                        <ProfileComponent />
                    </AuthGuard>
                }
            />
            <Route
                path={`${ROUTES.EDITCARD}/:id`}
                element={
                    <BizGuard>
                        <EditCardPage />
                    </BizGuard>
                }
            />
            <Route path={ROUTES.ABOUT} element={<AboutComp />}></Route>
            <Route
                path={ROUTES.FAVORITES}
                element={
                    <AuthGuard>
                        <FavoriteComp />
                    </AuthGuard>
                }></Route>
            <Route path="*" element={<Error404Page />} />
        </Routes>
    );
};
export default Router;
