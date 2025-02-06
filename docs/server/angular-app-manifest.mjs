
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
    'index.csr.html': {size: 91792, hash: 'e03563941a916812b2dffd299a4b90f08a9d0594192a911e9bfb1e812f400081', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17269, hash: '74adc2fd29cf2f81cca658b6d6461b068c568ed07868aa6457d4b92b4c2517ee', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 135411, hash: '17f20b93f6c788d1dff14bfbcff094c4996abb79b83ba799c926fa3f9d8cef3f', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 151107, hash: '95e5924a5aa92b46838a426c547b6ab778e85e803b74bf269477bd543d4e2632', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'forget/index.html': {size: 131548, hash: '8409a6538cf4cf1e1998147973a44a322525cd05df2a41ed2c0015abed11a075', text: () => import('./assets-chunks/forget_index_html.mjs').then(m => m.default)},
    'reset/index.html': {size: 136750, hash: 'd24a689195f373df6c50d8acc8accfa0578f13cbcf301fcad786d75add18f45d', text: () => import('./assets-chunks/reset_index_html.mjs').then(m => m.default)},
    'landing/index.html': {size: 92118, hash: '5eb041fe39959083d435135bb1c518c4b2b50a817a17b566b0b4e9caf2a7d960', text: () => import('./assets-chunks/landing_index_html.mjs').then(m => m.default)},
    'all-books/index.html': {size: 92118, hash: '5eb041fe39959083d435135bb1c518c4b2b50a817a17b566b0b4e9caf2a7d960', text: () => import('./assets-chunks/all-books_index_html.mjs').then(m => m.default)},
    'changePass/index.html': {size: 133335, hash: '7be2211bda2c8580c371c43762caf1aaaf00ee5f33b8546215b8817bff5b9e25', text: () => import('./assets-chunks/changePass_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 92118, hash: '5eb041fe39959083d435135bb1c518c4b2b50a817a17b566b0b4e9caf2a7d960', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'styles-ANMNRENP.css': {size: 386478, hash: 'ufzioq0EBLg', text: () => import('./assets-chunks/styles-ANMNRENP_css.mjs').then(m => m.default)}
  },
};
