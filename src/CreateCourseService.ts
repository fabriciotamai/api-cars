interface ICourse {
    name:string, duration:number, educator:string

}

export class CreateCourseService{
    execute({name, duration, educator}:ICourse){
        console.log(name, duration, educator)
    }
}