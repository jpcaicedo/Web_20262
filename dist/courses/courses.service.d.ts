import { Course, CourseLevel } from './course.interface';
import { CreateCourseDto } from './dto/create-course.dto';
export declare class CoursesService {
    private courses;
    getAllCourses(level?: CourseLevel): Course[];
    getOneCourse(id: number): Course | undefined;
    createCourse(data: CreateCourseDto): Course;
}
