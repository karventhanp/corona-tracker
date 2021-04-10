import React, { Component } from 'react';
//import Cards from './Components/Cards/Cards' -lot of line so
import {Cards,CountryPicker} from './Components';
import styles from './App.module.css';
import {fetchData} from './Api/index';
import corona from './Images/corona.png';
class App extends Component {
  state={
    data:{},
  }
  async componentDidMount(){
    const fetchedData=await fetchData();
    this.setState({data:fetchedData});
  }
  handleCountryChange=async(country)=>{
    const fetchedData=await fetchData(country);
    this.setState({ data:fetchedData});
    //fetch country
    //set state

  }

  render() { 
    /*
     const {data}=this.state;
     <Cards data={data}/>
    */
    return (
    <div className={styles.container}>      
      <img className={styles.image} src={corona} alt="COVID-19"/>
      <Cards data={this.state.data} />
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <div>
        <h3>Developed by Karventhan</h3>
      </div>
    </div>  );
  }
}
 
export default App;