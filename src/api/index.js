import axios from 'axios';
import { message } from 'antd';

class Queries {
  constructor() {
    this.base_url = 'https://api.hh.ru';
    axios.interceptors.response.use(this.handleSuccess, this.handleError);
  }

  handleSuccess = (response) => {
    return response;
  };

  handleError = (error) => {
    if (error.message === 'Network Error' && !error.response) {
      message.error('Сетевая ошибка');
    }

    if (error.message === 'Request failed with status code 500') {
      message.error('Сервер не отвечает');
    }
  };

  getVacancies = async ({
    textSearch = '',
    areaId = 1,
    countVacancies,
    currentPage = 1,
    experience = '',
  }) => {
    const query = `text=${textSearch}&area=${areaId}&per_page=${countVacancies}&page=${
      currentPage - 1
    }${experience}`;

    const res = await axios.get(`${this.base_url}/vacancies?${query}`);
    return res.data;
  };

  getVacancy = async ({ id }) => {
    const res = await axios.get(`${this.base_url}/vacancies/${id}`);
    return res.data;
  };
}

export default new Queries();
