import imgurAPI from '../../api/imgur';
import { router } from '../../main';

const state = {
    images: []
}
const getters = {
    allImages: state => state.images
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
    async uploadImages({ rootState }, images) {
        const { token } = rootState.auth;

        await imgurAPI.uploadImages(images, token);

        router.push('/');
    }
}
const mutations = {
    setImages: (state, images) => {
        state.images = images
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}