import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
    // color: #fff;
`;

export const Logo = styled.a.attrs({
    href: "/"
})`
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 56px;
    display: inline-block;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    padding-right: 70px;
    box-sizing: border-box;
    height: 100%;
    margin: 0 auto;
    line-height: 56px;
`;

export const NavItem = styled.div`
    padding: 0 15px;

    font-size: 16px;
    color: #333;
    line-height: 56px;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: "搜索"
})`
    line-height: 56px;
    width: 160px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 20px;
    background: #eee;
    font-size: 14px;
    vertical-align: middle;
    color: #fff;
    box-sizing: border-box;
    padding: 0 20px;
    &::placeholder {
        color: #999;
    }
`;

export const Addtion = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    margin-top: 10px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 40px;
    border-radius: 20px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`;

export const SearchWrapper = styled.div`
    float: left;
    /* background: red; */
    position: relative;
    .iconfont {
        position: absolute;
        width: 30px;
        text-align: center;
        height: 30px;
        line-height: 30px;
        border-radius:15px;
        right: 10px;
        bottom: 10px;
        /* background: green; */
    }
`