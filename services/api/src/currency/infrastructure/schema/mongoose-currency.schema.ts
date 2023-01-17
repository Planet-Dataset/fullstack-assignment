import { model, Schema } from "mongoose";

const CurrencySchema = new Schema(
  {
    code: String,
    hasSubscription: Boolean,
  },
  {
    timestamps: true,
  }
);

export default model("Currency", CurrencySchema);
