
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/My_Portfolio//',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/My_Portfolio//about",
    "route": "/My_Portfolio"
  },
  {
    "renderMode": 2,
    "route": "/My_Portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/My_Portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/My_Portfolio/contact"
  },
  {
    "renderMode": 2,
    "route": "/My_Portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5049, hash: '621684357bde3393c136aee3174e20d1a62c99485d603930311ea05f54010a50', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1021, hash: 'eb3fff5fdb3749135b731476d93526f6cd4df075ff972cc177088c06cc2d7bd5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'My_Portfolio/projects/index.html': {size: 13729, hash: '2b5ea01314c4e3ae11da68124814f4b40bb7384f3c0ad8a4cf44643d7b9b8125', text: () => import('./assets-chunks/My_Portfolio_projects_index_html.mjs').then(m => m.default)},
    'My_Portfolio/about/index.html': {size: 13729, hash: '2b5ea01314c4e3ae11da68124814f4b40bb7384f3c0ad8a4cf44643d7b9b8125', text: () => import('./assets-chunks/My_Portfolio_about_index_html.mjs').then(m => m.default)},
    'My_Portfolio/contact/index.html': {size: 13729, hash: '2b5ea01314c4e3ae11da68124814f4b40bb7384f3c0ad8a4cf44643d7b9b8125', text: () => import('./assets-chunks/My_Portfolio_contact_index_html.mjs').then(m => m.default)},
    'styles-VRDYZCWE.css': {size: 230966, hash: 'yJEOwb9t5lw', text: () => import('./assets-chunks/styles-VRDYZCWE_css.mjs').then(m => m.default)}
  },
};
