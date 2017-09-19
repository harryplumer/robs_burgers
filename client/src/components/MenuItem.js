import React from 'react'
import {Item, Button, Label} from 'semantic-ui-react'
import ItemForm from './ItemForm'
class MenuItem extends React.Component{
  
  
  render(){
    const {item} = this.props
    return(
      <Item>
      <Item.Content>
        <Item.Header as='h3'>{item.name} ${item.price}</Item.Header>
        <Item.Meta></Item.Meta>
        <Item.Description>{item.description}</Item.Description>
        <Item.Extra>
        <Label>{item.category}</Label>
          <ItemForm 
            item = {item}
            updateItem = {this.props.updateItem}
            editing = {true}
          />
          <Button size='tiny' color='red' inverted onClick={() => this.props.destroyItem(item.id)}>Delete</Button>
        </Item.Extra>
      </Item.Content>
    </Item>
    )
}

}

export default MenuItem