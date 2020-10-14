import React from 'react'
import "./Sidebar.css"
import {DonutLarge, MoreVert, Chat, SearchOutlined} from "@material-ui/icons"
import { Avatar, IconButton } from '@material-ui/core'
import SidebarChats from './SidebarChats'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                        <IconButton>
                            <DonutLarge />
                        </IconButton>
                        <IconButton>
                            <Chat />
                        </IconButton>
                        <IconButton>
                            <MoreVert />
                        </IconButton>
                    </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input type="text" placeholder="search whatsapp.."/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChats />
                <SidebarChats />
                <SidebarChats />
            </div>
        </div>
    )
}

export default Sidebar
