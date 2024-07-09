import styled from "@/layout/style.module.scss";
import { HocPrivate } from "./hoc";
import { ScrollArea } from "@mantine/core";
import Sidebar from "@/components/layout/sidebar";
import { useState } from "react";
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
          <ScrollArea
            h={"100vh"}
            offsetScrollbars
            scrollbarSize={0}
            scrollHideDelay={1500}
            scrollbars="y"
          >
            <h1>Salom</h1>
            {/* <Header /> */}
            {/* <Container>
              <Suspense fallback={"loading..."}>
                <main>
                  <div className="paper">
                    <Outlet />
                  </div>
                </main>
              </Suspense>
              <Footer />
            </Container> */}
          </ScrollArea>
        </div>
      </div>
    </HocPrivate>
  );
}
