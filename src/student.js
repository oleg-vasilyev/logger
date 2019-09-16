import { Person } from './person';


export class Student extends Person {
  constructor(name) {
    super(name);
  }

  attendLesson(lesson) {
    return Promise.resolve();
  }

  completeHomework(lesson) {
    return Promise.resolve();
  }
}