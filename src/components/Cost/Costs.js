import './Costs.css';
import CostItem from './CostItem';
import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import React, {useState} from 'react';
const Costs = (props)=>{
  const [selectedYear, setSelectedYear] = useState('2022');
   const yearChangeHandler =(year)=>{
      setSelectedYear(year);
   }

   

   const filterdCosts = props.costs.filter(
    cost=>{
      return cost.date.getFullYear().toString()=== selectedYear;
    }
   )

   let costContent = <p>No costs in this year</p>;

   if(filterdCosts.length>0){
    costContent = filterdCosts.map(cost =>
    (<CostItem 
      key ={cost.id}
      date={cost.date} 
      description={cost.description} 
      amount={cost.amount}/>))
   }
    return (
      <div> 
      <Card className='costs'>
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
        {costContent}
      </Card>
      </div>
    )
}

export default Costs;
