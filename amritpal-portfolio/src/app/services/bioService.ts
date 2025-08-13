import { api } from "../config/api";

export const getBio = async () => {
  const res = await api.get("/bio");
  return res.data;
};
