import React from "react";
import {connect} from "react-redux";
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addtion, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from "./style";
import {navSearchFocus, navSearchBlur, getList, mouseEnter, mouseLeave, changePage} from "../../store/ActionCreator";
import classnames from "classnames";


class Header extends React.Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登陆</NavItem>
                    <NavItem className="right">Aa</NavItem>
                    <SearchWrapper>
                        <NavSearch
                            onFocus={() => this.props.handleInputFocus(this.props.list)}
                            onBlur={this.props.handleInputBlur}
                            className={classnames({"red": this.props.focus})}
                        ></NavSearch>
                        <i className="iconfont">&#xe601;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </ Nav>
                <Addtion>
                    <Button className="writting">
                        <i className="iconfont">&#xe601;</i>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addtion>
            </HeaderWrapper>
        )
    }

    getListArea = () => {
        const {focus,list,page,mouseIn,totalPage,handleMouseEnter,handelMouseLeave,handleChangePage} = this.props;
        const jsList = list.toJS();
        const pageList = []
        for (let i = (page -1)*10; i < Math.min(page * 10, jsList.length); i++) {
            console.log(jsList[i])
            pageList.push(<SearchInfoItem key={i}>{jsList[i]}</SearchInfoItem>)
        }
        return (
            (focus || mouseIn)?
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handelMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>换一换</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
                :
                null
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focus: state.getIn(["header", "focus"]),
        list:  state.getIn(["header", "list"]),
        page:  state.getIn(["header", "page"]),
        totalPage:  state.getIn(["header", "totalPage"]),
        mouseIn:  state.getIn(["header", "mouseIn"])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            dispatch(navSearchFocus());
            list.size === 0 && dispatch(getList())
        },

        handleInputBlur() {
            const action = navSearchBlur();
            dispatch(action);
        },

        handleMouseEnter() {
            const action = mouseEnter();
            dispatch(action);
        },

        handelMouseLeave() {
            const action = mouseLeave();
            dispatch(action);
        },

        handleChangePage(page, totalPage) {
            if(page < totalPage) {
                dispatch(changePage(page+1));
            }else {
                dispatch(changePage(1));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);