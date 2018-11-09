const getHeaders = async () => {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };
    return headers;
};

const baseURL = window.location.protocol + '//' + window.location.host;

const get = async (uri, params) => {
    let url = new URL(`${baseURL}${uri}`);
    if (params !== undefined) {
        Object.keys(params).forEach((key) => {
            if (params[key]) url.searchParams.append(key, params[key]);
        });
    }
    const init = {
        headers: await getHeaders(),
    };
    const response = await fetch(url, init);
    return response;
};

export default get;
