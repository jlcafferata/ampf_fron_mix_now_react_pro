import Dashboard from "../_views/Dashboard/Dashboard.jsx";
import TimelinePage from "../views/Pages/TimelinePage.jsx";
import UserPage from "../views/Pages/UserPage.jsx";

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
