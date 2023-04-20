import express from 'express';
import mongoose from "mongoose";
import router from './router.js'

const PORT = process.env.PORT || 4444

const app = express()

app.use(express.json())

app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()