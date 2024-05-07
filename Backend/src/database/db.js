import mongoose from 'mongoose'

const databaseConnection=async ()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`DataBase Connected and the DataBase Host is ${connectionInstance.connection.host}`)
    } catch (error) {   
        console.log(`MONGODB Connection Error `,error)
        process.exit(1)
    }       
}

export default  databaseConnection;