import imgurAPI from '../../api/imgur';
import { router } from '../../main';

const state = {
    images: [],
    uploading: false
}
const getters = {
    allImages: state => state.images,
    isUploadInProgress: state => state.uploading
}
const actions = {
    async fetchImages({ commit, rootState }) {
        const { token } = rootState.auth;

        const response = await imgurAPI.fetchImages(token);
        if (response.status === 200) {
            commit('setImages', response.data.data);
        } else {
            console.error(`Error requesting images: [${response.status}] ${response.statusText}`);
        }
    },
    async uploadImages({ commit, rootState }, images) {
        const { token } = rootState.auth;

        commit('uploading', true);
        await imgurAPI.uploadImages(images, token);
        commit('uploading', false);

        router.push('/');
    }
}
const mutations = {
    setImages: (state, images) => {
        state.images = images
    },
    uploading: (state, uploading) => {
        state.uploading = uploading;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}