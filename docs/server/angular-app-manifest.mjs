
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
    'index.csr.html': {size: 91792, hash: 'b074b7fffea25db59fa00017fc6acfd3168a8948cf76f1a7cc1d8b27df6c3a5e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17269, hash: '18bf071051a84c32e7aa0f52430cfe4c507872e9be916fc12ad76986eb471bf1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'forget/index.html': {size: 131548, hash: 'd57eb24de9fe491bc7ec0a46dd1675ea21e2d7aad4654ede53c9206fafc15e37', text: () => import('./assets-chunks/forget_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 135411, hash: 'e0b03324253f0ab73b444be2a3ed18e7a12e081cd9d9dbaddb07169718bc1233', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 151107, hash: '106194947b134fdd69e66fe346e9426d3933af798fb800d94e0beba040b163ee', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'reset/index.html': {size: 136750, hash: 'f6047e769f85fdb2fef7e580bdf5bd6b55eeecd6610d6fce6d5cabf07ef7c6bb', text: () => import('./assets-chunks/reset_index_html.mjs').then(m => m.default)},
    'changePass/index.html': {size: 133335, hash: '34e51cdfdb1db6870afaae283cd60dde46f6f2e12bafa1808290c80e4e5eee27', text: () => import('./assets-chunks/changePass_index_html.mjs').then(m => m.default)},
    'landing/index.html': {size: 92118, hash: '175e67b2153d6f28f97da17d6d881f50e6379813bc784df97cd4b335eca27e88', text: () => import('./assets-chunks/landing_index_html.mjs').then(m => m.default)},
    'all-books/index.html': {size: 92118, hash: '175e67b2153d6f28f97da17d6d881f50e6379813bc784df97cd4b335eca27e88', text: () => import('./assets-chunks/all-books_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 92118, hash: '175e67b2153d6f28f97da17d6d881f50e6379813bc784df97cd4b335eca27e88', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'styles-M4QTAU42.css': {size: 386713, hash: '8VUifaBcJBk', text: () => import('./assets-chunks/styles-M4QTAU42_css.mjs').then(m => m.default)}
  },
};
