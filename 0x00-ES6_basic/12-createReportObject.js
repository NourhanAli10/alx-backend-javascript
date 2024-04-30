export default function createReportObject(employeesList) {
  const AllEmployees = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };

  return AllEmployees;
}
