const {
  GraphQLString, GraphQLList
} = require('graphql');

const SimpleUserConnectionType = require('../types/SimpleUserConnectionType');
const { github, bodyHandler } = require('../../request');
const PaginationFields = require('../inputs/PaginationFields');

const Users = {
  type: SimpleUserConnectionType,
  args: {
    since: {
      name: 'since',
      type: GraphQLString,
    },
    ...PaginationFields
  },
  resolve: (data, { since, page, perPage }) =>
    github(`/users?since=${since}&page=${page}&per_page=${perPage}`)
      .then(bodyHandler)
      .then(users => ({
        users,
        pageInfo: { page, perPage }
      }))
};

module.exports = Users;