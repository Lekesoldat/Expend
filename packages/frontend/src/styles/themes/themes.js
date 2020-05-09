const Themes = {
  light: {
    background: {
      default: "#fafafa",
      paper: "#fff",
    },

    overlay: "rgba(255, 255, 255, 0.9)",

    primary: "#a6d4fa",
    secondary: "#f6a5c0",
    error: "#e57373",
    warning: "#ffb74d",
    info: "#64b5f6",
    success: "#81c784",

    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },

    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      selected: "rgba(0, 0, 0, 0.08)",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
    },

    divider: "rgba(0, 0, 0, 0.12)",

    box: {
      background: "#f8f8f8",
      shadow: "0 0 0.5rem hsla(0, 0%, 0%, 0.05)",
    },
  },

  dark: {
    background: {
      default: "#1f2430",
      paper: "#424242",
    },

    overlay: "rgba(0, 0, 0, 0.1)",

    primary: "#648dae",
    secondary: "#aa647b",
    error: "#d32f2f",
    warning: "#f57c00",
    info: "#1976d2",
    success: "#388e3c",

    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.8)",
      disabled: "rgba(255, 255, 255, 0.5)",
    },

    action: {
      active: "#fff",
      hover: "rgba(255, 255, 255, 0.08)",
      selected: "rgba(255, 255, 255, 0.16)",
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
    },

    divider: "rgba(255, 255, 255, 0.12)",

    box: {
      background: "#222",
      shadow: "0 0 0.5rem hsla(0, 0%, 0%, 0.25)",
    },
  },
};
export default Themes;
