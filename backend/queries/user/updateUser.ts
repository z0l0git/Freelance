import { Request } from "express";
import { UserModel } from "../../models";

const upUserSj = async (req: Request) => {
  const {
    id,
    // email,

    firstName,
    lastName,
    phone,
    location,
  } = req.body;
  try {
    const UpedUser = await UserModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          //   email: email,

          firstName: firstName,
          lastName: lastName,
          phone: phone,
          location: location,
        },
      },
      {
        new: true,
      }
    );
    return UpedUser;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export default upUserSj;
