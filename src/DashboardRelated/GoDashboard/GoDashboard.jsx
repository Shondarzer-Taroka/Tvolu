

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import ManageMyPost from "../../Pages/ManageMyPost/ManageMyPost";
import AddVolunteer from "../../Pages/AddVolunteer/AddVolunteer";
import NewsForm from "./NewsForm";

const GoDashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedContent, setSelectedContent] = useState("Manage My Post");
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
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
    <div className="flex">
      {/* Sidebar */}
      <Sidebar
      
        showMobileSidebar={showMobileSidebar}
        isCollapsed={isSidebarCollapsed}
        onSidebarItemClick={handleSidebarItemClick}
      />

      {/* Main Content */}
      <div className="flex-1">
        <TopBar onToggleSidebar={toggleSidebar} toggleMobileSidebar={toggleMobileSidebar} />
        <div className="p-4">
          {/* <h1 className="text-2xl font-bold">{selectedContent}</h1> */}
          <div className="mt-4 h-[200px]">
            {selectedContent === "Manage My Post" && <ManagePosts />}
            {selectedContent === "Add Post" && <AddPost />}
            {selectedContent === "Feedback" && <Feedback />}
            {selectedContent === "Make a News" && <MakeNews />}
          </div>
        </div>
      </div>
      {showMobileSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMobileSidebar}
        ></div>
      )}
    </div>
  );
};

const ManagePosts = () => <div><ManageMyPost /></div>;
const AddPost = () => <div className="overflow-y-scroll max-h-screen"><AddVolunteer /></div>;
const Feedback = () => <div>Content for Feedback</div>;
const MakeNews = ()=> <div><NewsForm/></div>

export default GoDashboard;




