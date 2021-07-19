import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import Pagination from './components/pagination';
import Show from './components/Show';
const axios = require('axios');

const url = 'https://covid19-api.com/country?name='

function App() {
  const [value, setValue] = useState('')
  const [resp, setResp] = useState({});
  const options = useMemo(() => countryList().getData(), []) 

  const changeHandler = value => { 
    console.log(`Option selected:`, value.label) ;  
    setResp({}) ;

    const uri = url + value.label + '&format=json'

    axios.get(uri)
    .then(function (response) { 
      console.log(response.data)
      var temp = response.data 
      setResp(temp) ; 
      console.log('Owaish', resp) 
    })
    .catch(function (error) {
      console.log(error);
    }) ;
    setValue(value) 
  }

  if(Object.keys(resp).length !== 0)
  console.log('Kalim', resp[0].confirmed) 

  return (
    <div>  
      <div> 
        <h1 style={{textAlign:'center'}}> Countrywise Covid19 Cases </h1>
      </div>
     {value === '' ? (<h2 style={{paddingLeft: '20px'}}> Select a Country </h2>) : ''}
     <div style={{width:'40%', paddingLeft:'20px'}}> 
      <Select options={options} value={value} onChange={changeHandler} />
      </div>
      {value !== '' ? (<h2 style={{paddingLeft: '20px'}}> Country : {value.label} </h2>) : ''} 
      {Object.keys(resp).length !== 0 ? <Show data={resp[0]} /> : ''} 
      {/* {value !== '' && resp.length === 0 && <h2 style={{textAlign:'center'}}> No Results Found </h2>} */}
      {/* {resp.length !== 0 &&  <Pagination data = {resp} /> } */} 
    </div>
  )
  
}

export default App