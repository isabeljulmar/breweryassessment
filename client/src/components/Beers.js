import React from 'react';
import { Header, Container, Card, Image } from 'semantic-ui-react';
import axios from 'axios';

class Beers extends React.Component {
    state = { beers: [], breweries: [] }

    componentDidMount() {
        axios.get('/api/beer/')
            .then(res => this.setState({ beers: res.data }))
    }

    displayBeers = () => {
        return (
          <Container>
                <Card>
                  <Image src='/assets/images/avatar/large/daniel.jpg' />
                    <Card.Content>
                        <Card.Header>{this.state.beers}</Card.Header>
                        <Card.Description>Brewery</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Card.Meta>Location</Card.Meta>
                    </Card.Content>
                </Card>
            </Container>
            )
        
        }

    render(){
        return(
            <Container>
              <Header as='h1' textAlign='center'>Locations</Header>
              <Card.Group>
                {this.displayBeers()}
              </Card.Group>
            </Container>
        )
    } 
}

export default Beers;