import express from 'express'
import cors from 'cors'
import searchRoutes from './routes/search_routes.js'


const app = express();

app.use(cors(
    {
        origin:[ 'http://localhost:5173','http://localhost:5174'],
        credentials:true
    }
))



app.use(express.urlencoded({ extended: true }))

app.use(express.json())







app.listen(process.env.PORT || 3001, () => {
    console.log(`Run on ${process.env.PORT || 3001}`);
})


app.use('/api',searchRoutes)