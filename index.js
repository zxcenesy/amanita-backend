import express from 'express';
import mongoose from "mongoose";
import router from './router.js'

const app = express()

app.use(express.json())

app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(process.env.DB_URL)
        // await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
        app.listen(process.env.PORT || 4444, () => console.log('SERVER STARTED ON PORT' + process.env.PORT || 4444))
    } catch (e) {
        console.log(e)
    }
}

startApp();