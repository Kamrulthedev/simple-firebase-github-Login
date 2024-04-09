import { Outlet } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Header;