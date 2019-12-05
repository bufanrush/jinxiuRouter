import React, { Component } from 'react';
import {Link,Redirect} from "react-router-dom";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {cid:123,title:'JS1'},
                {cid:456,title:'JS2'},
                {cid:789,title:'JS3'}
            ]
         }
        //  第二种:编程式重定向
         this.props.history.push("/home/")
    }
    render() { 
        return ( 
            <div>
                {/* 第一种: 标签式重定向 */}
                {/* <Redirect to="/home/" /> */}
                <h2>JS</h2>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                            <li key={index}>
                                <Link to={'/list/'+item.cid}>{item.title}
                                </Link>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>

         );
    }
}
 
export default Index;