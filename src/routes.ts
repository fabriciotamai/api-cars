import {Request, Response} from "express";



import { CreateCourseService } from "./CreateCourseService";

export function  createCourses(request: Request, response: Response){
    const createCurseService = new CreateCourseService();

    createCurseService.execute({name:"FABRICIO", duration:29, educator:"Yasmin"});


    return response.send();

}