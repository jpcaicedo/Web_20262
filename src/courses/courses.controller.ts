import {
  Controller,
  Get,
  Post,
  Query,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import type { CourseLevel } from './course.interface';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  getAllCourses(@Query('level') level?: CourseLevel) {
    return this.coursesService.getAllCourses(level);
  }

  @Get('active')
  getActiveCourses() {
    return this.coursesService.getActiveCourses();
  }
@Get('search')
  getCoursesByName(@Query('name') name: string) {
    return this.coursesService.getCoursesByName(name);
  }
  @Get(':id')
  getOneCourse(@Param('id') id: string) {
    const course = this.coursesService.getOneCourse(Number(id));

    if (!course) {
      throw new NotFoundException('El curso con id ' + id + ' no existe');
    }

    return course;
  }

  @Post()
  createCourse(@Body() body: CreateCourseDto) {
    return this.coursesService.createCourse(body);
  }
}
