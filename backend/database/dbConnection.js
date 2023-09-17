import mongoose from "mongoose";
export const dbConnection = ()=> {
    mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log(err);
});
} 