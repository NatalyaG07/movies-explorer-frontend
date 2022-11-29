export const BASE_URL = "http://localhost:3000";

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
  })
  .then((response) => {
      if (response.status === 200){
        return response.json();
      }
      return Promise.reject(`Ошибка: ${response.status}`);
  })
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((response => response.json()))
  .then((data) => {
    if (!data.token) {
      return data;
    } else {
    localStorage.setItem('jwt', data.token);
      return data;
    }
  })
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(res => res.json())
  .then(data => data)
}

export const getUserInfo = (token) => { 
  return fetch(`${BASE_URL}/users/me`, { 
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then((response) => {
    if (response.status === 200){
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
})
};

export const editProfile = (data, token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
        name: data.name,
        email: data.email,
      })
  })

  .then((response) => {
    if (response.status === 200){
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
 })
};