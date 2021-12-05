// routes
import { PATH_DASHBOARD } from "routes/paths";
// components
import SvgIconStyle from "components/SvgIconStyle";

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle
    src={`/static/icons/navbar/${name}.svg`}
    sx={{ width: "100%", height: "100%" }}
  />
);

const ICONS = {
  banking: getIcon("ic_building"),
  ecommerce: getIcon("ic_building"),
  analytics: getIcon("ic_building"),
  booking: getIcon("ic_building"),
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    items: [
      {
        title: "All Assets",
        path: PATH_DASHBOARD.general.assets,
        icon: ICONS.ecommerce,
      },
      {
        title: "RMZ Ecoworld",
        path: PATH_DASHBOARD.general.ecoworld,
        icon: ICONS.analytics,
      },
      {
        title: "The Millenia",
        path: PATH_DASHBOARD.general.millenia,
        icon: ICONS.banking,
      },
      {
        title: "Ecospace",
        path: PATH_DASHBOARD.general.ecospace,
        icon: ICONS.booking,
      },
      {
        title: "RMZ Infinity",
        path: PATH_DASHBOARD.general.infinity,
        icon: ICONS.booking,
      },
      {
        title: "RMZ One Paramount",
        path: PATH_DASHBOARD.general.paramount,
        icon: ICONS.booking,
      },
    ],
  },
];

export default sidebarConfig;
