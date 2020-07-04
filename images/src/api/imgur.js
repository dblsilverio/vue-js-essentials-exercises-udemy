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
    }
}