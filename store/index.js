export const state = () => ({
  dark: false,
  url: null,
  video: null,
  photo: null,
  errorMessage: "Error",
});

export const mutations = {
  SET_URL: (state, bool) => {
    state.url = bool;
  },
  addVideo: (state, video) => {
    state.video = video;
  },
  addPhoto: (state, photo) => {
    state.photo = photo;
  },
  SET_ERROR: (state, message) => {
    state.errorMessage = message;
  },
};

export const actions = {
  getData({ commit }, url) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get("/api/get-video?url=" + url)
        .then((res) => {
          commit("addVideo", res.data);
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getPhoto({ commit }, url) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get("/api/get-photo?url=" + url)
        .then((res) => {
          console.log(res);
          commit("addPhoto", res.data);
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
