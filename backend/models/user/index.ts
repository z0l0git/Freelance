import { model, Schema, Model, models } from "mongoose";

export type UserModelType = {
  _id: Schema.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  createdAt: Date;
  jobTitle: string;
  location: string;
  rating: string;
  socials: [string];
  education: [Schema.Types.ObjectId];
  workExp: [Schema.Types.ObjectId];
};

const UserSchema = new Schema<UserModelType>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: false },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  jobTitle: { type: String, required: false },
  location: { type: String, required: false },
  rating: { type: String, required: false },
  socials: { type: [String], required: false },
  education: {
    type: [Schema.Types.ObjectId],
    ref: "Education",
    required: false,
  },
  workExp: { type: [Schema.Types.ObjectId], ref: "WorkExp", required: false },
});

UserSchema.index({ email: 1 }, { unique: true });

export const UserModel: Model<UserModelType> =
  models["Users"] || model("Users", UserSchema);
