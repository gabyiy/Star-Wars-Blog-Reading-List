const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			character: [],
			vehicle: [],
			planet: [],
			favorites: [],
			people: null,
			urlApi: "https://www.swapi.tech/api"
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch("https://swapi.dev/api/people/")
					.then(res => res.json())
					.then(data => setStore({ character: data.results }))
					.catch(err => console.error(err));

				fetch("https://swapi.dev/api/vehicles/")
					.then(res => res.json())
					.then(data => setStore({ vehicle: data.results }))
					.catch(err => console.error(err));

				fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planet: data.results }))
					.catch(err => console.error(err));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFavorite: newItem => {
				let storeCopy = getStore();
				let newFavorites = storeCopy.favorites.concat(newItem);
				setStore({ favorites: newFavorites });
			},
			quitFavorite: element => {
				let storeCopy = getStore();
				let quitFavorite = storeCopy.favorites.filter((item, index) => {
					return item !== element;
				});
				setStore({ favorites: quitFavorite });
			},
			getCharacter: id => {
				const store = getStore();
				fetch(`${store.urlApi}/people/${id}`, {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				})
					.then(response => {
						if (response.ok) {
							return response.json();
						} else {
							setStore({ error: "No se pudo obtener el personaje" });
						}
					})
					.then(data => !!data && setStore({ people: data.result.properties }));
			}
		}
	};
};

export default getState;
