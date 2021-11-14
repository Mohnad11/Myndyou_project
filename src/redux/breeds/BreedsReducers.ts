import IBreedState from "../../types/IBreedState";

const BreedsReducers = {
    SAVE_BREEDS: saveBreeds,
    SET_SELECTED_BREED: setSelectedBreeds
};
function saveBreeds(state: IBreedState, action: any) {
    return {...state, ...{breeds: action.breeds}};
}
function setSelectedBreeds(state: IBreedState, action: any) {
    return {...state, ...{selected: action.breed}};
}
export default BreedsReducers;
