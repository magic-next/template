const Router = require('koa-router');

const routerFactory = () => {
  const router = new Router();
  router.get('/', (ctx) => {
    ctx.body = 'OK';
  });

  return router;
};

module.exports = routerFactory;
