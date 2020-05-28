const {
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql');

const getUser = require('./queries/getUser');

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  description: 'This is the root query which holds all possible READ entrypoints for the GraphQL API',
  fields: () => ({
    getUser,
  }),
});


const schema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = { schema };