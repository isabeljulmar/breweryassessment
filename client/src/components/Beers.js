import React from 'react';
import { Header, Container, Card, Icon, Image } from 'semantic-ui-react';

class Beers extends React.Component {

    render(){
        return(
          <Card>
            <Image src='/assets/images/avatar/large/daniel.jpg' />
            <Card.Content>
              <Card.Header>Beer</Card.Header>
                <Card.Description>About Beer</Card.Description>
            </Card.Content>
              <Card.Content extra>
                <Card.Meta>Brewery</Card.Meta>
              </Card.Content>
            </Card>
        )
    }
}

export default Beers;