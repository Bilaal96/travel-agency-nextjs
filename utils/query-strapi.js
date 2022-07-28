import { STRAPI_GQL_URL } from '../constants';

/**
 * A custom fetch function, configured to query Strapi's GraphQL API.
 * Compatible with useSWR hook.
 * @param { string } resource - the request URL
 * @param { string } gqlQuery - a GraphQL query used to fetch data from Strapi
 */
export const queryStrapi = async (gqlQuery) => {
  const fetchOptions = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    // GraphQL query passed as POST body
    body: JSON.stringify({ query: gqlQuery }),
  };

  const response = await fetch(STRAPI_GQL_URL, fetchOptions);

  // Handle error - NOT 2XX response
  if (!response.ok) {
    const error = new Error('An error occurred while fetching the data');

    // Additional info
    error.info = await response.json();
    error.status = response.status;

    throw error;
  }

  // Handle success - 2XX response
  const result = await response.json();
  return result.data;
};
