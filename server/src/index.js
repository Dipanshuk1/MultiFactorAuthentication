import express from "express"
import session from "express-session"
import passport from "passport"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config();
const app=express();

//Middlewares
const corsOptions = {
    origin: ["http://localhost:3001"],
    credentials: true,
}
app.use(express.json({ limit: "100mb"}))
app.use(express.urlencoded({ limit: "100mb" , extended: true }))

//Routes

//Listen app
const PORT= process.env.PORT || 7002;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});