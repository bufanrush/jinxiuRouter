import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <h2>Home组件-Redirect:一进入到某个页面就跳到想要跳到的其他页面(在react中一切皆组件,页面也是组件)</h2> );
    }
}
 
export default Home;