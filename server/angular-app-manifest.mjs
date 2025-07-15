
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/silco-landing/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "/silco-landing/chunk-MM35JLYZ.js"
    ],
    "route": "/silco-landing"
  },
  {
    "renderMode": 2,
    "preload": [
      "/silco-landing/chunk-TC2BRKS5.js"
    ],
    "route": "/silco-landing/creative"
  },
  {
    "renderMode": 2,
    "preload": [
      "/silco-landing/chunk-YC6DHTBB.js"
    ],
    "route": "/silco-landing/barberia"
  },
  {
    "renderMode": 2,
    "redirectTo": "/silco-landing",
    "route": "/silco-landing/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8837, hash: '00087f7073cc141bd189f8d670c4e0a0967801b2cdd7caf250a5604b6065407b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1094, hash: 'd4cec46613f2a16c38597224ce04c427ac4a73e28377e8fd8a2c22e316dcfca4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'creative/index.html': {size: 9362, hash: '59d33c4c05ff50f91e39117eaefdef4815ef918f7a6f18596ec4a3154a63da20', text: () => import('./assets-chunks/creative_index_html.mjs').then(m => m.default)},
    'index.html': {size: 27928, hash: 'fd4aed9f2cd7c9fae4a9f94209b33b0294317a1543530c4bcfb54d271915c62c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'barberia/index.html': {size: 9362, hash: '3bede7512c819170986e000ea967ee8d2d6ea40965d31f05ac9f9ba802e2c1f5', text: () => import('./assets-chunks/barberia_index_html.mjs').then(m => m.default)},
    'styles-FVY45DYJ.css': {size: 28597, hash: 'vuXGzoO80qo', text: () => import('./assets-chunks/styles-FVY45DYJ_css.mjs').then(m => m.default)}
  },
};
