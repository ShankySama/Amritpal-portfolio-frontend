import React from "react";
import { getSkills } from "../services/skillService";
import { useQuery } from "@tanstack/react-query";

function Skill() {
  const { error, data, isLoading } = useQuery({
    queryKey: ["Skill"],
    queryFn: getSkills,
  });
  if (error) {
    return "Error";
  }
  if (isLoading) {
    return "Loading...";
  }
  console.log("Skill data", data);
  return <div>Skill</div>;
}

export default Skill;
