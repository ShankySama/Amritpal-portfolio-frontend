import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getExperience } from "../services/experienceService";

function Experience() {
  const { error, data, isLoading } = useQuery({
    queryKey: ["Experience"],
    queryFn: getExperience,
  });
  if (error) {
    return "Error";
  }
  if (isLoading) {
    return "Loading...";
  }
  console.log("Experience data", data);
  return <div>Experience</div>;
}

export default Experience;
