const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql');
const Github = require('../../github');
const FollowType = require('./FollowType');

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'This represents a Github User',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: (user) => user.id,
    },
    login: {
      type: GraphQLString,
      resolve: (user) => user.login,
    },
    name: {
      type: GraphQLString,
      resolve: (user) => user.name,
    },
    url: {
      type: GraphQLString,
      resolve: (user) => user.url,
    },
    avatarUrl: {
      type: GraphQLString,
      resolve: (user) => user.avatar_url,
    },
    email: {
      type: GraphQLString,
      resolve: (user) => user.email,
    },
    followers: {
      type: GraphQLList(FollowType),
      resolve: (user) => Github.getUser(user.login).listFollowers().then(r => r.data),
    },
    following: {
      type: GraphQLList(FollowType),
      resolve: (user) => Github.getUser(user.login).listFollowing().then(r => r.data),
    },
    followersCount: {
      type: GraphQLInt,
      resolve: (user) => user.followers,
    },
    followingCount: {
      type: GraphQLInt,
      resolve: (user) => user.following,
    },
    publicReposCount: {
      type: GraphQLInt,
      resolve: (user) => user.public_repos,
    },
    publicGistsCount: {
      type: GraphQLInt,
      resolve: (user) => user.public_gists,
    },
    createdAt: {
      type: GraphQLString,
      resolve: (user) => user.created_at,
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (user) => user.updated_at,
    },
  }),
});

module.exports = UserType;