import { Routes, Route } from "react-router-dom";
import { ClouthingRouter } from "./ClouthingRouter";


export const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/*" element={<ClouthingRouter />} />
        </Routes>
    );
};
