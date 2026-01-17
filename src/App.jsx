import { BrowserRouter as Router, Routes, Route } from "react-router";
import "@fontsource/montserrat";

import Home from "./Pages/Home";
import SignIn from "./components/SignIn/SignIn";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Privacy from "./Pages/Privacy";
import MapView from "./Pages/MapView";
import Rent from "./Pages/Rent";
import Buy from "./Pages/Buy";
import ListProperty from "./Pages/ListProperty";

import MainLayout from "./components/Auth/MainLayout";
import AuthLayout from "./components/Auth/AuthLayout";
import CompleteStory from "./components/ListProperty/CompleteStory";
import FastTrasck from "./components/ListProperty/FastTrasck";
import Profile from "./Pages/Profile";
import AccountSettings from "./Pages/AccountSettings";
import MyCollection from "./components/MyCollection";
import SellerDashboardPage from "./components/SellerDashboardPage";

import SellerLayout from "./components/Auth/SellerLayout";
import SellerDashboard from "./components/Seller/SellerDashboard";
import MyListings from "./components/Seller/MyListings/MyListings";
import MyGrowth from "./components/Seller/Growth/MyGrowth";
import Performance from "./components/Seller/Performance";
import MyPlan from "./components/Seller/MyPlan/MyPlan";
import Verification from "./components/Seller/Verification/Verification";
import Reports from "./components/Seller/Reports/Reports";
import Settings from "./components/Seller/Settings";
import MyWallet from "./components/Seller/MyWallet";
import Coworker from "./components/CoWorker/Coworker";
import CorworkerLayout from "./components/Auth/CoworkerLayout";

import Dashboard from "./components/CoWorker/DashBoard/Dashboard";
import Journey from "./components/CoWorker/Journey/Journey";
import MyEarnings from "./components/CoWorker/MyEarning/MyEarnings";
import LiveBoard from "./components/CoWorker/LiveBoard/LiveBoard";
import CoworkerSettings from "./components/CoWorker/DashBoard/CoworkerSettings";
import CoworkerReports from "./components/CoWorker/DashBoard/CoworkerReports";
import MyAccount from "./components/CoWorker/DashBoard/MyAccount";




const App = () => {
  return (
    <Router>
      <Routes>
        {/* Website pages */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/map-view" element={<MapView />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/list-property" element={<ListProperty />} />
          <Route path="/complete-story" element={<CompleteStory />} />
          <Route path="/fast-track" element={<FastTrasck />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/my-collection" element={<MyCollection />} />
          <Route path="/co-worker" element={<Coworker />} />


          {/* <Route path="/seller-dashboard" element={<MyCollection />} />
          <Route path="/seller-dashboard" element={<MyCollection />} /> */}
        </Route>

        {/* Auth pages */}
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/seller-dashboard" element={<SellerDashboardPage />} />
        </Route>

        <Route element={<SellerLayout />}>
          <Route path="/seller/dashboard" element={<SellerDashboard />} />
          <Route path="/seller/my-listings" element={<MyListings />} />
          <Route path="/seller/performance" element={<Performance />} />
          <Route path="/seller/my-growth" element={<MyGrowth />} />
          <Route path="/seller/reports" element={<Reports />} />
          <Route path="/seller/my-plan" element={<MyPlan />} />
          <Route path="/seller/my-wallet" element={<MyWallet />} />
          <Route path="/seller/verification" element={<Verification />} />
          <Route path="/seller/settings" element={<Settings />} />
        </Route>

        <Route path="/coworker" element={<CorworkerLayout />}>

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="journey" element={<Journey />} />
          <Route path="earnings" element={<MyEarnings />} />
          <Route path="reports" element={<CoworkerReports />} />
          <Route path="live-board" element={<LiveBoard />} />
          <Route path="settings" element={<CoworkerSettings />} />
          <Route path="my-account" element={<MyAccount />} />

        </Route>


      </Routes>
    </Router>
  );
};

export default App;
