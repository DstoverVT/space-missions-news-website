import React from "react";
import Particles from "react-tsparticles";

function bubbleParameters(inputSize, imageSrc) {
  return {
    particles: {
      number: {
        value: 1,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "image",
        image: {
          src: imageSrc,
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.9,
        random: false,
      },
      size: {
        value: inputSize,
        random: false,
      },
      move: {
        enable: true,
        speed: 15,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "bounce",
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "repulse",
        },
        onclick: {
          enable: false,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };
}

function CompanyBubble(props) {
  const bubbleOptions = bubbleParameters(100, props.src);
  return (
    <div>
      <Particles id={props.id} options={bubbleOptions} />
    </div>
  );
}

export default CompanyBubble;
