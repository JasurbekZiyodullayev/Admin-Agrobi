import style from "./error.module.scss";
import { Container, Title, Text, Button, Group } from "@mantine/core";
import { Illustration } from "./components";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Container className={style.root}>
      <div className={style.inner}>
        <Illustration className={style.image} />
        <div className={style.content}>
          <Title className={style.title}>Sahifa topilmadi!</Title>
          <Text size="lg" ta="center" className={style.description}>
            Siz qidirayotgan sahifa topilmadi. Iltimos, yana bir bor urinib
            ko`ring.
          </Text>
          <Group justify="center">
            <Button size="md">
              <Link to="/dashboard">Bosh sahifaga qaytish</Link>
            </Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}
