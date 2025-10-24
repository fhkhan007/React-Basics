import React from "react";
import { useParams } from "react-router-dom";

export default function City() {
  const { city } = useParams();
  return <div><h2>Concerts in: {city}</h2></div>;
}
