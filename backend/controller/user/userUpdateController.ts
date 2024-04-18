import { Request, Response } from "express";

import { upUserSj } from "../../queries/user/UpdateUser";

export const upUserSjController = async (req: Request, res: Response) => {
  try {
    const result1 = await upUserSj(req);
    res.send(result1);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

import { jobTitleUp } from "../../queries/user";

export const jobTitleUpController = async (req: Request, res: Response) => {
  try {
    const result2 = await jobTitleUp(req);
    res.send(result2);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

import { budgetUp } from "../../queries/user";
export const budgetUpController = async (req: Request, res: Response) => {
  try {
    const result3 = await budgetUp(req);
    res.send(result3);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
