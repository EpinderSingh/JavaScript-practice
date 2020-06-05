function getPlanet() {
  return axios.get('https://swapi.dev/api/planets/');
}

getPlanet().then((res) => {
  console.log(res.data);
});
