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
      active: false,
      duration: 20,
    },
    {
      id: 2,
      name: 'TypeScript',
      level: 'intermediate',
      active: true,
      duration: 30,
    },
    {
      id: 3,
      name: 'Docker',
      level: 'intermediate',
      active: true,
      duration: 25,
    },
    {
      id: 4,
      name: 'NestJS',
      level: 'advanced',
      active: true,
      duration: 40,
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

getActiveCourses(): Course[] {
    return this.courses.filter((course) => course.active === true);

  }
getCoursesByName(name: string): Course[] {
    return this.courses.filter((course) => course.name.toLowerCase().includes(name.toLowerCase()));
  }
  createCourse(data: CreateCourseDto): Course {
    const newCourse: Course = {
      id: this.courses.length + 1,
      name: data.name,
      level: data.level,
      active: true,
      duration: data.duration,
    };

    this.courses.push(newCourse);

    return newCourse;
  }
}
