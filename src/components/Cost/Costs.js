import './Costs.css';
import CostItem from './CostItem';
import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import React, {useState} from 'react';
const Costs = (props)=>{
  const [selectedYear, setSelectedYear] = useState('2019');
   const yearChangeHandler =(year)=>{
      setSelectedYear(year);
   }

   const filterdCosts = props.costs.filter(
    cost=>{
      return cost.date.getFullYear().toString()=== selectedYear;
    }
   )
    return (
      <div> 
      <Card className='costs'>
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
        {filterdCosts.map(cost =>
           (<CostItem 
             key ={cost.id}
             date={cost.date} 
           description={cost.description} 
           amount={cost.amount}/>))}
      </Card>
      </div>
    )
}

export default Costs;
