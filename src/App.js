import RouterIndex from './router/index.jsx'
import MainHeader from './view/main-header.jsx'
import MainFooter from './view/main-footer.jsx'
import './view/index.less'
import React, {
  Component
} from 'react'
class App extends Component {
  render() {
    return(
      <div className="pageWrap">
        <MainHeader />
        <div className="main">
          <RouterIndex/>
        </div>
        <MainFooter />
      </div>
    )
  }
}


export default App;