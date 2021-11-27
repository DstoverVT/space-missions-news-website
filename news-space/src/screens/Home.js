import React from "react";
import "./Home.css";
import CompanyBubble from "../components/CompanyBubble";

function Home() {
  return (
    <div>
      <div className="particle-background">
        <CompanyBubble />
      </div>
    </div>
  );
}

export default Home;
