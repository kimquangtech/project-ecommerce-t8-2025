"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.home = void 0;
const home = async (req, res) => {
    res.render("client/pages/home/index.pug");
};
exports.home = home;
