const { HttpRequest } = require('../../helpers/http-request');
const { apiConfig } = require('../../configs/api');
const { API } = require('../../constants');
const {
  ApiStatusCodes,
  HTTPStatusCodes,
} = require('../../constants');
const { parseCatAttributes } = require('../../utils/cats/attr-util');
const { logger } = require('../../utils/logger');

const getCatById = async (params) => {
  const {
    id,
  } = params;

  const res = {
    httpStatus: HTTPStatusCodes.OK,
    apiStatus: ApiStatusCodes.SUCCESS,
    message: 'success',
    data: {},
  };

  const { response, error } = await new HttpRequest()
    .setBaseUrl(apiConfig.baseUrl)
    .setPath(`${API.BY_ID}/${id}`)
    .setLogger(logger)
    .get();

  if (error) {
    res.httpStatus = HTTPStatusCodes.OK;
    res.apiStatus = ApiStatusCodes.FAILED;
    res.message = 'Cat not found';

    return res;
  }

  if (!response) {
    return res;
  }

  let result = {
    id: response.id,
    url: response.url,
    width: response.width,
    height: response.height,
  };

  const breeds = response.breeds ?? [];
  const breed = (breeds.length >= 1) ? breeds[0] : {};

  const parsedResponse = parseCatAttributes(breed);

  result = {
    ...result,
    breedId: breed.id,
    breedName: breed.name,
    breedDescription: breed.description,
    ...parsedResponse,
  };

  res.data.cat = result;
  return res;
};

module.exports = {
  getCatById,
};
