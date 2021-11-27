import React from "react";
import "./Home.css";
import CompanyBubble from "../components/CompanyBubble";

const companyImages = [
  "https://raw.githubusercontent.com/DstoverVT/space-missions-news-website/main/news-space/src/images/spacex.png",
];

function Home() {
  return (
    <div>
      <div className="particle-background">
        {companyImages.map((url) => (
          <CompanyBubble src={url} />
        ))}
      </div>
    </div>
  );
}

export default Home;
