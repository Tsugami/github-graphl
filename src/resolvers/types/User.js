const ConnectionResolver = require('../util/ConnectionResolver');
const SimpleUser = require('./SimpleUser');

module.exports = class User {
  constructor (data) {
    this.id = data.id,
    this.login = data.login;
    this.url = data.html_url;
    this.avatarUrl = data.avatar_url;
    this.name = data.name;
    this.company = data.company;
    this.bio = data.bio;
    this.location = data.location;
    this.email = data.email;
    this.publicReposCount = data.public_repos;
    this.publicGistsCount = data.public_gists;
    this.createdAt = data.created_at;
    this.updatedAt = data.updated_at;
    this.followers = 
      new ConnectionResolver(
        ({ page, perPage }) => request(`${user.followers_url}?page=${page}&per_page=${perPage}`)
          .then(users => users.map(u => new SimpleUser(u))),
        data.followers
      );
    this.following = 
      new ConnectionResolver(
        ({ page, perPage }) => request(`${user.following_url}?page=${page}&per_page=${perPage}`)
          .then(users => users.map(u => new SimpleUser(u))),
        { page: null, perPage: null },
        data.following
      );
  }
}