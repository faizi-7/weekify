import dotenv from 'dotenv'
dotenv.config()
import app from './app'



app.listen(3000,"0.0.0.0", async () => {
  console.log(`App is listening to port`)
})