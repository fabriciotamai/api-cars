"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourses = void 0;
const CreateCourseService_1 = require("./CreateCourseService");
function createCourses(request, response) {
    const createCurseService = new CreateCourseService_1.CreateCourseService();
    createCurseService.execute("FABRICIO", 29, "Yasmin");
    return response.send();
}
exports.createCourses = createCourses;
