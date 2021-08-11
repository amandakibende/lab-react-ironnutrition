import React from "react";

class Form extends React.Component{

    state = {
        name:"",
        images:"",
        quantity:"",
        calories:"",
    }

  

    render(){



        return (

        <form>


        <div>
        <label forHTML="name">Name : </label>
        <input type="text" value={this.state.name} name="name" onChange={this.handleChange}/>
        </div>

        <div>
        <label forHTML="quantity">Quantity : </label>
        <input type="number" value={this.state.quantity} name="quantity"/>
        </div>

        <div>
        <label forHTML="calories">Calories : </label>
        <input type="number"  value={this.state.calories} name="calories"/>
        </div>

        <div>
        <label forHTML="images">Image : </label>
        <input type="file"  value={this.state.images} name="images"/>
        </div>

        <button submit>Submit</button>


        </form>


        );



    }




}

export default Form; 