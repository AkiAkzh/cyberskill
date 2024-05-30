const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

class CourseService {
  async executeCode(code, language) {
    return new Promise((resolve, reject) => {
      const courseAnswerDir = path.join(__dirname,'..', 'courseanswer');
      if (!fs.existsSync(courseAnswerDir)) {
        fs.mkdirSync(courseAnswerDir);
      }

      let fileName, command, errorLogFile;

      switch (language) {
        case 'python':
          fileName = path.join(courseAnswerDir, 'code.py');
          errorLogFile = path.join(courseAnswerDir, 'python_error.log');
          fs.writeFileSync(fileName, code);
          command = `python3 ${fileName}`;
          break;
        case 'java':
          fileName = path.join(courseAnswerDir, `${code.split(" ",3)[2]}.java`);
          errorLogFile = path.join(courseAnswerDir, 'java_error.log');
          const javaCode = ` ${code}`;
          fs.writeFileSync(fileName, javaCode);
          command = `javac ${filename}`;
          break;
        case 'cpp':
          fileName = path.join(courseAnswerDir, 'main.cpp');
          errorLogFile = path.join(courseAnswerDir, 'cpp_error.log');
          const cppCode = `${code}`;
          fs.writeFileSync(fileName, cppCode);
          command = `g++ ${fileName} -o ${path.join(courseAnswerDir, 'main')} && ${path.join(courseAnswerDir, 'main')}`;
          break;
        default:
          reject(new Error('Unsupported language'));
          return;
      }

      // Логирование команды
      console.log(`Executing command: ${command}`);

      exec(command, { cwd: courseAnswerDir }, (error, stdout, stderr) => {
        // fs.unlinkSync(fileName); // Удалить файл после выполнения
        if (language === 'cpp') {
          fs.unlinkSync(path.join(courseAnswerDir, 'main')); // Удалить исполняемый файл для C++
        }


        // Запись stderr в лог файл
        if (error || stderr) {
          const errorMessage = error ? `Error: ${error.message}\n` : '';
          fs.writeFileSync(errorLogFile, `${errorMessage}${stderr || 'Unknown error'}`);
        }

        // Если произошла ошибка, возвращаем stderr, иначе возвращаем stdout
        if (error) {
          reject(stderr || 'Execution error');
        } else {
          resolve(stdout);
        }
      });
    });
  }
}

module.exports = new CourseService();
