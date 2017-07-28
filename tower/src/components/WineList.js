import React from 'react';
import {Grid, Row} from 'react-bootstrap'
import Wine from './Wine';

class WineList extends React.Component {
  render() {
    return(
      <div>
        <Grid>
          <Row>
            <Wine></Wine>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default WineList;
