import mongoose, { connection } from "mongoose";
export async function connect(){
    try {
        mongoose.connect(process.env.MANGO_URI!);
        const connection = mongoose.connection;

        connection.on('connectd' ,()=>{
            console.log('MangoDB connected successfully');

        })
        connection.on('error' ,(err)=>{
            console.log('MangoDB connection error . Please make sure MongoDB is running '+err);
            process.exit();

        })

            
    } catch (error) {
         console.log('Something Went Wrong !');
         console.log(error);

    } 


}