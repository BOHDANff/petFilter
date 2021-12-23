import axios from "axios";

export default class UserService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('https://venbest-test.herokuapp.com/', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }

}
