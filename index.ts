import express from "express";
import 'dotenv/config';
import initRoute from "./routes/general.route";
import { connect } from "./database/mongodb.connect";
import generalMiddleware from "./middlewares/genaral.middleware";
import bodyParser from "body-parser";

const init = async () => {
  
  await connect(); 
  const app = express();
  const port = 2000;

  app.set("views", `${__dirname}/views`);
  app.set("view engine", "pug");

  app.use(express.static(`${__dirname}/public`));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  await initRoute(app);

  app.listen(port, async () => {
    console.log(`Website đang chạy trên cổng ${port}`);
  });
}

init();
