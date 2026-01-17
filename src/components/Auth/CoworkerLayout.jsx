import { Outlet } from "react-router";
import CoworkerSidebar from "../CoWorker/Slider/CoworkerSidebar"

const CorworkerLayout = () => {
    return (
        <div className="flex h-screen "
            style={{ fontFamily: "Montserrat, sans-serif" }}        >
            {/* Sidebar */}
            <aside className="w-64 overflow-y-auto no-scrollbar">
                < CoworkerSidebar />
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto no-scrollbar">
                <Outlet />
            </main>
        </div>
    );
};

export default CorworkerLayout;
