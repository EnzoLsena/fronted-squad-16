export const themes = {
  light: {
    dark: false,
    colors: {
      customer: import.meta.env.VITE_CUSTOMER || "#1f3799",
      primary: import.meta.env.VITE_PRIMARY || "#000000",
      secondary: import.meta.env.VITE_SECONDARY || "#9e9da6",
      success: import.meta.env.VITE_SUCCESS || "#22C55E",
      info: import.meta.env.VITE_INFO || "#03C3EC",
      warning: import.meta.env.VITE_WARNING || "#f59e0b",
      error: import.meta.env.VITE_ERROR || "#EF4444",
      submit: import.meta.env.VITE_SUBMIT || "#16A34A",
      pendding: import.meta.env.VITE_PENDDING || "#F97316",
    },
    variables: {},
    branding: {
      logoLight: import.meta.env.VITE_LOGO_PATH_LIGHT,
      logoDark: import.meta.env.VITE_LOGO_PATH_DARK,
      iconPage: import.meta.env.VITE_ICON_PAGE,
      loginImage: import.meta.env.VITE_LOGIN_IMAGE,
      customerName: import.meta.env.VITE_CUSTOMER_NAME || "del.tech",
    },
  },
  dark: {
    dark: true,
    colors: {},
    variables: {},
    branding: {
      logoLight: import.meta.env.VITE_LOGO_PATH_LIGHT,
      logoDark: import.meta.env.VITE_LOGO_PATH_DARK,
      iconPage: import.meta.env.VITE_ICON_PAGE,
      loginImage: import.meta.env.VITE_LOGIN_IMAGE,
      customerName: import.meta.env.VITE_CUSTOMER_NAME,
    },
  },
};

export default themes;
