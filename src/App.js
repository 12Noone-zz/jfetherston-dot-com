import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Menu from '../src/components/Menu';
import Viewer from '../src/components/Viewer';
import Project from '../src/components/Project';
import '../src/stylesheets/core.less';
import '../src/stylesheets/Menu.less';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewerOpen: false,
      viewerOptions: {}
    }
    this.showViewer = this.showViewer.bind(this);
    this.hideViewer = this.hideViewer.bind(this);
  }

  showViewer(link, data) {
    _.find(data, (idx) => {
      if (idx.key === link) {
        this.setState({
          viewerOptions: idx,
          viewerOpen: true
        });
      }
    });
  }

  hideViewer() {
    this.setState({ viewerOpen: false })
  }

  render() {
    const { viewerOptions, viewerOpen } = this.state;

    return (
      <div>
        <Menu showViewer={this.showViewer} hideViewer={this.hideViewer} />
        <Viewer show={viewerOpen} handleClose={this.hideViewer} viewerOptions={viewerOptions} />
        <Project showViewer={this.showViewer} handleClose={this.hideViewer} />
      </div>
    );
  }
}

App.propTypes = {
  showViewer: PropTypes.func,
  hideViewer: PropTypes.func
}

const container = document.createElement('div');
document.body.appendChild(container);
export default App;
