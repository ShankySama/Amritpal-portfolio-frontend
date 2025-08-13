import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getBio } from "../services/bioService";

function Bio() {
  const { error, data, isLoading } = useQuery({
    queryKey: ["bio"],
    queryFn: getBio,
  });
  if (error) {
    return "Error";
  }
  if (isLoading) {
    return "Loading...";
  }
  console.log("Header data", data);
  return <div>Bio</div>;
}

export default Bio;
