import { Course, CourseLevel } from './course.interface';
import { CreateCourseDto } from './dto/create-course.dto';
export declare class CoursesService {
    private courses;
    getAllCourses(level?: CourseLevel): Course[];
    getOneCourse(id: number): Course | undefined;
    getActiveCourses(): Course[];
    getCoursesByName(name: string): Course[];
    createCourse(data: CreateCourseDto): Course;
}
