const { ApolloServer } = require('apollo-server'),
      typeDefs = require('./src/typeDefs'),
      resolvers = require('./src/resolvers'),
      MockEntitiesApi = require('./src/dataSource')

const server = new ApolloServer({ typeDefs, resolvers, dataSources: () => {
  return {['MockEntitiesApi']: new MockEntitiesApi()}
}});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
