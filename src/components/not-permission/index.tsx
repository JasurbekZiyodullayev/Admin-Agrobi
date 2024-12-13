import { Flex } from "@mantine/core";
import style from "./style.module.scss";

export default function NotPremission() {
  return (
    <div className={style.wrapper}>
      <div className={style.curtain}>
        <Flex direction="column" gap="12px" align="center">
          <h4>{"Sizda bu boʻlimga kirishga ruxsatingiz yoʻq!"}</h4>
          {/* <Button w="fit-content" size="md">
            <Link href="/dashboard">Bosh </Link>
          </Button> */}
        </Flex>
      </div>
    </div>
  );
}
