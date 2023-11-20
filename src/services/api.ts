import { httpClient } from ".";

export const getCards = async () => {
  return await httpClient
    .get("v2/cards")
    .then((response) => {
      return response.data.data;
    })
    .catch(() => {
      return null;
    });
};
