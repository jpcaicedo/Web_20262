import { Injectable } from '@nestjs/common';
import { Course, CourseLevel } from './course.interface';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CoursesService {
  //Base de datos temporal
  private courses: Course[] = [
    {
      id: 1,
      name: 'HTML y CSS',
      level: 'basic',
      active: true,
    },
    {
      id: 2,
      name: 'TypeScript',
      level: 'intermediate',
      active: true,
    },
    {
      id: 3,
      name: 'Docker',
      level: 'intermediate',
      active: true,
    },
  ];

  getAllCourses(level?: CourseLevel): Course[] {
    if (!level) {
      return this.courses;
    }

    return this.courses.filter((course) => course.level === level);
  }

  getOneCourse(id: number): Course | undefined {
    return this.courses.find((course) => course.id === id);
  }

  createCourse(data: CreateCourseDto): Course {
    const newCourse: Course = {
      id: this.courses.length + 1,
      name: data.name,
      level: data.level,
      active: true,
    };

    this.courses.push(newCourse);

    return newCourse;
  }
}
