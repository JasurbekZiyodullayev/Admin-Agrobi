// import { type ErrorProps } from "../types/error";

// import { notifications } from "@mantine/notifications";
// import {
//   QueryCache,
//   MutationCache,
//   type QueryClientConfig,
// } from "@tanstack/react-query";

// const mutationCache = new MutationCache({
//   onError(res) {
//     const error = res;

//     notifications.show({
//       color: "red",
//       message: error?.response?.data.description || error?.message,
//     });
//   },
// });

// const queryCache = new QueryCache({
//   onError: (res) => {
//     const error = res;
//     console.log(error);
//   },
// });

// export const queryClientConfig: QueryClientConfig = {
//   queryCache,
//   mutationCache,
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//       retry(failureCount, res) {
//         const error = res;
//         if (error?.response.data.code === 404) return false;
//         if (failureCount < 1) return true;
//         return false;
//       },
//     },
//   },
// };
