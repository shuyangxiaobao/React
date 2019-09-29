import React from 'react';

/*******************************************   demo1         **********************************/

class APP extends React.Component {
    render() {
        return (
            <div>
                <button onClick={activateLasers}>
                    激活按钮
                </button>

                <a href="#" onClick={handleClick}>
                    点我
                </a>
            </div>

        );
    }
}

function activateLasers() {
    alert('2');
}

function handleClick(e) {
    e.preventDefault();
    console.log('链接被点击');
}

/*******************************************   demo2         **********************************/

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
          this.thrreeclick = this.thrreeclick.bind(this);
    }


    // 最好用这种方式
    handleClick = () => {
        this.setState({
            isToggleOn: !this.state.isToggleOn
        })
    }

    buttonclick() {
        this.setState({
            isToggleOn: !this.state.isToggleOn
        })
    }

    thrreeclick() {
        this.setState({
            isToggleOn: !this.state.isToggleOn
        })
    }

    render() {
        return (
            <button
                onClick={this.handleClick}
                // onClick={(e) => this.buttonclick(e)}
                // onClick={this.thrreeclick}

            >
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

/*******************************************   demo3         **********************************/

class Popper extends React.Component{
    constructor(){
        super();
        this.state = {name:'Hello world!'};
    }
    
    preventPop(name, e){    //事件对象e要放在最后
        e.preventDefault();
        alert(name);
    }
    
    render(){
        return (
            <div>
                <p>hello</p>
                {/* 通过 bind() 方法传递参数。 */}
                <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
               <br/>
                <a href="https://baidu.com" onClick={(e)=>this.preventPop(this.state.name,e)}>百度</a>

           
            </div>
        );
    }
}


// export default APP;
// export default Toggle;
export default Popper;


