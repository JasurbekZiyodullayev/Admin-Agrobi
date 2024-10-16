import IconEdit from "@/assets/editIcon";
import IconDelete from "@/assets/trashIcon";
import { Button } from "@mantine/core";
import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import React from "react";
import { Link } from "react-router-dom";

export default function EditDeleteButton({
  router,
  id,
  mutate,
  isloading = false,
  children,
}: {
  router?: string;
  id: string;
  isloading: boolean;
  mutate?: UseMutateFunction<AxiosResponse<unknown>, unknown, string, unknown>;
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{
        width: "100%",
        minWidth: 90,
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        gap: "8px",
      }}
    >
      <div style={{ margin: "0 auto" }}>
        <Button
          variant="light"
          component={Link}
          to={(router ? router : "edit/") + id}
          styles={{
            root: {
              width: "32px",
              height: "32px",
              padding: "6px",
            },
          }}
          color="green"
          mr={8}
        >
          <IconEdit />
        </Button>
        <Button
          disabled={isloading}
          variant="light"
          color="red"
          onClick={() => {
            if (mutate) mutate(id);
          }}
          styles={{
            root: {
              width: "32px",
              height: "32px",
              padding: "6px",
            },
          }}
        >
          <IconDelete />
        </Button>
        {children}
      </div>
    </div>
  );
}
