const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql');
// const { request, bodyHandler } = require('../../request');
// const PaginationFields = require('../util/PaginationFields');
// const SimpleUserType = require("./SimpleUserType");

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
    company: {
      type: GraphQLString,
      resolve: (user) => user.company,
    },
    bio: {
      type: GraphQLString,
      resolve: (user) => user.bio,
    },
    url: {
      type: GraphQLString,
      resolve: (user) => user.html_url,
    },
    location: {
      type: GraphQLString,
      resolve: (user) => user.location,
    },
    avatarUrl: {
      type: GraphQLString,
      resolve: (user) => user.avatar_url,
    },
    email: {
      type: GraphQLString,
      resolve: (user) => user.email,
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
    // followers: {
    //   type: GraphQLList(SimpleUserType),
    //   args: PaginationFields,
    //   resolve: (user, { page, perPage }) =>
    //     request(`${user.followers_url}?page=${page}&per_page=${perPage}`)
    //       .then(bodyHandler),
    // },
    // following: {
    //   type: GraphQLList(SimpleUserType),
    //   args: PaginationFields,
    //   resolve: (user, { page, perPage }) =>
    //     request(`${user.following_url}?page=${page}&per_page=${perPage}`)
    //       .then(bodyHandler),
    // },
  }),
});

module.exports = UserType;