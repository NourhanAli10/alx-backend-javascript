export default function createIteratorObject(report) {
  const employees = [];
  // eslint-disable-next-line guard-for-in
  for (const department in report.allEmployees) {
    for (const employee of report.allEmployees[department]) {
      employees.push(employee);
    }
  }
  return employees;
}
