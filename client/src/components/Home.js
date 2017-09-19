import React from 'react';
import {Grid, Header, Image, Button} from 'semantic-ui-react'

const Home = ({history}) => (
  <Grid centered columns={2}>
    <Grid.Column>
      <Header as="h1" textAlign="center">Welcome To Rob's Burgers</Header>
      <Image src='https://favim.com/orig/201103/25/Favim.com-7751.jpg' fluid />
      <Button primary fluid 
        onClick={ () => {history.push('/menu')}}>Menu!</Button>
    </Grid.Column>
  </Grid>
  
)

export default Home