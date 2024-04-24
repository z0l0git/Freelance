import { Request } from "express";
import { EducationModel } from "../../models";

export const updateEducationQuery = async (req: Request) => {
  const {
    _id,
    startedY,
    finishedY,
    degree,
    schoolName,
    aboutSchool,
    profession,
  } = req.body;

  try {
    const upedEdu = await EducationModel.findByIdAndUpdate(
      {
        _id: _id,
      },
      {
        $set: {
          startedY: startedY,
          finishedY: finishedY,
          degree: degree,
          schoolName: schoolName,
          aboutSchool: aboutSchool,
          profession: profession,
        },
      },
      { new: true }
    );
    return upedEdu;
    ///bolku bol find all hiij bagaad setlendee sda
  } catch (err: any) {
    throw new Error(err.message);
  }
};
