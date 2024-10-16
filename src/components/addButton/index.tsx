import { Button } from "@mantine/core";
import { useParams } from "react-router-dom";

export default function AddButton({
  isLoading = false,
}: {
  isLoading: boolean;
}) {
  const { id } = useParams();
  return (
    <div style={{ textAlign: "right" }}>
      <Button loading={isLoading} type="submit" mt={"8px"}>
        {id ? "Tahrirlash" : "Yaratish"}
      </Button>
    </div>
  );
}
