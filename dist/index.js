"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const general_route_1 = __importDefault(require("./routes/general.route"));
const mongodb_connect_1 = require("./database/mongodb.connect");
const body_parser_1 = __importDefault(require("body-parser"));
const init = async () => {
    await (0, mongodb_connect_1.connect)();
    const app = (0, express_1.default)();
    const port = 2000;
    app.set("views", `${__dirname}/views`);
    app.set("view engine", "pug");
    app.use(express_1.default.static(`${__dirname}/public`));
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    await (0, general_route_1.default)(app);
    app.listen(port, async () => {
        console.log(`Website đang chạy trên cổng ${port}`);
    });
};
init();
