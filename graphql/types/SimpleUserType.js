const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = require('graphql');
const { request, bodyHandler } = require('../../request');
const UserType = require('./UserType');

const SimpleUserType = new GraphQLObjectType({
  name: 'SimpleUser',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: (user) => user.id,
    },
    login: {
      type: GraphQLString,
      resolve: (user) => user.login,
    },
    url: {
      type: GraphQLString,
      resolve: (user) => user.html_url,
    },
    avatarUrl: {
      type: GraphQLString,
      resolve: (user) => user.avatar_url,
    },
    user: {
      type: UserType,
      resolve: (user) => request(user.url).then(bodyHandler),
    }
  }),
});

module.exports = SimpleUserType;