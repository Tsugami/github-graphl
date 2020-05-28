const { GraphQLObjectType, GraphQLInt } = require('graphql');

const PaginationType = new GraphQLObjectType({
  name: 'PageInfo',
  fields: () => ({
    currentPage: {
      type: GraphQLInt,
      resolve: (pageInfo) => pageInfo.page,
    },
    perPage: {
      type: GraphQLInt,
      resolve: (pageInfo) => pageInfo.perPage, 
    },
  }),
});

module.exports = PaginationType;