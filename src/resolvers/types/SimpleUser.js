const { request } = require('../../request');
const User = require('./User');

module.exports = class SimpleUser {
  constructor (data) {
    this.id = data.id,
    this.login = data.login;
    this.url = data.html_url;
    this.avatarUrl = data.avatar_url;
    this.user = () => request(data.url).then(u => new User(u))
  }
};