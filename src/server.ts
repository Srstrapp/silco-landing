import { AngularNodeAppEngine, createNodeRequestHandler, isMainModule, writeResponseToNodeResponse } from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

// 1. Servir archivos estáticos primero
app.use(express.static(browserDistFolder, {
  maxAge: '1y',
  index: false,
  redirect: false
}));

// 2. Manejar todas las rutas con Angular SSR
app.get('*', (req, res, next) => {
  console.log('Handling request for:', req.url); // ← Para depuración

  angularApp.handle(req)
    .then((response) => {
      if (response) {
        writeResponseToNodeResponse(response, res);
      } else {
        res.status(404).send('Not found');
      }
    })
    .catch((err) => {
      console.error('SSR Error:', err);
      next(err);
    });
});



// Iniciar el servidor
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

export const reqHandler = createNodeRequestHandler(app);