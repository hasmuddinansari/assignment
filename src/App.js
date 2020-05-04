import React from 'react';
import './App.css';
import OrderBarChart from "./components/Charts/OrdersBarChart/OrderBarChart"
import PriceLineChart from "./components/Charts/PriceLineChart/PriceLineChart"
import EmpTable from "./components/Table/EmpTable"
import GetDataFromApi from "./State/GetDataFromApi"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./components/Common/Navbar"

export function BothChart() {
  return (
    <div className="p-2">
      <h5 className="text-danger">Orders/day Report</h5>
      <OrderBarChart />
      <h5 className="text-success">TotalPrice/day Report</h5>
      <PriceLineChart />
    </div>
  )
}

function App() {
  const { state } = GetDataFromApi()

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={BothChart} />
          <Route path="/table" render={(props) => {
            return <EmpTable state={state} {...props} />
          }} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
