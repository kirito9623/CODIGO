const URL_BASE = "https://60c17d174f7e880017dbfae8.mockapi.io";

const getCategorias = () => {
  axios.get(`${URL_BASE}/categorias`).then((rpta) => {
    console.log(rpta);
    console.log(rpta.data);
  })
  .catch((error) => {
      console.log(error);
  });

};
