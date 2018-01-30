import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

//création de la page html de lastChance

const LastChance = ({ lastChance }) => (
  <div>
    <h1>LastChance</h1>
    <div className='album py-5 bg-light'>
      <div className='container'>
        <div className='row'>

          {lastChance.map((movie) => (
            <div className='col-md-4' key={movie.title}>
              <div className='card mb-4 box-shadow'>
                <img className='card-img-top' src='https://buidln.clipdealer.com/000/558/280//previews/11--558280-Film%20Strip%20D03c.jpg' data-holder-rendered='true' />
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

const mapStateToProps = ({ lastChance }) => ({
  lastChance,
});

export default withRouter(connect(mapStateToProps)(LastChance));
