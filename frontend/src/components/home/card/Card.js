import React from "react";
import "./card.css";
import { Parallax } from 'react-parallax';
import { useMediaQuery } from "react-responsive";
function Card() {
  const view1 = useMediaQuery({ query: "(max-width: 564px)" });
  const view2 = useMediaQuery({ query: "(max-width: 420px)" });
  return (
    <div className="intro_section">
      <Parallax className="parallex-img" bgClassName={"bgimg"} bgImage="/best.jpg" bgImageAlt="the cat" blur={4} strength={900}>
        <h3 className="card-text">
          {view1 ? "Whether you're a seasoned blogger or just starting out, our website is the ultimate platform to showcase your projects through engaging blogs. With our user-friendly blog app, we provide the perfect solution to help you achieve your blogging goals. From sharing your creative endeavors to documenting your professional projects, our platform offers a seamless experience."
            : "Whether you're a seasoned blogger or just embarking on your blogging journey, our website serves as the ultimate stage to exhibit your projects through compelling blog posts. Through our user-friendly blog application, we offer the perfect solution to help you realize your blogging objectives. From sharing your creative ventures to chronicling your professional pursuits, our platform guarantees a seamless and enjoyable experience. Join our vibrant bloggers' community, tap into our diverse audience, and witness your ideas come to life. There's no need to hesitate any longer – begin crafting your blog today and let your projects shine on our dynamic platform."}
        </h3>
      </Parallax>
    </div>
  );
}

export default Card;
