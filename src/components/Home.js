import React from 'react';
import LinkHome from './LinkHome';
import Ranking from './Ranking';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//Reprise des sous-liens dans le lien home 

const Home = ({ userConnect }) => (
  <div>
    <LinkHome />
    <Ranking />
  </div>
);

const mapStateToProps = ({ userConnect }) => ({
  userConnect,
});

export default withRouter(connect(mapStateToProps)(Home));
