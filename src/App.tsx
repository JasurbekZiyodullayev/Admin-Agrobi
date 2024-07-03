import { createTheme, MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

function App() {
  const theme = createTheme({});
  const queryClient = new QueryClient();
  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Notifications position="top-right" />
        <ModalsProvider>
          <h1>Salom</h1>
        </ModalsProvider>
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
