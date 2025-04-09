// Part 1: Creating the student object
const student = {
    name: "Alice Johnson",
    age: 22,
    enrolled: true,
    courses: ["Math", "Physics", "English"],
    displayInfo() {
      return `Student: ${this.name}, Age: ${this.age}`;
    },
    addCourse(newCourse) {
      this.courses.push(newCourse);
    },
    totalCourses() {
      return this.courses.length;
    }
  };
  
  console.log("Name:", student.name);
  console.log("Age:", student.age);
  console.log(student.displayInfo());
  console.log("Checkpoint: Logging complete.");

  
  // Part 2: Working with JSON
  const studentJSON = JSON.stringify(student);
  console.log("Checkpoint: Student converted to JSON.");
  console.log("JSON String:", studentJSON);
  
  const parsedStudent = JSON.parse(studentJSON);
  console.log("Checkpoint: JSON parsed back to object.");
  console.log("Parsed Object:", parsedStudent);
  
  // Part 3: Destructuring Assignment
  const { name, courses } = student;
  console.log("Checkpoint: Destructured student object.");
  console.log("Destructured Name:", name);
  console.log("Destructured Courses:", courses);
  
  const scores = [85, 92, 78, 90];
  const [firstScore, secondScore] = scores;
  console.log("First Score:", firstScore);
  console.log("Second Score:", secondScore);
  
  // Part 4: Spread Operator
  const clonedStudent = { ...student, graduationYear: 2025 };
  console.log("Cloned Student with Graduation Year:", clonedStudent);
  
  const newCourses = ["Biology", "Chemistry"];
  const mergedCourses = [...student.courses, ...newCourses];
  console.log("Merged Courses:", mergedCourses);
  
  // Part 5: Object Methods in use
  student.addCourse("Computer Science");
  console.log("Courses After Adding:", student.courses);
  console.log("Total Courses:", student.totalCourses());
  
  // Bonus: Average Score using reduce
  const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  console.log("Average Score:", averageScore.toFixed(2));
  