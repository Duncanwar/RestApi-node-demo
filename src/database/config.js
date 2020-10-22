import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const dbConnection = () => {
    mongoose.connect(process.env.DB_DEV, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, () => {
        console.log('Db Connected')
    })
}
