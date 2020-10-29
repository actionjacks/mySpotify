import React from "react";
import "../styles/Sidebar.css";
import SidebarOption from "./SidebarOption";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log(playlists);

  return (
    <div className="sidebar">
      <img className="sidebar__logo" src="./logo_body.png" alt="spotify" />
      <SidebarOption Icon={SearchIcon} title="home" />
      <SidebarOption Icon={HomeIcon} title="search" />
      <SidebarOption Icon={LibraryMusicIcon} title="U library" />
      <br />
      <strong className="sidebar__title">Play-List</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
