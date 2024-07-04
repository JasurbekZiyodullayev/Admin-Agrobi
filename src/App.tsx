import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { theme } from "./configs/mantine";
import { Router } from "./router/router";
import React from "react";
import LoaderPage from "./components/loaderPage";

function App() {
  const queryClient = new QueryClient();
  return (
    <MantineProvider theme={theme}>
      <React.Suspense fallback={<LoaderPage />}>
        <QueryClientProvider client={queryClient}>
          <Notifications position="top-right" />
          <ModalsProvider>
            <Router />
          </ModalsProvider>
        </QueryClientProvider>
      </React.Suspense>
    </MantineProvider>
  );
}

export default App;
