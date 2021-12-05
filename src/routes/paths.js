// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/news-feed";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  loginUnprotected: path(ROOTS_AUTH, "/login-unprotected"),
  register: path(ROOTS_AUTH, "/register"),
  registerUnprotected: path(ROOTS_AUTH, "/register-unprotected"),
  resetPassword: path(ROOTS_AUTH, "/reset-password"),
  verify: path(ROOTS_AUTH, "/verify"),
};

export const PATH_PAGE = {
  maintenance: "/maintenance",
  page404: "/404",
  page500: "/500",
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    ecoworld: path(ROOTS_DASHBOARD, "/ecoworld"),
    assets: path(ROOTS_DASHBOARD, "/assets"),
    millenia: path(ROOTS_DASHBOARD, "/millenia"),
    ecospace: path(ROOTS_DASHBOARD, "/ecospace"),
    infinity: path(ROOTS_DASHBOARD, "/infinity"),
    paramount: path(ROOTS_DASHBOARD, "/paramount"),
  },
};
