import React, { Component, Fragment } from 'react';
import { message } from 'antd'
// dangerouslySetInnerHTML
// lable for htmlFor
import ChildGood from './child'
class Good extends Component {
  constructor(props) {
    // console.log('constructor----------------------------')
    super(props) // 调用父类的构造函数
    this.state = {
      inputValue: '',
      list: ['头部按摩', '精油推背']
    }
  }
  inpChange (e) {
    this.setState({ inputValue: this.refs.inp.value });
  }
  addList () {
    if (this.state.inputValue === '') {
      message.info('请填写');
    } else {
      // this.setState 异步的若想取到后面的参数 需要回调一下
      this.setState(
        { list: [...this.state.list, this.state.inputValue] },
        () => {
          console.log(this.state.list.length)
        }
      );
    }
  }
  delete (ind) {
    console.log(ind)
  }
  // 组件将要挂载到页面的时刻执行
  componentWillMount () {
    // console.log('componentWillMount----------------------------')
  }
  // 组件挂载完成的时刻执行
  componentDidMount () {
    // console.log('componentDidMount----------------------------')
  }
  // 组件更新之前
  componentWillUpdate () {
  }
  // state 数据更新  组件更新之后执行
  componentDidUpdate () {
    // console.log('componentDidUpdate----------------------------')
  }
  // props 更新
  componentWillReceiveProps () {
    console.log('componentWillReceiveProps----------------------------')
  }
  // 是否应该更新组件
  shouldComponentUpdate () {
    return true
  }
  // 当组件从页面中删除的时候执行
  componentWillUnmount () {
  }
  // 开始挂载渲染
  render () {
    // console.log('render----------------------------')
    return (
      <Fragment>
        <div>
          {/* <input type="text" value={this.state.inputValue} onChange={this.inpChange.bind(this)} /> */}
          <input type="text" value={this.state.inputValue} onChange={this.inpChange.bind(this)} ref="inp" />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ChildGood content={this.state.list} delete={this.delete} ref="child" />
      </Fragment>
    )
  }
}
export default Good;


