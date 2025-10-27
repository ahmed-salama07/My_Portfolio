
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/My_Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/My_Portfolio/about",
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
    'index.csr.html': {size: 5048, hash: '6173e30b38ea1d70e48dba0b0c22f5a804a02ede88701e78a9591ea24ee5ef7c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1020, hash: '29a7a3832b33b5d3f61dc2cf8246eb96a58d1a3544ab83463977471f38ca7509', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 18531, hash: '99a76b1afe42e94e6067777d209c292105dd7566cc114b626c0e655574628172', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 19296, hash: '2e8dd0489e18edf474c8147ead33b3fd0df43796f0f0b662fd2b6d7381cdb7e2', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 19784, hash: '2c7fdd365e34b3e7474ef304dd872b989022771d34459d858553ee33cf7effe8', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-VRDYZCWE.css': {size: 230966, hash: 'yJEOwb9t5lw', text: () => import('./assets-chunks/styles-VRDYZCWE_css.mjs').then(m => m.default)}
  },
};
