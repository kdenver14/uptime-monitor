import { db } from "./db.js";

const monitors = await db.orm.public.Monitor.where({}).all();
console.log(monitors);
