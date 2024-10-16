export const clearUser = () => {
  localStorage.clear();
  sessionStorage.clear();
};

export const setUser = (data: any) => {
  const user = JSON.stringify(data);
  localStorage.setItem("billing-session", user);
};

export const setSession = (data: string) => {
  const session = JSON.stringify(data);
  localStorage.setItem("billing-session", session);
};

export const getUser = (): Partial<any> | undefined => {
  const user: any = JSON.parse(
    localStorage.getItem("billing-session") as string
  );

  return user;
};
