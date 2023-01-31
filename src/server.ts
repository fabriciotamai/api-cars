import express, { request } from 'express';
import { createCourses} from './routes';



const app = express()

app.use(express.json());

app.post('/courses',(request, response) => {

  return response.json({
    name
  })
 

})


app.listen(3333,()=> console.log('rodando'));

