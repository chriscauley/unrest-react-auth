const config = {
  login_redirect: '/',
  makeNextUrl: (target, next = '') =>
    config[target].next_url.replace(':next', encodeURIComponent(next)),
  login: {
    url: '/login/',
    next_url: '/login/:next',
  },
  signup: {
    url: '/signup/',
    next_url: '/signup/:next',
  },
  logout: {
    url: '/logout/',
    post_url: '/api/auth/logout/',
  },
  prepData: (data) => data,
  social: [],
}

export default config
