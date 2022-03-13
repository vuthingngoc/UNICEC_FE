/* eslint-disable no-unused-vars */
import axios from 'axios';
import getOptions from 'utils/services.ultils';
// import { getOptionsForImgur } from 'utils/services.ultils';

const backendUrl = process.env.REACT_APP_FRONTEND_URL;

export async function getDataByPath(path, accessToken, data) {
  try {
    let endpoint = `${backendUrl}`;
    let option = {};
    if (accessToken && accessToken !== '') option = getOptions(accessToken);
    if (path !== '') {
      endpoint = `${backendUrl}/${path}`;
    }
    if (data !== '') {
      endpoint = `${backendUrl}/${path}?${data}`;
    }
    const res = await axios.get(endpoint, option);
    return res;
  } catch (error) {
    return error.response;
  }
}

export async function updateDataByPath(path, data) {
  try {
    let endpoint = `${backendUrl}`;
    let body = {};
    if (path !== '') {
      endpoint = `${backendUrl}/${path}`;
    }
    if (data !== '') {
      body = data;
    }
    const res = await axios.put(endpoint, body);
    return res;
  } catch (error) {
    return error.response;
  }
}

export async function deleteDataByPath(path) {
  try {
    let endpoint = `${backendUrl}`;
    if (path !== '') {
      endpoint = `${backendUrl}/${path}`;
    }
    const res = await axios.delete(endpoint);
    return res;
  } catch (error) {
    return error.response;
  }
}

export async function createDataByPath(path, data) {
  try {
    let endpoint = `${backendUrl}`;
    let body = {};
    if (path !== '') {
      endpoint = `${backendUrl}/${path}`;
    }
    if (data !== '') {
      body = data;
    }
    const res = await axios.post(endpoint, body);
    return res;
  } catch (error) {
    return error.response;
  }
}

//#region CRUD endpoint use Promise

export function getItems(url) {
  return new Promise(function (resolve) {
    let endpoint = `${backendUrl}/${url}`;
    axios
      .get(endpoint)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        resolve(err);
      });
  });
}

export function getItem(url, id) {
  return new Promise(function (resolve) {
    let endpoint = `${backendUrl}/${url}/${id}`;
    axios
      .get(endpoint)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        resolve(err);
      });
  });
}

export function addItem(url, data) {
  return new Promise(function (resolve) {
    let endpoint = `${backendUrl}/${url}`;
    let dataPost = data;
    axios
      .post(endpoint, dataPost)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        resolve(err);
      });
  });
}

export function updateItem(url, id, data) {
  // update item thì data post không chứa id, id sẽ ở trên endpoint
  return new Promise(function (resolve) {
    let endpoint = `${backendUrl}/${url}/${id}`;
    let dataPost = data;
    axios
      .put(endpoint, dataPost)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        resolve(err);
      });
  });
}

export function deleteItem(url, id) {
  return new Promise(function (resolve) {
    let endpoint = `${backendUrl}/${url}/${id}`;
    axios
      .delete(endpoint)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        resolve(err);
      });
  });
}

export function convertImageToBase64(file) {
  return new Promise((resolve) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result !== null) {
        resolve(reader.result);
      }
    };
  });
}

export async function uploadImgToImgur(image) {
  try {
    const key = 'a7c0eac2517f5a94054e3ef257acf02b';
    let endpoint = 'https://api.imgbb.com/1/upload';
    const bodyFormData = new FormData();
    bodyFormData.append('key', key);
    bodyFormData.append('image', image);
    const res = await axios.post(endpoint, bodyFormData);
    return res;
  } catch (error) {
    return error.response;
  }
}

//#endregion
