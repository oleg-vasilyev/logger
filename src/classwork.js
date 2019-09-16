export class Classwork {

  constructor(
    teacher,
    students,
    lessons
  ) {
    this._teacher = teacher;
    this._students = students;
    this._lessons = lessons;
  }

  beginEducation() {
    return new Promise(resolve => {
      this._lessons.forEach(async lesson => {
        await this._teacher.holdLesson(lesson);

        const attendLessonsPromise = [];
        this._students.forEach(student => {
          attendLessonsPromise.push(student.attendLesson(lesson));
        });
        await Promise.all(attendLessonsPromise);

        await this._teacher.provideHomework(lesson);

        const completeHomeworksPromise = [];
        this._students.forEach(student => {
          attendLessonsPromise.push(student.completeHomework(lesson));
        });
        await Promise.all(completeHomeworksPromise);

        return resolve();
      });
    });
  }
}

export class LoggerableClasswork extends Classwork {
  constructor(
    teacher,
    students,
    lessons,
    logger
  ) {
    super(...arguments);
    this._logger = logger;
  }

  async beginEducation() {
    this._logger.log("education started");
    await super.beginEducation();
    this._logger.log("education completed");
  }
}