import axios from 'axios';
import config from '../config';

export default {
    state: {
        notes: []
    },
    getters: {
        notest(state) {
            return state.notest;
        }
    },
    mutations: {
        addNewNotes(state, newNote) {

            const requestData = {
                note_name: newNote.note_name,
                note_date: newNote.note_date,
                note_text: newNote.note_text
            };

            axios.post(`${config.API_URL}/api/addArticle`, requestData)
            .then((response) => {
                console.log("response", response);

                // добавлять в state тут если надо будет
                //state.notes.push(newNote);
            })
            .catch((err) => console.log(err));

        }
    },
    actions: {

    }
}
