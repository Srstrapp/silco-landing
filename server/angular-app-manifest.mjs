
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/silco-landing/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "/silco-landingchunk-MM35JLYZ.js"
    ],
    "route": "/silco-landing"
  },
  {
    "renderMode": 2,
    "preload": [
      "/silco-landingchunk-TC2BRKS5.js"
    ],
    "route": "/silco-landing/creative"
  },
  {
    "renderMode": 2,
    "preload": [
      "/silco-landingchunk-YC6DHTBB.js"
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
    'index.csr.html': {size: 577, hash: '17d0b8caeaf308956e3e3957b5ac1c49e5ba4e1fa02f68f414f73fc801b0ff30', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1090, hash: '94e1119509a6bdbee1c4e5df1ab21b84f29cbdcc420a01bfce68f1fbd9184da8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'creative/index.html': {size: 1076, hash: '310e0cb7fb2810504bc84cd183e668b1bddc633561248463ac26d8818d357a69', text: () => import('./assets-chunks/creative_index_html.mjs').then(m => m.default)},
    'index.html': {size: 11888, hash: 'b119a71ae785a02e98162d9f4a9ecc710f401b512d937a306d2f9fa659b8e956', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'barberia/index.html': {size: 1076, hash: '48db0ed92ed9871702b5cc75edd63b724564271e07c12b8b7f70d76d22469e77', text: () => import('./assets-chunks/barberia_index_html.mjs').then(m => m.default)},
    'styles-FVY45DYJ.css': {size: 28597, hash: 'vuXGzoO80qo', text: () => import('./assets-chunks/styles-FVY45DYJ_css.mjs').then(m => m.default)}
  },
};
