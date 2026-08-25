"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
let CoursesService = class CoursesService {
    courses = [
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
    getAllCourses(level) {
        if (!level) {
            return this.courses;
        }
        return this.courses.filter((course) => course.level === level);
    }
    getOneCourse(id) {
        return this.courses.find((course) => course.id === id);
    }
    createCourse(data) {
        const newCourse = {
            id: this.courses.length + 1,
            name: data.name,
            level: data.level,
            active: true,
        };
        this.courses.push(newCourse);
        return newCourse;
    }
};
exports.CoursesService = CoursesService;
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)()
], CoursesService);
//# sourceMappingURL=courses.service.js.map