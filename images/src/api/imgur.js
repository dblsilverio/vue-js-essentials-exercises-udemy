import axios from 'axios';
import qs from 'qs';

const IMGUR_CLIENT_ID = "IMGUR API CLIENT ID"
const IMGUR_ROOT_URL = "https://api.imgur.com"

export default {
    login() {
        const params = {
            client_id: IMGUR_CLIENT_ID,
            response_type: 'token',
            state: 'APPLICATION_STATE'
        }

        const authorizationUrl = `${IMGUR_ROOT_URL}/oauth2/authorize?${qs.stringify(params)}`
        window.location = authorizationUrl;
    },
    fetchImages(token) {
        return axios.get(`${IMGUR_ROOT_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },
    uploadImages(images, token) {
        const promises = Array.from(images).map(image => {
            const formData = new FormData();
            formData.append('image', image);

            return axios.post(`${IMGUR_ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });

        return Promise.all(promises);
    },
    userProfile(token) {
        return axios.get(`${IMGUR_ROOT_URL}/3/account/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}