import React from 'react';
import {Grid, Row} from 'react-bootstrap'
import Wine from './Wine';
import { getWines } from './API';

class WineList extends React.Component {
  constructor(){
    super();
    this.state = {
      wines: []
    }
  }

  componentDidMount(){
      getWines('https://lit-savannah-45759.herokuapp.com/wine/')
      .then(result=>{
        this.setState({
          wines:result.data
        })
      });
  }

  render() {
    const wines = this.state.wines;
    return(
      <div>
        {
           wines
          .map((wine,index)=><Wine key={wines[index].id} wine={wines[index]}></Wine>)
        }
      </div>
    )
  }
}

export default WineList;
