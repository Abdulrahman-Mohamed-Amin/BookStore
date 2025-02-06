
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/BookStore/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/BookStore/login",
    "route": "/BookStore"
  },
  {
    "renderMode": 2,
    "route": "/BookStore/login"
  },
  {
    "renderMode": 2,
    "route": "/BookStore/register"
  },
  {
    "renderMode": 2,
    "route": "/BookStore/forget"
  },
  {
    "renderMode": 2,
    "route": "/BookStore/reset"
  },
  {
    "renderMode": 2,
    "route": "/BookStore/changePass"
  },
  {
    "renderMode": 2,
    "route": "/BookStore/landing"
  },
  {
    "renderMode": 2,
    "route": "/BookStore/all-books"
  },
  {
    "renderMode": 2,
    "route": "/BookStore/cart"
  },
  {
    "renderMode": 2,
    "route": "/BookStore/**"
  }
],
  assets: {
    'index.csr.html': {size: 91792, hash: 'b66248eaf90cf461d8dd0e18182a7ffbfb3e2fb32f557eb3a36f0a45b636d9a2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17269, hash: '410b169a2d3f92003451d4322c32eb5b9dc1df94eb8b8c14789a840d7989b2d1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'forget/index.html': {size: 131548, hash: 'bdf75c314d37fc614297a48f9e63bf15ba6242f1ddc9cfe3f2be634b1d9cd309', text: () => import('./assets-chunks/forget_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 135411, hash: 'fbab28e9bb0b7f0176f67ebe6e0ab7fe94c2e1fd2e2688f0ebf0973a28893151', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 151107, hash: 'efe40c7a625d223ee96a87e5c6b88236a23886fc07d717c9bccbc858d1f3bab0', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'reset/index.html': {size: 136750, hash: '6f693c739c97e4e3699441f02d797ed0472c2fcdb29d32c99986789dd77e43c0', text: () => import('./assets-chunks/reset_index_html.mjs').then(m => m.default)},
    'changePass/index.html': {size: 133335, hash: '32acf7a2362b624c8a7f2f4db2d6d6b4ecee13d28c16858e2068bcba47a5e217', text: () => import('./assets-chunks/changePass_index_html.mjs').then(m => m.default)},
    'all-books/index.html': {size: 92118, hash: 'dc14c7aa1c1a436257e6f0a47ddca5f08df44a6b66ddc2620e8549e796e1b82a', text: () => import('./assets-chunks/all-books_index_html.mjs').then(m => m.default)},
    'landing/index.html': {size: 92118, hash: 'dc14c7aa1c1a436257e6f0a47ddca5f08df44a6b66ddc2620e8549e796e1b82a', text: () => import('./assets-chunks/landing_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 92118, hash: 'dc14c7aa1c1a436257e6f0a47ddca5f08df44a6b66ddc2620e8549e796e1b82a', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'styles-M4QTAU42.css': {size: 386713, hash: '8VUifaBcJBk', text: () => import('./assets-chunks/styles-M4QTAU42_css.mjs').then(m => m.default)}
  },
};
