const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
} = require('graphql');

const PaginationType = require('../types/PaginationType');

class ConnectionType extends GraphQLObjectType {
  constructor (config, nodeType, resolvers) {
    super({
      ...config,
      fields: {
        pageInfo: {
          type: PaginationType,
          resolve: resolvers.pageInfo,
        },
        nodes: {
          type: GraphQLList(nodeType),
          resolve: resolvers.nodes,
        },
        totalCount: {
          type: GraphQLInt,
          resolve: resolvers.totalCount,
        },
        ...(config.fields ? config.fields : {}),
      }
    })
  }
}

module.exports = ConnectionType;