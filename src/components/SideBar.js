import React, { useEffect, useState } from "react";
import "./sidebar.css";
import SidebarOption from "./SidebarOption";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import PersonIcon from "@mui/icons-material/Person";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import LockIcon from "@mui/icons-material/Lock";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { PeopleOutline } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import db from "../firebase";
function SideBar() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
    console.log(channels);
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Shaurya Dixit</h2>
          <h3>
            <FiberManualRecordIcon />
            Shaurya.D
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={PersonIcon} title="Threads" />
      <SidebarOption title="NWS-Community" />
      <SidebarOption Icon={DraftsIcon} title="Drafts" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Bookmarks" />
      <SidebarOption Icon={PeopleOutline} title="people" />
      <SidebarOption Icon={LockIcon} title="Optimus-NWS" />
      <SidebarOption Icon={LockIcon} title="October-ADSA" />
      <SidebarOption Icon={GroupsIcon} title="Mentor-Together" />
      <SidebarOption Icon={PeopleAltIcon} title="SS" />
      <SidebarOption Icon={ExpandLessIcon} title="show less" />
      <div className="space"></div>
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <div className="space"></div>
      <SidebarOption Icon={AddBoxIcon} title="Add Channel" />
      {channels.map((channel) => {
        <SidebarOption title={channel.name} id={channel.id} />;
      })}
    </div>
  );
}

export default SideBar;
