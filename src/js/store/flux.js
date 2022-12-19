const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			favourites: [],
			detailsInfo: {}
		},
		actions: {
			getCharacters: async () => {
				const response = await fetch('https://rickandmortyapi.com/api/character')
				const data = await response.json()
				setStore({characters: data.results})
			}
		}
	};
};

export default getState;
