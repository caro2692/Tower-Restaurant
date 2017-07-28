import React from 'react';
import Wine from './Wine';
import { getWines } from './API';

class OneWine extends React.Component {
  constructor(){
    super();
    this.state = {
      wine: {}
    }
  }

  componentDidMount(){
    this.generateWine()

  }

  generateWine(){
    console.log('generate wine loadin');
    const id = Number(this.props.match.params.id)
    console.log(id);
    this.getWineFromAPI(id);
  }

  getWineFromAPI(id){
    let url = `https://lit-savannah-45759.herokuapp.com/wine/${id}`
    console.log(url);
    getWines(url)
    .then(result=>{
      this.setState({
        wine:result.data
      })
    });
  }

  componentDidMount(){
    this.generateWine();
  }

  render() {
    const wines = this.props.wines;
    return(
      <div>
        <Wine wine={this.state.wine} ></Wine>
      </div>
    )
  }
}

export default OneWine;
