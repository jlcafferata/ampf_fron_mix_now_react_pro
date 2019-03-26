import Dashboard from "../views/Dashboard/Dashboard.jsx";
import Buttons from "../views/Components/Buttons.jsx";
import GridSystem from "../views/Components/GridSystem.jsx";
import Panels from "../views/Components/Panels.jsx";
import SweetAlert from "../views/Components/SweetAlertPage.jsx";
import Notifications from "../views/Components/Notifications.jsx";
import Icons from "../views/Components/Icons.jsx";
import Typography from "../views/Components/Typography.jsx";
import RegularForms from "../views/Forms/RegularForms.jsx";
import ExtendedForms from "../views/Forms/ExtendedForms.jsx";
import ValidationForms from "../views/Forms/ValidationForms.jsx";
import Wizard from "../views/Forms/Wizard/Wizard.jsx";
import RegularTables from "../views/Tables/RegularTables.jsx";
import ExtendedTables from "../views/Tables/ExtendedTables.jsx";
import ReactTable from "../views/Tables/ReactTable.jsx";
import GoogleMaps from "../views/Maps/GoogleMaps.jsx";
import FullScreenMap from "../views/Maps/FullScreenMap.jsx";
import VectorMap from "../views/Maps/VectorMap.jsx";
import Charts from "../views/Charts/Charts.jsx";
import Calendar from "../views/Calendar/Calendar.jsx";
import Widgets from "../views/Widgets/Widgets.jsx";
import UserPage from "../views/Pages/UserPage.jsx";
import TimelinePage from "../views/Pages/TimelinePage.jsx";
import RTL from "../views/Pages/RTL.jsx";

import pagesRoutes from "./pages.jsx";

var pages = [
  {
    path: "/addAyuda",
    name: "Nueva ayuda",
    mini: "NA",
    component: TimelinePage
  },
  {
    path: "/viewAyuda",
    name: "Consultar Ayuda",
    mini: "CA",
    component: UserPage
  }
];

var dashRoutes = [
  {
    collapse: true,
    path: "/cargaAyudas",
    name: "Ayudas economicas",
    state: "openPages",
    icon: "business_money-coins",
    component: Dashboard,
    views: pages
  },
  {
    path: "/otroServicio",
    name: "Otro Servicio",
    state: "openPages",
    icon: "business_bulb-63"
  },
  {
    path: "/otroServicioMas",
    name: "Otro Servicio Mas",
    state: "openComponents",
    icon: "business_briefcase-24"
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "" }
];
export default dashRoutes;
