import mongoose from 'mongoose';
export async function connect(){
    try{
        // connection
        const isConnected = await mongoose.connect(process.env.MONGO_URI);
        mongoose.connection.on('connected', ()=>{
            console.log("Connection Establishment status : "+ isConnected)
        })
    }
    catch(error){
        console.log("Oops Something went wrong!" + error);
    }
}