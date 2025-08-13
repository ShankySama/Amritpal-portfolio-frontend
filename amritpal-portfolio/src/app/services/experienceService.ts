import { api } from "../config/api";

export const getExperience = async () => {
  const res = await api.get("/experience");
  return res.data;
};
