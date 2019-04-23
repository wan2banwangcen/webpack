import React, { Component } from 'react';
import './index.less';
//import { NavBar, Icon } from 'antd-mobile';

class Header extends Component {
    render() {  
        return (
            <div className="header">
                <img src ={require("../../assets/images/logo.png")} alt=""/>
                <button>快速定制</button>
                <i className="iconfont icon-caidan"></i>
            </div>
        );
    }
}

export default Header;
