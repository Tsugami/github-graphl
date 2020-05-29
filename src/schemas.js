const { buildSchema } = require('graphql');

const schemas = buildSchema(`
  input PaginationInput {
    page: Int = 1
    perPage: Int = 100
  }

  type Connection {
    totalCount: Int!
  }

  type SimpleUserConnection {
    totalCount: Int!
    nodes: [SimpleUser]!
  }

  type SimpleUser {
    id: ID!
    login: String!
    url: String!
    avatarUrl: String!
    user: User!
  }

  type User {
    id: ID!
    login: String!
    url: String!
    avatarUrl: String!
    publicReposCount: Int!
    publicGistsCount: Int!
    name: String
    company: String
    bio: String
    location: String
    email: String
    createdAt: String!
    updatedAt: String!
    followers(paginate: PaginationInput): SimpleUserConnection!
    followings(paginate: PaginationInput): SimpleUserConnection!
  }

  type Query {
    user(username: String): User
    users(paginate: PaginationInput): SimpleUserConnection!
  }

  schema {
    query: Query
  }
`)

module.exports = schemas;