import React from "react";
import Particles from "react-tsparticles";

const Background = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
        },
        background: {
          color: {
            value: "#0d47a1", // Dark blue background for a space-like theme
          },
        },
        particles: {
          number: {
            value: 100, // Adjust the number of particles
            density: {
              enable: true,
              area: 800, // Particle density
            },
          },
          color: {
            value: ["#ffffff", "#ffcc00", "#00ffcc"], // White, gold, and teal particles
          },
          shape: {
            type: "circle", // Shapes of the particles
          },
          opacity: {
            value: 0.8, // Slightly transparent particles
            random: true,
          },
          size: {
            value: 3, // Default size
            random: true, // Random sizes for variation
          },
          move: {
            enable: true,
            speed: 2, // Particle speed
            direction: "none", // Moves in random directions
            outMode: "bounce", // Bounces when it hits edges
          },
          links: {
            enable: true,
            distance: 150, // Link distance
            color: "#ffffff", // Link color
            opacity: 0.5,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Particles repel on hover
            },
            onClick: {
              enable: true,
              mode: "push", // Add more particles on click
            },
          },
          modes: {
            repulse: {
              distance: 100, // Hover repulsion distance
            },
            push: {
              quantity: 4, // Number of particles added on click
            },
          },
        },
      }}
    />
  );
};

export default Background;
