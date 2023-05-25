import express from "express";
import morgan from "morgan";
import router from "./routes/routes.js";
import movie from "./routes/movies.js";
import user from './routes/user.js';
import colors from "colors";

//* settings
const app = express();
app.set("json spaces", 2);

//* starting the server
const port = 3000;
app.listen(process.env.PORT || port, () => {
  console.log("server listening on port 3000".blue);
});
//* middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//* routes
app.use(router);
app.use("/api/movies", movie);
app.use("/api/users",user)



