import { getOrders } from "./controllers.js";

export const routes = [
    {
        method: "GET",
        url: "/api/orders",
        handler: getOrders
    }
]