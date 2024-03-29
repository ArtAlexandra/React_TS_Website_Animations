import React from "react";
import { Outlet } from 'react-router-dom'
import "./index.scss";
import Sidebar from "../Sidebar";
export default function Layout(){
    return(
        <>
       <Sidebar/>
       <div className="page">
       <span className="tags top-tags">
            <span className="top-tag-html"> &lt;html&gt;</span>
            <br />
            &lt;body&gt;
        </span>
    
      
        

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
        </>
    )
}