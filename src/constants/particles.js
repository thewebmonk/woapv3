export const config = {
  background: {
    color: {
      value: ''
    }
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: 'push'
      },
      onHover: {
        enable: false,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 900,
        duration: 2,
        opacity: 0.8,
        size: 40
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: '#ffffff'
    },
    links: {
      color: '#ffffff',
      distance: 200,
      enable: true,
      opacity: 0.1,
      width: 1
    },
    collisions: {
      enable: true
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 2,
      straight: false
    },
    number: {
      density: {
        enable: true,
        value_area: 1800
      },
      value: 80
    },
    opacity: {
      value: 0.2
    },
    shape: {
      type: 'circle'
    },
    size: {
      random: true,
      value: 3
    }
  },
  detectRetina: true
};
