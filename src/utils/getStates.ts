import { useTypedSelector } from "../hooks/useTypedSelector";

export const getToken = () => {
  return useTypedSelector((state: any) => state.login.data.jwt)
}

export const getUserId = () => {
  return useTypedSelector((state: any) => state.login.data.user.id)
}