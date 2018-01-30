import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

//création de la page html de newRelease

const NewReleases = ({ newReleases }) => (
  <div>
    <h1>NewReleases</h1>
    <div className='album py-5 bg-light'>
      <div className='container'>
        <div className='row'>

          {newReleases.map((movie) => (
            <div className='col-md-4' key={movie.title}>
              <div className='card mb-4 box-shadow'>
                <img className='card-img-top' src='https://openclipart.org/image/2400px/svg_to_png/177053/Film-03.png' data-holder-rendered='true'/>
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

const mapStateToProps = ({ newReleases }) => ({
  newReleases,
});

export default withRouter(connect(mapStateToProps)(NewReleases));
