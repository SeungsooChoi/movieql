export const people = [
  {
    id: 1,
    name: "Seungsoo",
    age: 27,
    gender: "male",
  },
  {
    id: 2,
    name: "Jiwoo",
    age: 21,
    gender: "female",
  },
  {
    id: 3,
    name: "Ahin",
    age: 17,
    gender: "male",
  },
  {
    id: 4,
    name: "Woojoo",
    age: 23,
    gender: "male",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => id === person.id);
  return filteredPeople[0];
};
