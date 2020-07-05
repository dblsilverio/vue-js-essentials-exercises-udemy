import qs from 'qs';

import imgurAPI from '../../api/imgur';
import { router } from '../../main';

const state = {
    token: window.localStorage.getItem('imgur_token'),
    userProfile: JSON.parse(window.localStorage.getItem('imgur_profile'))
};

const getters = {
    isLoggedIn: state => !!state.token,
    userProfile: state => state.userProfile
};

const actions = {
    finalizeLogin: async ({ commit }, hash) => {
        const query = qs.parse(hash.replace('#', ''));
        const userProfileResponse = await imgurAPI.userProfile(query.access_token);

        const acessToken = query.access_token;
        const userProfile = userProfileResponse.data.data;

        commit('setToken', acessToken);
        commit('setUserProfile', userProfile);

        window.localStorage.setItem('imgur_token', acessToken);
        window.localStorage.setItem('imgur_profile', JSON.stringify(userProfile));
        router.push('/');
    },
    login: () => {
        imgurAPI.login();
    },
    logout: ({ commit }) => {
        commit('setToken', null);
        commit('setUserProfile', null);
        window.localStorage.removeItem('imgur_token');
        window.localStorage.removeItem('imgur_profile');
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    },
    setUserProfile: (state, userProfile) => {
        state.userProfile = userProfile;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}