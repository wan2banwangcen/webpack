import React, { Component } from 'react';
import './index.less';
class Banner extends Component {
    constructor(){
        super();
        this.state={
            inputValue:''
        }
    }
    handleSearch =()=>{
        //受控组件
        console.log(this.state.inputValue);
        // axios.get('?data='+this.inp.value).then()
    }
    handleChange =(e)=>{
        this.setState({
            inputValue:e.target.value
        })
    }
    render() {
        return (
            <div className="banner">
                 <p className="tit1">悠游古欧洲   遍览德法瑞意</p>
                 <p className="tit2">全程升级热早+1晚5星酒店</p>
                <div className="search"> 
                    <label>
                       <i className="iconfont icon-icon_position"></i>
                       <span>目的地</span>
                       
                    </label>
                    <div>
                        <input onChange={this.handleChange} value={this.state.inputValue} ref={(inp)=>this.inp = inp} type="text" placeholder="日本 美国 英国 地中海"/>
                    </div>
                    <button onClick={this.handleSearch}>
                        <i className="iconfont icon-sousuo"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default Banner;
