export default class BaseModel {

    static baseUrl = 'http://localhost:8000/api'

    static fetchData(url, method='GET', data={}) {
        return new Promise((resolve, reject) => {

            const body = method !== 'GET' ? JSON.stringify(data) : undefined

            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token') ?? ''
            }

            fetch(url, { body, headers, method })
                .then(resp => resp.json())
                .then(data => {
                    if (!data.errors.length) resolve(data)
                    else reject(data.errors);
                })
                .catch(err => reject(err))

        });
    }

}