import { LoadingOverlay } from "@mantine/core";
import React from "react";
import { Navigate } from "react-router-dom";

export const HocPrivate = ({ children }: any) => {
  const user = localStorage.getItem("token");

  if (!user) {
    return <Navigate to="/auth" />;
  }

  return (
    <React.Suspense fallback={<LoadingOverlay visible={true} />}>
      <>{children}</>
    </React.Suspense>
  );
};
