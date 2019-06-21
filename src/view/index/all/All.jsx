import React, { Component, Fragment } from 'react';
import data from '../data'
import { List, Avatar } from 'antd'
import { Link } from 'react-router-dom'
class All extends Component {
  render() {
    return ( 
      <List loading={false} dataSource={data.data} renderItem={item => (
        <List.Item actions={[<span>回复</span>,<span>访问</span>]}>
          <List.Item.Meta avatar={<Avatar src={item.author.avatar_url} />}
            title={
            <Link to={"/details/" + item.id}>{item.title}</Link>
            }
            description={
              <Fragment>
                <p>
                  <Link to={"/user/" + item.author.loginname}>
                    {item.author.loginname}
                  </Link>
                </p>
                <p>
                  发表于：{item.create_at.split('T')[0]}
                </p>
              </Fragment>
            }
          />
        </List.Item>
      )}>
      </List>
     );
  }
}
 
export default All;