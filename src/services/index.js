import API_URL from "../constants/constants";

const LIMIT = 10;

const initialAPICall = async (offset) => {
  console.log({ offset });
  try {
    const response = await fetch(`${API_URL}?offset=${offset}&limit=${LIMIT}`, {
      method: "GET",
      headers: {
        protocol: "https"
      }
    });

    const { results } = await response.json();
    return results;
  } catch (error) {
    alert("Can't connect to backend try latter", error);
  }
};

export default initialAPICall;
