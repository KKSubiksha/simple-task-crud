import { db } from "./utils/db.js"

export const getOrders = async (request, reply) => {
    console.log('method :', request.method);
    const orders = await db.Order.findMany();
    console.log('order count :', orders.length);
    return reply.send(orders[0]);
}