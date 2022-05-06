const axios = require('axios');

const baseUrl = 'https://api.shrtco.de/v2/';
const shortenUrl = 'shorten?';
const params = 'url=';
const api = baseUrl + shortenUrl + params;

type errAlias = React.Dispatch<React.SetStateAction<boolean>>;
type errMsgAlias = React.Dispatch<React.SetStateAction<string>>;

async function shortenData(link: string, setError: errAlias, setErrorMsg: errMsgAlias) {
  try {
    const toShorten = api + link;
    const response = await axios({
      method: 'get',
      url: toShorten,
      responseType: 'json'
    });
    const shortLink = await response.data.result['full_short_link'];
    return shortLink;
  } catch (err) {
    const error: { message: string } = err as any;
    const shortenlink = { error: err };
    setError(true);
    setErrorMsg(error.message);
    return shortenlink;
  }
}

export default shortenData;
