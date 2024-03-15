import express from "express";

import connectDB from "./db.connect.js";

import usreRoutes from "./user/user.router.js";
const app = express();

//to make app understand
app.use(express.json());

//database connection
connectDB();

//register router
app.use(usreRoutes);
//network port and server

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
