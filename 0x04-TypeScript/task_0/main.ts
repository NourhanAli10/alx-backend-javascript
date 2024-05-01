// Define the interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
  };
  
  // Create an array containing the two students
  const studentsList: Student[] = [student1, student2];
  
  // Render a table in the console
  console.log("First Name \t Location");
  studentsList.forEach(student => {
    console.log(`${student.firstName} \t\t ${student.location}`);
  });
  