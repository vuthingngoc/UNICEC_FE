import axios from 'axios';
import getOptions from 'utils/services.ultils';
const backendUrl = 'https://14.225.254.134';

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

export async function createDataByPath(path, accessToken, data) {
  try {
    let endpoint = `${backendUrl}`;
    let body = {};
    let option = {};
    if (accessToken && accessToken !== '') option = getOptions(accessToken);
    if (path !== '') {
      endpoint = `${backendUrl}/${path}`;
    }
    if (data !== '') {
      body = data;
    }
    const res = await axios.post(endpoint, body, option);
    return res;
  } catch (error) {
    return error.response;
  }
}
