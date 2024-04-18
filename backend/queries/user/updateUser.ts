import { Request } from "express";
import { UserModel } from "../../models";


export const upUserSj = async (req: Request) => {
  const { id, firstName, lastName, phone, location, image } = req.body;

  try {
    const UpedUser = await UserModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          location: location,
          image: image,
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
