const { ApolloServer } = require('apollo-server')
const typeDefs = require('./src/typeDefs')

const exposureFactors = [{
  val3: 5,
  val5: 99
}, {
  val3: 8,
  val5: 61
}]

const resolvers = {
  Query: {
    // exposure() {
    //   return exposureFactors[0]
    // }
    exposure: (parent, args) => exposureFactors[args.personId]
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
