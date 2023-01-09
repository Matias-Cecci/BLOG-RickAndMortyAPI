const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: {},
			locations: {},
			episodes: {},
			favorites: [],
		},
		actions: {
			getCharacters: async (url) => {
				const response = await fetch(url)
				const data = await response.json();
				setStore({characters: data});
			},
			getLocations: async (url) => {
				const response = await fetch(url)
				const data = await response.json()
				setStore({locations: data})
			},
			getEpisodes: async (url) => {
				const response = await fetch(url)
				const data = await response.json()
				setStore({episodes: data})
			},
			setFavorites: (item ) => {
				const store = getStore();
				if(!store.favorites.includes(item)){
				setStore({favorites: [...store.favorites, item ]})
				}else {
					setStore({favorites: store.favorites.filter((favItem) => favItem !== item)})
				}
			}			
		}
	};
};

export default getState;
