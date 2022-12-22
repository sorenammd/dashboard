import mongoose from "mongoose";

const AffilateStatSchema = new mongoose.Schema(
    {
        userId:{type:mongoose.Types.ObjectId,ref:"User"},
        affiliateSales:{
            type:[mongoose.Types.ObjectId],
            ref:"Transaction"
        },
    },
  { timestamps: true });

const Affiliatestats = mongoose.model("affiliatestats", AffilateStatSchema);
export default Affiliatestats;
