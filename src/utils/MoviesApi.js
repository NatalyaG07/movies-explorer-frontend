class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  //Получение фильмов по запросу поисковой строки
  getMovies() { 
    return fetch(`${this._baseUrl}`, { 
      headers: this._headers
    })

    .then(this._testStatus);
  };

  //Проверка на ошибку
  _testStatus(res) {
    if (res.ok) { 
      return res.json();
    }
      
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
});