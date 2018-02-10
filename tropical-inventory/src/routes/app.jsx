import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import Inventory from "views/Inventory/Inventory.jsx";
import Orders from "views/Orders/Orders.jsx";
import StockControl from "views/StockControl/StockControl.jsx";

import {
    Dashboard, Person, ContentPaste
} from 'material-ui-icons';

const appRoutes = [
    { path: "/dashboard", sidebarName: "Dashboard", navbarName: "Dashboard", icon: Dashboard, component: DashboardPage },
    { path: "/Inventory", sidebarName: "Inventory", navbarName: "Inventory", icon: ContentPaste, component: Inventory },
    { path: "/Orders", sidebarName: "Orders", navbarName: "Orders", icon: ContentPaste, component: Orders},
    { path: "/StockControl", sidebarName: "Stock Control", navbarName: "Stock Control", icon: ContentPaste, component: StockControl},
    { path: "/user", sidebarName: "Create New User", navbarName: "Create New User", icon: Person, component: UserProfile },


    { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default appRoutes;
