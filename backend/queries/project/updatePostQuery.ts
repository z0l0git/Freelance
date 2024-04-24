import { Request } from "express";

import { ProjectModel } from "../../models/project";

export const updateProjectQuery = async (req: Request) => {
  const {
    _id,

    title,
    description,

    category,
    skills,
    budget,
    deliveryTime,
    flexible,
  } = req.body;



  try {
    const upedPOst = await ProjectModel.findByIdAndUpdate(
      {
        _id: _id,
      },
      {
        $set: {
          _id: _id,

          title: title,
          description: description,

          category: category,
          skills: skills,
          budget: budget,
          deliveryTime: deliveryTime,
          flexible: flexible,
        },
      },
      { new: true }
    );
    return upedPOst;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
