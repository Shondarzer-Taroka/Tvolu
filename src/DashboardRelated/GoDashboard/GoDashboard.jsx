import  { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import ManageMyPost from "../../Pages/ManageMyPost/ManageMyPost";
import AddVolunteer from "../../Pages/AddVolunteer/AddVolunteer";
import NewsForm from "./NewsForm";
import { useLocation } from "react-router-dom";
import MyNews from "./MyNews";
import AddDonation from "./AddDonation";
import AllUsers from "./AllUsers";


const GoDashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedContent, setSelectedContent] = useState("Manage My Post");
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/go-dashboard") {
      const rootElement = document.getElementById("rootelement");
      const outletElement = document.getElementById("main-content-outlet");
      if (rootElement||outletElement) {
        rootElement.classList.remove("max-w-6xl");
        outletElement.classList.remove("mt-[70px]");
      }
    }
  }, [location.pathname]);


  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleSidebarItemClick = (content) => {
    setSelectedContent(content);
  };

  const toggleMobileSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        showMobileSidebar={showMobileSidebar}
        isCollapsed={isSidebarCollapsed}
        onSidebarItemClick={handleSidebarItemClick}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar onToggleSidebar={toggleSidebar} toggleMobileSidebar={toggleMobileSidebar} />
        <div className="flex-1 overflow-y-auto p-4">
          {/* Render the selected content */}
          {selectedContent === "Manage My Post" && <ManagePosts />}
          {selectedContent === "Add Post" && <AddPost />}
          {selectedContent === "Feedback" && <Feedback />}
          {selectedContent === "Make a News" && <MakeNews />}
          {selectedContent === "My News" && <MYnews />}
          {selectedContent === "Add Donation" && <Adddonation />}
          {selectedContent === "All Users" && <Allusers />}
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {showMobileSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMobileSidebar}
        ></div>
      )}
    </div>
  );
};

const ManagePosts = () => (
  <div className="h-full overflow-y-auto">
    <ManageMyPost />
  </div>
);

const AddPost = () => (
  <div className="h-full overflow-y-auto">
    <AddVolunteer />
  </div>
);

const Feedback = () => (
  <div className="h-full overflow-y-auto">
    <p>Content for Feedback</p>
  </div>
);

const MakeNews = () => (
  <div className="h-full overflow-y-auto">
    <NewsForm />
  </div>
);
const MYnews = () => (
  <div className="h-full overflow-y-auto">
    <MyNews />
  </div>
);
const Adddonation = () => (
  <div className="h-full overflow-y-auto">
    <AddDonation/>
  </div>
);
const Allusers = () => (
  <div className="h-full overflow-y-auto">
    <AllUsers/>
  </div>
);
export default GoDashboard;
