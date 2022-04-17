const fetchAttributes = async (url, setData) => {
  fetch(`${url}`, { method: "GET" })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((res) => {
      return setData(res);
    });
};

export default fetchAttributes;
