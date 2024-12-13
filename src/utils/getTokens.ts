import { TOKEN } from "@/constants/config.api";

export const getTokens = () => {
  const tokens =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem(TOKEN) as string)
      : undefined;
  return tokens;
};
