import mongoose from "mongoose"
import User from "../models/User.js"
import Transaction from "../models/Transaction.js";

export const getAdmins = async(req ,res)=>{
    try {
        const admins = await User.find({role:"admin"}).select("-password");
        res.status(200).json(admins);
    } catch (error) {
        res.status(404).json({mesage:error.mesage});
    }
};
export const getUserPerformance= async(req ,res)=>{
    try {
        const {id} = req.params;
        const userWithStats = await User.aggregate([
            {$match:{_id: new mongoose.Types.ObjectId(id)}},
            {
                $lookup:{
                    from:"affiliatestats",
                    localField:"_id",
                    foreignField:"userId",
                    as:"affiliatestats"
                }
            },
            {$unionWith:"$affiliatestats"}
        ])
        const saleTransactions= await Promise.all(
            userWithStats[0].affiliatestats.affiliateSales.map((id)=>{
                return Transaction.findById(id);
            })
        );
        const filteredSaleTransactions =saleTransactions.filter(
            (transaction)=> transaction !==null
        );
        res.status(200).json({user:userWithStats[0],sales:filteredSaleTransactions})
    } catch (error) {
        res.status(404).json({mesage:error.mesage});
    }
};