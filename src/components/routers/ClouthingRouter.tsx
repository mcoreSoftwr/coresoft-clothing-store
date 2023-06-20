import { Routes, Route, Navigate } from "react-router-dom";
import { Ava } from "../../pages/Ava";

export const ClouthingRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/home" element={<Ava />}>
            </Route>
            <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
    );
};
