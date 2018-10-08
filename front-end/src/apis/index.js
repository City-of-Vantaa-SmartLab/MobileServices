const getHeaders = async () => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return headers;
};

const baseURL = window.location.protocol + '//' + window.location.host;

const get = async(uri) => {
    const init = {
      headers: await getHeaders(),
    };
    const response = await fetch(`${baseURL}${uri}`, init);
    return response;
};

export default get;
