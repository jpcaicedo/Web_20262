import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import type { CourseLevel } from './course.interface';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    getAllCourses(level?: CourseLevel): import("./course.interface").Course[];
    getActiveCourses(): import("./course.interface").Course[];
    getCoursesByName(name: string): import("./course.interface").Course[];
    getOneCourse(id: string): import("./course.interface").Course;
    createCourse(body: CreateCourseDto): import("./course.interface").Course;
}
