export const charactersLoadingSelector = (state) => state.characters.loadingAll;
export const charactersSelector = (state) => state.characters.entities;
export const charactersErrorSelector = (state) => state.characters.error;

export const characterByIdSelector = (state, characterId) => {
	console.log(state.characters);
	return state.characters.entities.find(c => c.id === characterId);
};
export const characterLoadingSelector = (state) => state.characters.loadingOne;
