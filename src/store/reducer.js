import NAV_SEARCH_BLUR from "./actionsType";
import actionsType from "./actionsType";
const defaultState = {
    focus: false
};

export default (state = defaultState, action)=> {
    console.log(1);
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type ){
        case actionsType.NAV_SEARCH_FOCUS:
            newState.focus = true;
            break;
        case actionsType.NAV_SEARCH_BLUR:
            newState.focus = false;
            break;
        default:
            break;
    }
    return newState;
}