import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProjects } from "../services/projectService";

const Projects = () => {
  const { error, data, isLoading } = useQuery({
    queryKey: ["Projects"],
    queryFn: getProjects,
  });
  if (error) {
    return "Error";
  }
  if (isLoading) {
    return "Loading...";
  }
  console.log("Projects data", data);
  return <div>Projects</div>;
};

export default Projects;
