const {
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');

const UserType = require('../types/UserType');
const { github, bodyHandler } = require('../../request');

const User = {
  type: UserType,
  args: {
    username: {
      name: 'username',
      type: GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (user, args) => github('/users/' + args.username).then(bodyHandler),
};

module.exports = User;