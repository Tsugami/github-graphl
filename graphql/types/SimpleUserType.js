const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = require('graphql');
// const Github = require('../../request');
// const UserType = require('./UserType');

const SimpleUserType = new GraphQLObjectType({
  name: 'Follow',
  description: 'This represents a Github Follow',
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
      resolve: (user) => user.url,
    },
    avatarUrl: {
      type: GraphQLString,
      resolve: (user) => user.avatar_url,
    },
    // user: {
    //   type: UserType,
    //   resolve: (user) => Github.getUser(user.login).getProfile().then(user => user.data),
    // }
  }),
});

module.exports = SimpleUserType;