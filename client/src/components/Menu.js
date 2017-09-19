import React from 'react';
import {Grid, Header, Image, Item} from 'semantic-ui-react'
import axios from 'axios'
import MenuItem from './MenuItem'
import ItemForm from './ItemForm'

class Menu extends React.Component{
  state = {menuItems: []}

  componentDidMount(){
    
    axios.get('api/items.json')
    .then( res => this.setState({menuItems: res.data}))
  }

  addItem = (item) => { 
    axios.post('/api/items.json', item)
      .then( res => this.setState({menuItems: res.data}))
  }
  
  destroyItem = (id) => {
    axios.delete(`/api/items/${id}`)
    .then( () => {
      const { menuItems } = this.state
      this.setState({ menuItems: menuItems.filter( t => t.id !== id ) })
    })
  }
  
  updateItem = (item) => {
    axios.put(`api/items/${item.id}.json`, item)
      .then( res => this.setState({menuItems: res.data}))
  }
  
  render(){
    const itemsArr = this.state.menuItems.map(i => <MenuItem key={i.id} item={i} 
      destroyItem={this.destroyItem} updateItem={this.updateItem} />)
    return(
      <Grid centered columns={2}>
        <Grid.Column>
          <Header as="h1" textAlign="center">Menu<br />
          <Image src='https://favim.com/orig/201103/25/Favim.com-7751.jpg' fluid />
            <br />
            <ItemForm addItem={this.addItem} />
          </Header>
          <Item.Group divided>
            {itemsArr}
          </Item.Group>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Menu