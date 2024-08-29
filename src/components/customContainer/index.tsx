import styled from "./style.module.scss";
export default function CustomContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styled.wrapper}>{children}</div>;
}
