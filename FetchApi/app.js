// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function() {
// 	console.log('FIRST REQUEST WORKED!!!');
// 	const data = JSON.parse(this.responseText);
// 	const filmURL = data.results[0].films[0];
// 	const filmReq = new XMLHttpRequest();
// 	filmReq.addEventListener('load', function() {
// 		console.log('SECOND REQUEST WORKED!!!');
// 		const filmData = JSON.parse(this.responseText);
// 		console.log(filmData.title);
// 	});
// 	filmReq.addEventListener('error', function(e) {
// 		console.log('ERROR!!', e);
// 	});
// 	filmReq.open('GET', filmURL);
// 	filmReq.send();
// });
// firstReq.addEventListener('error', (e) => {
// 	console.log('ERROR!!!!!!');
// });
// firstReq.open('GET', 'https://swapi.co/api/planets/');
// firstReq.send();
// console.log('Request Sent!');

// fetch('https://swapi.co/api/planetsuy21/')
// 	.then((response) => {
// 		if (!response.ok)
// 			throw new Error(`Status Code Error: ${response.status}`);

// 		response.json().then((data) => {
// 			for (let planet of data.results) {
// 				console.log(planet.name);
// 			}
// 		});
// 	})
// 	.catch((err) => {
// 		console.log('SOMETHING WENT WRONG WITH FETCH!');
// 		console.log(err);
// 	});

// fetch('https://swapi.dev/api/planets/').then((res) => {
//   res.json().then((data) => {
//     console.log(data);
//   });
// });

// ********************************
// USING FETCH
// ********************************

// const checkStatusAndParse = (response) => {
//   if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

//   return response.json();
// };

// const printPlanets = (data) => {
//   console.log('Loaded 10 more planets...');
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
//   return Promise.resolve(data.next);
// };

// const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
//   return fetch(url);
// };

// fetchNextPlanets()
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .catch((err) => {
//     console.log('SOMETHING WENT WRONG WITH FETCH!');
//     console.log(err);
//   });

// ********************************
// CHAINING REQUESTS USING AXIOS
// ********************************
const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
  console.log(url);
  return axios.get(url);
};
const printPlanets = ({ data }) => {
  console.log(data);
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next);
};

fetchNextPlanets()
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .catch((err) => {
    console.log('ERROR!!', err);
  });
