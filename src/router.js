const Router = require('koa-router');

const routerFactory = ({}) => {
  router.get('/', (ctx) => {
    ctx.body = 'OK';
  });

  return router;
};

module.exports = routerFactory;
