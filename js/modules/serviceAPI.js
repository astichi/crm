import {URL} from './const.js';
import {
  renderGoods,
  renderNewGoods,
  renderAfterDelete,
  renderTableTotal} from './render.js';


const fetchRequest = async (url, {
  method = 'GET',
  callback,
  body,
  headers,
}, id) => {
  try {
    const options = {
      method,
    };

    if (body) options.body = JSON.stringify(body);
    if (headers) options.headers = headers;

    const response = await fetch(url, options);

    if (response.ok && id) {
      const data = await response.json();
      if (callback) callback(null, data, id);
      return;
    }

    if (response.ok) {
      const data = await response.json();
      if (callback) callback(null, data);
      return;
    }

    if (response.status === 404 ||
      response.status === 422 ||
      response.status >= 500) {
      const data = await response.json();
      throw new Error(data.message ? data.message : '');
    } else {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }
  } catch (err) {
    callback(err);
  }
};

const getGoods = () => {
  fetchRequest(`${URL}api/goods?page=2`, {
    method: 'GET',
    callback: renderGoods,
  });
};

const postGoods = (data) => {
  fetchRequest(`${URL}api/goods`, {
    method: 'POST',
    body: data,
    callback: renderNewGoods,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const deleteGoods = (id) => {
  fetchRequest(`${URL}api/goods/${id}`, {
    method: 'DELETE',
    callback: renderAfterDelete,
    headers: {
      'Content-Type': 'application/json',
    },
  }, id);
};

const getTableTotal = () => {
  fetchRequest(`${URL}api/total`, {
    method: 'GET',
    callback: renderTableTotal,
  });
};

export {getGoods, postGoods, deleteGoods, getTableTotal};
