"use client"
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getBio } from "../services/bioService";

const Header = () => {
  const { error, data, isLoading } = useQuery({
    queryKey: ["bio"],
    queryFn: getBio,
  });
  if(error){
    return "Error"
  }
  if(isLoading){
    return "Loading..."
  }
  console.log("Header data",data)
  return <div>Header</div>;
};

export default Header;
