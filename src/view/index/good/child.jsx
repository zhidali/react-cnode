import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ChildGood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.content ? this.props.content : []
    }
  }
  deleteItem (ind) {
    this.props.delete(ind)
  }
  // return false的时候组件会一直不跟新
  // nextProps:变化后的属性;
  // nextState:变化后的状态;
  shouldComponentUpdate (nextProps, nextState) {
    if (this.state.list.toString() !== nextProps.content.toString()) {
      return true
    } else {
      return false
    } 
  }
  // 父组件 render执行 切传递过来props 会执行这个函数
  componentWillReceiveProps (nextProps) {
    const { list } = this.state
    const newdata = nextProps.content.toString()
    // 新数据与老数据不一样时更新state
    if (list.toString() !== newdata) {
      this.setState({
        list: nextProps.content
      });
    }
  }

  render () {
    console.log('child')
    return (
      <ul>
        {
          this.state.list.map((item, index) => {
            return (
              <li key={index + 1}>
                {item}
                <span onClick={() => this.deleteItem(index)}>
                  删除
                </span>
              </li>
            )
          })
        }
      </ul>
    );
  }
}
// props 传参类型 isRequired必传
ChildGood.propTypes = {
  content: PropTypes.array.isRequired
}
// props 默认值
ChildGood.defaultProps = {
  content: ['德拉科']
}
export default ChildGood;

