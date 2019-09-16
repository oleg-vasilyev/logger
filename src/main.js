import { Logger } from './logger';
import { Student } from './student';
import { Lesson } from './lesson';
import { LoggerableClasswork } from './classwork';
import { LoggerableTeacher } from './teacher';

import { ENVIRONMENT } from './../environment';

class App {
  async execute() {
    const logger = new Logger({
      logLevel: ENVIRONMENT.mode === 'development'
        ? 'debug'
        : 'prod'
    });

    const classwork = new LoggerableClasswork(
      new LoggerableTeacher('teacher', logger),
      [
        new Student('student 1'),
        new Student('student 2')
      ],
      [
        new Lesson('lesson 1'),
        new Lesson('lesson 2')
      ],
      logger
    );

    await classwork.beginEducation();
  }
}

new App().execute();

