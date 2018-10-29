import actionsType from "./actionsType";
import axios from "axios";
import {fromJS} from "immutable"

const changeList = (data=[]) => ({
    type: actionsType.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10),
})

export const navSearchFocus = () => ({
    type: actionsType.NAV_SEARCH_FOCUS
});

export const navSearchBlur = () => ({
    type: actionsType.NAV_SEARCH_BLUR
});

export const mouseEnter = () => ({
    type: actionsType.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: actionsType.MOUSE_LEAVE
});

export const changePage = (page) => ({
    type: actionsType.CHANGE_PAGE,
    page
})

export const getList = () => {
    return (dispatch) => {
        axios.get("/api/headerList.json").then((res) => {
            console.log(res.data)
            const data = res.data.success? res.data.data: []
            const action = changeList(data)
            dispatch(action)
        }).catch(() => {
            console.log("err")
        })
        
    }
}