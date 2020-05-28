const {
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql');

const User = require('./queries/User');
const Users = require('./queries/Users');

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  description: 'This is the root query which holds all possible READ entrypoints for the GraphQL API',
  fields: () => ({
    User,
    Users,
  }),
});


const schema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = { schema };