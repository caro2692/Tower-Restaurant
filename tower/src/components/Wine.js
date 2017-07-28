import React from 'react';
import {Col, Thumbnail} from 'react-bootstrap'
import '../App.css'
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
                <h4 className="media-heading">
                  {wine.name}
                  |
                  {wine.vineyard}
                </h4>
                <div className="text-right">
                  {wine.region}
                </div>
                <p>
                  {wine.vintage}
                  {wine.rating}
                </p>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Wine;

// //<Col xs={12} md={8}> </Col>
// <a onClick={() => this.addLike(this.props.index)}><i className="glyphicon glyphicon-arrow-up"></i></a>
// <a onClick={() => this.removeLike(this.props.index)}><i className="glyphicon glyphicon-arrow-down"></i></a>
