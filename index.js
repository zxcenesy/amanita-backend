import express from 'express';
import mongoose from "mongoose";
import router from './router.js'

const PORT = process.env.PORT || 80;
const DB_URL = "mongodb+srv://zxcenesy:Type1998Script@cluster123.fv4kona.mongodb.net/?retryWrites=true&w=majority";

const app = express()

app.use(express.json())

app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()