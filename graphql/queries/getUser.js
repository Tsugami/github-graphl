const {
  GraphQLString,
} = require('graphql');

const UserType = require('../types/UserType');
const Github = require('../../github');

const getUser = {
  type: UserType,
  args: {
    username: {
      name: 'username',
      type: GraphQLString,
    },
  },
  resolve: async (user, args) => Github.getUser(args.username).getProfile().then(r => r.data),
};

module.exports = getUser;