import axios from 'axios';

class Queries {
  constructor() {
    this.base_url = 'https://api.hh.ru';
  }

  /* hh */

  getVacancies = async ({
    textSearch = '',
    areaId = 1,
    countVacancies,
    currentPage = 1,
    experience = '',
  }) => {
    /* Select опыт работы */
    const propertyExperience = (experience) => {
      if (experience === '') {
        return '';
      }
      return `&experience=${experience}`;
    };

    const res = await axios.get(
      `${
        this.base_url
      }/vacancies?text=${textSearch}&area=${areaId}&per_page=${countVacancies}&page=${
        currentPage - 1
      }${propertyExperience(experience)}`
    );
    return res.data;
  };

  getVacancy = async ({ id }) => {
    const res = await axios.get(`${this.base_url}/vacancies/${id}`);
    return res.data;
  };

  getAreas = async () => {
    const res = await axios.get(
      `${this.base_url}/vacancies?text=react&area=2&per_page=16&page=0`
    );
    return res.data;
  };
}

export default new Queries();
