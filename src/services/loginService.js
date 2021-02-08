import { history } from '../routes';

export const loginUserService = (request) => {
    const LOGIN_API_ENDPOINT = 'http://106.51.154.173:8181/websocket/userlogin';
  
    const parameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.user)
    };
  
    return fetch(LOGIN_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      });
  };