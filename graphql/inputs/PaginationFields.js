const { GraphQLInt } = require("graphql");

const PaginationFields = {
  page: {
    name: 'page',
    type: GraphQLInt,
    defaultValue: 1
  },
  perPage: {
    name: 'perPage',
    type: GraphQLInt,
    defaultValue: 100,
  }
}

module.exports = PaginationFields;