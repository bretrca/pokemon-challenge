import API_URL from "../../src/constants";

const initialAPICall = async () => {
  fetch(`${API_URL}`, {
    method: "GET",
    headers: {
      protocol: "https"
    }
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        console.log(res);
      }
    })
    .catch(function () {
      alert("Can't connect to backend try latter");
    });
};

export default initialAPICall;
