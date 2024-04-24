import { model, Schema, Model, models } from "mongoose";

export type UserModelType = {
  _id: Schema.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  auth: string;
  createdAt: Date;
  jobTitle: string;
  location: string;
  rating: object;
  socials: [string];
  skills: [Schema.Types.ObjectId];
  education: [Schema.Types.ObjectId];
  workExp: [Schema.Types.ObjectId];
  description: string;
  budget?: number;
  image?: string;
};

const UserSchema = new Schema<UserModelType>({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  email: { type: String, required: false },
  phone: { type: String, required: false },
  password: { type: String, required: false },
  auth: { type: String, required: false, enum: ["local", "google"] },
  createdAt: { type: Date, default: Date.now },
  jobTitle: { type: String, required: false },
  location: { type: String, required: false },
  rating: { type: Object, required: false },
  socials: { type: [String], required: false },
  skills: {
    type: [Schema.Types.ObjectId],
    ref: "Categories",
    required: false,
  },
  education: {
    type: [Schema.Types.ObjectId],
    ref: "Education",
    required: false,
  },
  workExp: { type: [Schema.Types.ObjectId], ref: "WorkExp", required: false },
  description: { type: String, required: false },
  budget: { type: Number, required: false },

  image: { type: String, required: false },
});

UserSchema.index({ email: 1 }, { unique: true });

export const UserModel: Model<UserModelType> =
  models["Users"] || model("Users", UserSchema);
