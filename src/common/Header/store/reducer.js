import actionsType from "../../../store/actionsType";
import { fromJS } from 'immutable';
const defaultState = fromJS({
    focus: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1,
});

export default (state = defaultState, action)=> {
    switch (action.type ){
        case actionsType.NAV_SEARCH_FOCUS:
            return state.set("focus", true);
        case actionsType.NAV_SEARCH_BLUR:
        //immutable对象的set方法  会结合之前的immutable对象的值 和设置的值返回一个全新的对象
            return state.set("focus", false);
        case actionsType.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage,
            });
        case actionsType.MOUSE_ENTER:
            return state.set("mouseIn", true);
        case actionsType.MOUSE_LEAVE:
            return state.set("mouseIn", false);
        case actionsType.CHANGE_PAGE:
            return state.set("page", action.page);
        default:
            return state;
    }
}