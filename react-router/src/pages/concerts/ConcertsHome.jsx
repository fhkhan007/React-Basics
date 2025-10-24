import React from "react";
import { Link } from "react-router-dom";

export default function ConcertsHome() {
  return (
    <div>
      <h2>Concerts Home</h2>
      <ul>
        <li><Link to="/concerts/dhaka">Concerts in Dhaka</Link></li>
        <li><Link to="/concerts/london">Concerts in London</Link></li>
        <li><Link to="/concerts/trending">Trending concerts</Link></li>
      </ul>
    </div>
  );
}
