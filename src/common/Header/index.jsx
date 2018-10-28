import React from "react";
import {connect} from "react-redux";
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addtion, Button, SearchWrapper } from "./style";
import {navSearchFocus, navSearchBlur} from "../../store/ActionCreator";
import classnames from "classnames";

const Header = (props) => {
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
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                            className={classnames({"red": props.focus})}
                        ></NavSearch>
                        <i className="iconfont">&#xe601;</i>
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

const mapStateToProps = (state) => {
    return {
        focus: state.focus,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = navSearchFocus();
           dispatch(action);
        },

        handleInputBlur() {
            const action = navSearchBlur();
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);