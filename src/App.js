import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './Component/FoodBox';
import foodsJSON from './foods.json';
import Form from './Component/Form';



class App extends React.Component {

  state = {
   foods : foodsJSON,
   onClick : false, 
   searchFood:"",
  }; 


  handleChange = (value) =>{
    this.setState({
      searchFood : value
    })
    
  }



  btnAddFood = () =>{

  this.setState({
    onClick : ! this.state.onClick 
  })



 }

  render(){
                
    const UpdateFilter = this.state.foods.filter(food =>{
      if (food.name.toLowerCase().includes(this.state.searchFood.toLowerCase())) {

        return food
        
      } 


    })
           
    return (
      <div className="App"> 

          <button className="button is-info" onClick={this.btnAddFood}>
            Add food
          </button>
          {this.state.onClick ? <Form/>: null} 
          
          {/* {this.state.onClick && <Form/> } guards */}
          
          <Search
            onChange = {this.handleChange}
          />

          
          

      {UpdateFilter.map( (toto)=> {

        return (
        

          <div>
        
          <FoodBox key={toto.name}
            name = {toto.name}
            images = {toto.image}
            quantity = {toto.quantity}
            calories = {toto.calories}
          />

          </div>
        )

      })}
 
        
      </div>
    );

  }


}

export default App;


 const Search = (props) => {

  return(

    <input class="input" type="text" placeholder="Search for food.." onChange={ (e) => props.onChange(e.target.value)} />
  );

 }
 
 


   



