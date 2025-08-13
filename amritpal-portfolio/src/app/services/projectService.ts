import { api } from "../config/api";

export const getProjects = async () => {
  const res = await api.get("/project");
  return res.data;
};
