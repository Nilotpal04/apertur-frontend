const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REFRESH: "/auth/refresh",
  },

  USERS: {
    ME: "/users/me",
    PROFILE: (username) => `/users/${username}`,
  },

  FEED: "/feed",

  POSTS: {
    CREATE: "/posts",
    DETAILS: (id) => `/posts/${id}`,
  },

  ATLAS: "/atlas",

  NOTIFICATIONS: "/notifications",
};

export default ENDPOINTS;