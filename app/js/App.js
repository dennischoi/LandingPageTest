'use strict';

import React              from 'react';

import CurrentUserActions from './actions/CurrentUserActions';
import CurrentUserStore   from './stores/CurrentUserStore';
import Header from './components/Header';
import Landing from './components/Landing';
import Clients from './components/Clients';
import Extra from './components/Extra';

import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

const propTypes = {
  params: React.PropTypes.object,
  query: React.PropTypes.object,
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object
  ])
};

class App extends React.Component {

  constructor(props) {
    super(props);

    this.onUserChange = this.onUserChange.bind(this);

    this.state = {
      currentUser: {}
    };
  }

  onUserChange(err, user) {
    if ( err ) {
      this.setState({ error: err });
    } else {
      this.setState({ currentUser: user || {}, error: null });
    }
  }

  componentWillMount() {
    console.log('About to mount App');
  }

  componentDidMount() {
    this.unsubscribe = CurrentUserStore.listen(this.onUserChange);
    CurrentUserActions.checkLoginStatus();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  renderChildren() {
    return React.cloneElement(this.props.children, {
      params: this.props.params,
      query: this.props.query,
      currentUser: this.state.currentUser
    });
  }

  render() {
    return (
      <section className="landing__main">
        <Header />
        <Landing />

        <Clients />

        <Extra />

        <Testimonial />

        {/* {this.renderChildren()} */}
        <Footer />

      </section>
    );
  }

}

App.propTypes = propTypes;

export default App;
