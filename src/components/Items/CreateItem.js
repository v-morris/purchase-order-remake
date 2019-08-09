import React from 'react';

class CreateItem extends React.Component {

  render(){

    return(
      <div>
      <h1>Create Item</h1>
      <form>
        <label for="firstName">Item Name</label>
        <input type = "text" id = "firstName" name="firstName"></input>
        <button>Submit</button>
      </form>
    </div>
    )
  }
}

export default CreateItem;