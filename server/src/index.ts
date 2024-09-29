import dotenv from 'dotenv'
import app from './app'


dotenv.config()

app.listen(3000,"0.0.0.0", async () => {
  console.log(`App is listening to port`)
})