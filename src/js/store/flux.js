const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			locations: [],
			favorites: [],
			detailsInfo: {}
		},
		actions: {
			getCharacters: async () => {
				const response = await fetch('https://rickandmortyapi.com/api/character')
				const data = await response.json();
				setStore({characters: data.results});
			},
			getLocations: async () => {
				const response = await fetch('https://rickandmortyapi.com/api/location')
				const data = await response.json()
				setStore({locations: data.results})
			},
			setFavorites: (item ) => {
				const store = getStore();
				setStore({favorites: [...store.favorites, {item} ]})
			},
			removeFavorites: (id) =>{
				let value = document.getElementById(id).title;
				const store = getStore();
				setStore({ favorites: store.favorites.filter(fav => fav.item !== value) });
			}
		}
	};
};

export default getState;
