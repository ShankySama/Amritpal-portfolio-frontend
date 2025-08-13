import { api } from "../config/api";

export const getSkills = async () => {
  const res = await api.get("/skill");
  return res.data;
};
