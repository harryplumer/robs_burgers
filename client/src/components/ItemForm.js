import React from 'react';
import {Modal, Form, Button} from 'semantic-ui-react'

class ItemForm extends React.Component{

state = {item: {id: 0, name: "", description: "", price: 0, category: ""}, editing: false, modalOpen: false}

  handleChange = (propertyName) => (event) => {
    const { item } = this.state
    const newItem = {
      ...item,
      [propertyName]: event.target.value
    };
    this.setState({ item: newItem })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {item} = this.state
    if (this.state.editing === false)
      this.props.addItem(item)
    else
      this.props.updateItem(item)    
    
    this.setState({item: {id: 0, name: "", description: "", price: 0, category: ""}, modalOpen: false})
  }

  handleOpen = () => {
  if (this.props.editing){
    this.setState({item: this.props.item, editing: true})
  }
    this.setState({ modalOpen: true })
  }

  render(){
    const {item} = this.state 
    const {editing} = this.props
    return(
      <Modal
      trigger={editing ?  <Button color="yellow" inverted size='tiny' onClick={this.handleOpen}>Edit</Button> :
      <Button primary onClick={this.handleOpen}>Add New Item</Button>  }
      open={this.state.modalOpen}
      >
        <Modal.Header>
          {editing ? "Edit Item" : "Add An Item"}
        </Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input
              required
              label="Name"
              value={item.name}
              onChange={this.handleChange("name")}
              width={16}
            />
            <Form.Group>
              <Form.Input
                required
                label="Price"
                value={item.price}
                onChange={this.handleChange("price")}
                width={6}
              />
              <Form.Input
              required
                label="Category"
                value={item.category}
                onChange={this.handleChange("category")}
                width={6}
              />
          </Form.Group>
          <Form.TextArea label="Description" 
            value={item.description}
            onChange={this.handleChange("description")} 
            placeholder="Add a description..." 
          />
          <Form.Button color='green' inverted>
          {editing ? "Save" : "Submit"}
        </Form.Button>
        </Form>
        <Button color='red' inverted onClick={() => {this.setState({modalOpen: false})}}>
          Cancel
        </Button>
      </Modal.Content>
    </Modal>
    )
  }
}


export default ItemForm