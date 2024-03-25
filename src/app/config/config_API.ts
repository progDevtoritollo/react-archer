// export const API_URL: string =
// 	process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api' : 'https://example.com/api'

// process.env.NODE_ENV === 'development'
// 	? 'https://9444-193-110-22-126.ngrok-free.app/api'
// 	: 'https://archer.com/api'

const API_URL: string = 'http://localhost:8080/api'
export const URL_GET_IS_AUTH = API_URL + '/hello'

export default API_URL
