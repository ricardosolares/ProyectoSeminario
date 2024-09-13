import express from "express";
import morgan from "morgan";
// Routes
import lenguajeRoutes from "./routes/languaje.routes"

const app = express();

//settings
app.set("port",4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/languajes",lenguajeRoutes);



export default app;