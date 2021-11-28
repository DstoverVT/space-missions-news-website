import React from "react";
import "./Home.css";
import CompanyBubble from "../components/CompanyBubble";

const companyImages = [
  "https://raw.githubusercontent.com/DstoverVT/space-missions-news-website/main/news-space/src/images/spacex.png",
  "https://raw.githubusercontent.com/DstoverVT/space-missions-news-website/main/news-space/src/images/astra.png",
  "https://raw.githubusercontent.com/DstoverVT/space-missions-news-website/main/news-space/src/images/blueorigin.png",
  "https://raw.githubusercontent.com/DstoverVT/space-missions-news-website/main/news-space/src/images/boeing.png",
  "https://raw.githubusercontent.com/DstoverVT/space-missions-news-website/main/news-space/src/images/firefly.png",
  "https://raw.githubusercontent.com/DstoverVT/space-missions-news-website/main/news-space/src/images/nasa.png",
  "https://raw.githubusercontent.com/DstoverVT/space-missions-news-website/main/news-space/src/images/northropgrumman.png",
  "https://raw.githubusercontent.com/DstoverVT/space-missions-news-website/main/news-space/src/images/relativity.png",
  "https://raw.githubusercontent.com/DstoverVT/space-missions-news-website/main/news-space/src/images/rocketlab.png",
  "https://raw.githubusercontent.com/DstoverVT/space-missions-news-website/main/news-space/src/images/ula.png",
  "https://raw.githubusercontent.com/DstoverVT/space-missions-news-website/main/news-space/src/images/virgingalactic.png",
];

function Home() {
  let arraylist = [0, 1, 2, 3];
  const complist = arraylist.map((i) => <CompanyBubble />);
  console.log("bubbles: " + complist);
  return (
    <div>
      <div className="particle-background">
        {companyImages.map((url, i) => (
          <CompanyBubble id={i} src={url} />
        ))}
      </div>
    </div>
  );
}

export default Home;
