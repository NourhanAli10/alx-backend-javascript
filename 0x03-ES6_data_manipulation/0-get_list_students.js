/* eslint-disable */
function getListStudents() {
  const arrayOfObjects = [];
  const SanFrancisco = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  };
  const Columbia = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  };
  const Serena = {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  };

  arrayOfObjects[0] = SanFrancisco;
  arrayOfObjects[1] = Columbia;
  arrayOfObjects[2] = Serena;

  return arrayOfObjects;
}

export default getListStudents;
