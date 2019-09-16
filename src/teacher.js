import { Person } from './person';


export class Teacher extends Person {
  constructor(name) {
    super(name);
  }

  holdLesson(lesson) {
    return Promise.resolve();
  }

  provideHomework(lesson) {
    return Promise.resolve();
  }
}

export class LoggerableTeacher extends Teacher {
  constructor(name, logger) {
    super(name);
    this._logger = logger;
  }

  holdLesson(lesson) {
    this._logger.log(`${this.name} holding lesson`);
    return super.holdLesson(lesson);
  }

  provideHomework(lesson) {
    this._logger.log(`${this.name} providing homework`);
    return super.provideHomework(lesson);
  }
}