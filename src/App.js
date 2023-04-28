import Costs from "./components/Cost/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from "react";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2020, 2, 12),
    description: "Refrigerator",
    amount: 999.99
  },
  {
    id: "c2",
    date: new Date(2021, 11, 25),
    description: "MacBook",
    amount: 1254.72
  },
  {
    id: "c3",
    date: new Date(2021, 3, 1),
    description: "Jeans",
    amount: 49.99
  }
]
const App = () => {
 
  const [costs, setCosts]= useState(INITIAL_COSTS);
  
  const addCostHandler =(cost)=>{
    setCosts(prevCosts=>{
      return [cost, ...prevCosts];
      
    });
    
  }

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Начнём изучение React!"),
  //   React.createElement(Costs, { costs: costs })
  // );
  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
       <Costs costs={costs}/>
    </div>
  );
}

export default App;
