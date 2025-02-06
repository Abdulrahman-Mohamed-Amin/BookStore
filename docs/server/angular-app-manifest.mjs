
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
    'index.csr.html': {size: 91792, hash: '06743ae2f4f876d5d33eefb9031c08bc4f51f9a40029f21feea0b8a1252e3404', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17269, hash: 'd2c16127bd6c97269bacc1f152a35f51ab280e589363f89edc8ac5d85b6b5fb7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'forget/index.html': {size: 131548, hash: 'e5e2e41524af71550c802c0a8f76859bb5e706cd3527aebe2e3e2f7218869bad', text: () => import('./assets-chunks/forget_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 135411, hash: '6e73d31ed40603f983d588fb5b50b389127434aaa1531fe713ead9eb1ecc90f5', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 151107, hash: '35d7c63a1f00588ab92ac5ef23342eaf40ed8032cec2e0c537b43fbe23c2777b', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'reset/index.html': {size: 136750, hash: 'a565c676f72a3bc6816ab35bd0204c1bddbeffdfec8874904d6f47b02385338f', text: () => import('./assets-chunks/reset_index_html.mjs').then(m => m.default)},
    'changePass/index.html': {size: 133335, hash: 'f30bfcc4470f9068bbc14ab0987d83da847d2f5f048c66865ceee71379ebcd01', text: () => import('./assets-chunks/changePass_index_html.mjs').then(m => m.default)},
    'landing/index.html': {size: 92118, hash: '22e3c9c8a241215d8c61e1b060e3036da7bd1a0e25ab87a5328485059082e5a7', text: () => import('./assets-chunks/landing_index_html.mjs').then(m => m.default)},
    'all-books/index.html': {size: 92118, hash: '22e3c9c8a241215d8c61e1b060e3036da7bd1a0e25ab87a5328485059082e5a7', text: () => import('./assets-chunks/all-books_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 92118, hash: '22e3c9c8a241215d8c61e1b060e3036da7bd1a0e25ab87a5328485059082e5a7', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'styles-ANMNRENP.css': {size: 386478, hash: 'ufzioq0EBLg', text: () => import('./assets-chunks/styles-ANMNRENP_css.mjs').then(m => m.default)}
  },
};
