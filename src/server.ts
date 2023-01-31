import express, { request } from 'express';
import { createCourses} from './routes';



const app = express()

app.use(express.json());

app.post('/courses',(request, response) => {

    const { name} = request.body;

 

})


app.listen(3333,()=> console.log('rodando'));

