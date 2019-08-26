require('dotenv').config();
const Koa = require('koa');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const fetch = require('node-fetch');
const Container = require('folkjs');

const routerFactory = require('./router');
const PORT = process.env.PORT || 3000;

const container = Container();

container.register('router', routerFactory);
container.register('fetch', fetch, Container.types.CONSTANT);

const app = new Koa();

app.use(logger());
app.use(bodyParser({ jsonLimit: '10mb' }));

const { router } = container.draw;

app
  .use(router.routes())
  .use(router.allowedMethods());

const createLogger = () => {
  return { ...console, info: console.log };
};

app.listen(PORT, () => {
  const log = createLogger({ isDev: true });
  log.info(`Done! Listening on http://localhost:${PORT}`);
});
