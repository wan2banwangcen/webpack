import React, { Component } from 'react';

class index extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.list.map((item,index)=>{
                        return (
                            <li key={item.text}>
                                <img src={item.img} alt=""/>
                                <span>{item.text}</span>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default index;
