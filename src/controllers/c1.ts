import { Request, Response, NextFunction } from "express";

export async function addlogic(
    req: Request | any,
    res: Response|any,
    next: NextFunction
) {
  
    
  res.render("create.ejs");
 
}