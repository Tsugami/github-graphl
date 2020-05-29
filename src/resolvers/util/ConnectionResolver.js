class ConnectionResolver {
  constructor (
    nodes,
    totalCount = (data) => data.totalCount,
    ) {
    this.nodes = nodes;
    this.totalCount = totalCount;
  }
}

module.exports = ConnectionResolver;