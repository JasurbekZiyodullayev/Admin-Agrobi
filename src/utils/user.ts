import { TOKEN } from "@/constants/config.api";

export const clearUser = () => {
  localStorage.clear();
  sessionStorage.clear();
};

export const setUser = (data: any) => {
  const user = JSON.stringify(data);
  localStorage.setItem(TOKEN, user);
};

export const setSession = (data: string) => {
  const session = JSON.stringify(data);
  localStorage.setItem(TOKEN, session);
};

export const getUser = (): Partial<any> | undefined => {
  const user: any = JSON.parse(localStorage.getItem(TOKEN) as string);

  return user;
};
