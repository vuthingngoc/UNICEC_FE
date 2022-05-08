import axios from 'axios';
import getOptions from 'utils/services.ultils';
// import getOptions from 'utils/services.ultils';

const backendUrl = 'http://14.225.254.134';

export async function loginByPath(path, accessToken) {
  try {
    let endpoint = `${backendUrl}`;
    let option = {};
    if (path !== '') {
      endpoint = `${backendUrl}/${path}`;
    }
    if (accessToken !== '') {
      option = getOptions(accessToken);
    }
    const res = await axios.post(endpoint, {}, option);
    console.log(res);

    return res;
  } catch (error) {
    return error.response;
  }
}
