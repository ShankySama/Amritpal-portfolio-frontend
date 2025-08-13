import { api } from "../config/api";
import { Bio } from "../types/bio.types";

export const getBio = async () => {
  const res = await api.get<Bio>("/bio");
  return res.data;
};
