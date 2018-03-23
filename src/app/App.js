import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import PageContent from './components/PageContent'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <PageContent>
          <Footer />
        </PageContent>
      </React.Fragment>
    );
  }
}

export default App;
