import { Document, Model, Schema, model } from "mongoose";

export interface IUrl extends Document {
  url: string;
  newUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const UrlSchema: Schema = new Schema({
  url: { type: String, required: true },
  newUrl: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

export const UrlModel: Model<IUrl> = model<IUrl>("url", UrlSchema);
