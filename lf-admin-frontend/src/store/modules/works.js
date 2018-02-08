import axios from 'axios';
import config from '../config';

export default {
    state: {
        works: []
    },
    getters: {

    },
    mutations: {
        saveFile(state, file) {

        }
    },
    actions: {
        saveWork({state}, data) {
            let requestData = new FormData();
            requestData.append('name', data.name);
            requestData.append('technologies', data.technologies);
            requestData.append('link', data.link);
            requestData.append('file', data.file);

            axios.post(`${config.API_URL}/api/saveWork`, requestData)
            .then((response) => {
                console.log("response", response);
            })
            .catch(function (error) {
                console.error(error);
            });
        }

    }
}
