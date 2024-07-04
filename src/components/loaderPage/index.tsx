import { Skeleton } from "@mantine/core";
import styled from "./style.module.scss";

export default function LoaderPage() {
  return (
    <div className={styled.wrapper}>
      <div className="left">
        <Skeleton width={"100%"} height={"68px"} visible={true} />
        <Skeleton mt={24} width={"100%"} height={"28px"} visible={true} />
        <Skeleton width={"100%"} height={"28px"} visible={true} />
        <Skeleton width={"100%"} height={"28px"} visible={true} />
        <Skeleton width={"100%"} height={"28px"} visible={true} />
        <Skeleton width={"100%"} height={"28px"} visible={true} />
        <Skeleton width={"100%"} height={"28px"} visible={true} />
        <Skeleton width={"100%"} height={"28px"} visible={true} />
      </div>
      <div className="right">
        <div className="header">
          <Skeleton width={"100%"} height={"100%"} visible={true}></Skeleton>
        </div>
        <div className="main">
          <Skeleton width={"100%"} height={"68px"} visible={true} />
          <div className="center">
            <Skeleton width={"100%"} height={"100px"} visible={true} />
            <Skeleton width={"100%"} height={"100px"} visible={true} />
            <Skeleton width={"100%"} height={"100px"} visible={true} />
          </div>
        </div>
        <div className="footer">
          <Skeleton width={"100%"} height={"100%"} visible={true} />
        </div>
      </div>
    </div>
  );
}
