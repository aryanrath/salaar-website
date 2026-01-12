particlesJS("particles-js", {
  particles: {
    number: {
      value: 180,
      density: { enable: true, value_area: 900 }
    },
    color: {
      value: ["#ffffff", "#f3e2cf", "#e7c08a"]
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.6,
      random: true
    },
    size: {
      value: 3.5,
      random: true
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "bottom",
      straight: false,
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      }
    },
    modes: {
      bubble: {
        distance: 140,
        size: 6,
        duration: 0.4
      }
    }
  },
  retina_detect: true
});
