import Costs from "./components/Cost/Costs";

const App = () => {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: "Refrigerator",
      amount: 999.99
    },
    {
      date: new Date(2021, 11, 25),
      description: "MacBook",
      amount: 1254.72
    },
    {
      date: new Date(2021, 3, 1),
      description: "Jeans",
      amount: 49.99
    }
  ]

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Начнём изучение React!"),
  //   React.createElement(Costs, { costs: costs })
  // );
  return (
    <div>
      <h1>Start</h1>
       <Costs costs={costs}/>
    </div>
  );
}

export default App;
