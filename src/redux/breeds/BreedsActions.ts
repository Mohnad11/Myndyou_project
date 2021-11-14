import {Dispatch, AnyAction} from 'redux';
import IBreed from "../../types/IBreed";


export type saveBreeds = (breeds: IBreed[]) => AnyAction;
export function saveBreeds(breeds: IBreed[]) {
    return  (dispatch: Dispatch) => {
        return dispatch({
            type: 'SAVE_BREEDS',
            breeds,
        });
    };
}

export type setSelectedBreeds = (breed: IBreed) => AnyAction;
export function setSelectedBreeds(breed: IBreed) {
    return  (dispatch: Dispatch) => {
        return dispatch({
            type: 'SET_SELECTED_BREED',
            breed,
        });
    };
}
