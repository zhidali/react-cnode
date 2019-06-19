import React, { Component } from 'react'
import {Layout} from 'antd'
import './footer.less'
class MainFooter extends Component {
  state = {  }
  render() { 
    return ( <Layout.Footer style={{
      textAlign:"center"
    }}>
      di部
    </Layout.Footer> );
  }
}

export default MainFooter;