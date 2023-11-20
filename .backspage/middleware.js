const table = require('./mocks/test_data_layer0.json');
const graph = require('./mocks/test_data_layer1.json');

module.exports = (middlewares, devServer) => {
  const {app} = devServer;

  app.get('/api/getTable', (req, res) => {
    console.log(table)
    setTimeout(() => res.json(table), 300);
  });
  app.get('/api/getGraph', (req, res) => {
    setTimeout(() => res.json(graph), 300);
  });
  return middlewares;
}
