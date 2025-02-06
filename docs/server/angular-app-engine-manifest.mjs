
export default {
  basePath: '/BookStore/',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
