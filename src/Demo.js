import React, { Component } from 'react';

export default class Demo extends Component{
    constructor(props){
        super(props)
        this.state={
            time : new Date()
        }
        this.timeId = setInterval(()=>this.tick(),1000)
    }

    tick(){
        this.setState({
            time : new Date()
        })
    }

    static getDerivedStateFromProps(nextProps,prevState){
        //函數返回結果將被加到state增加/更新state內容
        //null state不需要任何改變
        console.log('靜態生命週期函數')
        return null
    }
    getSnapshotBeforeUpdate(){
        console.log('更新前獲取快照')
        return "from update"
    }
    render(){
        console.log('render',this.state)
        return (
            <div>
                <p>Demo</p>
                {this.state.time.getSeconds()}
            </div>
        )
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true
    }
    componentDidUpdate(prevProps,prevState,info){
        console.log('componentDidUpdate')
        console.log(info)
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
        clearInterval(this.timeId)
    }
}