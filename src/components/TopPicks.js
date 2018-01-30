import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

//création de la page html de topPicks

const TopPicks = ({ topPicks }) => (
  <div>
    <h1>TopPicks</h1>
    <div className='album py-5 bg-light'>
      <div className='container'>
        <div className='row'>

          {topPicks.map((movie) => (
            <div className='col-md-4' key={movie.title}>
              <div className='card mb-4 box-shadow'>
                <img className='card-img-top' src='http://robonwriting.com/wp-content/uploads/2013/03/film-reel.jpg' data-holder-rendered='true' />
                <div className='card-body'>
                  <h3>{movie.title}</h3>
                  <p className='card-text'>{movie.description}</p>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='btn-group'>
                      <Link to='/video'>Cliquer pour voir la vidéo</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = ({ topPicks }) => ({
  topPicks,
});

export default withRouter(connect(mapStateToProps)(TopPicks));
