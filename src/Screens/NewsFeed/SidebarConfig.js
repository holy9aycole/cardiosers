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
  building: getIcon("ic_building"),
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    items: [
      {
        title: "All Assets",
        path: PATH_DASHBOARD.general.assets,
        icon: ICONS.building,
      },
      {
        title: "RMZ Ecoworld",
        path: PATH_DASHBOARD.general.ecoworld,
        icon: ICONS.building,
      },
      {
        title: "The Millenia",
        path: PATH_DASHBOARD.general.millenia,
        icon: ICONS.building,
      },
      {
        title: "Ecospace",
        path: PATH_DASHBOARD.general.ecospace,
        icon: ICONS.building,
      },
      {
        title: "RMZ Infinity",
        path: PATH_DASHBOARD.general.infinity,
        icon: ICONS.building,
      },
      {
        title: "RMZ One Paramount",
        path: PATH_DASHBOARD.general.paramount,
        icon: ICONS.building,
      },
    ],
  },
];

export default sidebarConfig;
