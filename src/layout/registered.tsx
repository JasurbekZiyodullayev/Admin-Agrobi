import styled from "@/layout/style.module.scss";
import { HocPrivate } from "./hoc";
import { ScrollArea } from "@mantine/core";
import Sidebar from "@/components/layout/sidebar";
import { Suspense, useState } from "react";
import Navbar from "@/components/layout/navbar";
import { Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const [show, setShow] = useState(true);

  function toggleSidebar() {
    setShow(!show);
  }
  return (
    <HocPrivate>
      <div className={styled.wrapper}>
        <Sidebar show={show} toggleSidebar={toggleSidebar} />
        <div className={styled.inner}>
          <Navbar show={show} toggleSidebar={toggleSidebar} />
          <ScrollArea
            h={"calc(100vh - 86px)"}
            offsetScrollbars
            scrollbarSize={0}
            scrollHideDelay={1500}
            scrollbars="xy"
          >
            <div className={styled.outline}>
              <Suspense fallback={"loading..."}>
                <Outlet />
              </Suspense>
            </div>
            {/* <Footer /> */}
          </ScrollArea>
        </div>
      </div>
    </HocPrivate>
  );
}
