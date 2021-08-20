const Seungsoo = {
  name: "Seungsoo",
  age: 27,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => Seungsoo,
  },
};

export default resolvers;
