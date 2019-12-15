import { Router } from 'express';

const routes = new Router();


routes.get(['/consultora', '/consultora/*', '/consultora.htm'], async (req, res) => {
  return res.sendFile(`${process.env.ADMIN_PATH}/index.html`);
});

routes.get(['/admin', '/admin/*', '/admin.html'], async (req, res) => {
  return res.sendFile(`${process.env.CONSULTORA_PATH}/index.html`);
});

export default routes;