const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schemas');
const resolvers = require('./resolvers');

const app = express();
const PORT = 4000;

app.use(
  '*',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  }),
);

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));