import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getEducation } from "../services/educationService";

function Education() {
  const { error, data, isLoading } = useQuery({
    queryKey: ["Education"],
    queryFn: getEducation,
  });
  if (error) {
    return "Error";
  }
  if (isLoading) {
    return "Loading...";
  }
  console.log("Education data", data);
  return <div>Education</div>;
}

export default Education;
