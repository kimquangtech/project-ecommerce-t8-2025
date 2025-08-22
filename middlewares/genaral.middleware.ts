import { NextFunction, Request, Response } from "express";
import RouteAdmin from "../model/route-admin.model";

declare global {
     var ROUTER_ADMIN: any;
}

export default async(req: Request, res: Response, next: NextFunction) => {
     try {
          const ROUTER_ADMIN = await RouteAdmin.findOne({});
          res.locals.ROUTER_ADMIN = ROUTER_ADMIN;
          if(res.locals.ROUTER_ADMIN) next()
          // next()
          
     } catch (error) {
          next(error);
     }
}