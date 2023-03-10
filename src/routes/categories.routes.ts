import {Router} from 'express';
import { v4 as uuidv4} from 'uuid';
import { CreateCourseService } from "../CreateCourseService";
import { Category } from '../model/Category';


const  categoriesRoutes = Router();


const categories: Category[] = [];

categoriesRoutes.post('/', (request:Request, response:Response)=> {
  const {name, description} = request.body;


 const category = new Category();
 Object.assign(category, { name, description,   created_at: new Date()})
 
  categories.push(category)


  return response.status(201).json({category})



})



export { categoriesRoutes};





