import { Outlet } from "react-router";
import SellerSidebar from "../Seller/Slider/SellerSidebar";

const SellerLayout = () => {
  return (
    <div className="flex h-screen "
      style={{ fontFamily: "Montserrat, sans-serif" }}>
      {/* Sidebar */}
      <aside className="w-72 overflow-y-auto no-scrollbar">
        <SellerSidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar">
        <Outlet />
      </main>
    </div>
  );
};

export default SellerLayout;
