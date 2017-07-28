import React from 'react';
import {Col, Thumbnail} from 'react-bootstrap';
import '../App.css';
import {Link} from 'react-router-dom';

class Wine extends React.Component {
	render() {
		const wine = this.props.wine;
		return(
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="well">
            <Link to={`/wines/${wine.id}`}>
              <div className="media-left">
                <img className="media-object" src={wine.img_url}/>
              </div>
              <div className="media-body">
                <h2 className="media-heading">{wine.name}</h2>
                <h3>Vineyard: <h4>{wine.vineyard}</h4></h3>
                <div className="text-right">
                  <h3>Region: </h3><h4>{wine.region}</h4>
                </div>

								<div className="text-right">
                  <img className="media-object" src={wine.background}/>
                </div>

                <h3>Year:  <h5>{wine.vintage}</h5></h3>
                <h3>Rating: <h4>{wine.rating}</h4></h3>
								<h3>Description:</h3> <h4>{wine.description}</h4>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
		);
	}
}

export default Wine;

// //<Col xs={12} md={8}> </Col>
// <a onClick={() => this.addLike(this.props.index)}><i className="glyphicon glyphicon-arrow-up"></i></a>
// <a onClick={() => this.removeLike(this.props.index)}><i className="glyphicon glyphicon-arrow-down"></i></a>
