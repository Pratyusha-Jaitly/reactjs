import React, {useState} from 'react';
import './App.css';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache, useQuery,
  gql
} from "@apollo/client";
import {BrowserRouter as Router, 
Link,
Switch,
Route} from "react-router-dom";


const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

// write a GraphQL query that asks for names and codes for all countries
const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
      native
      emoji
      
    }
  }
`;

// create a component that renders a select input for coutries
const  CountrySelect=()=> {
  const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});
  const [country, setCountry] = useState('US');

  if (loading || error) {
    console.log(loading)
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  return (
   <div>
     <Switch>
   
      <Route path="/country">
      <Details country={country}></Details>
      </Route>
      <Route path="/">
      {data.countries.map(country => (
        // <option key={country.code} value={country.code}>
        //   {country.name}
        // </option>
        <li key={country.code}>{country.name} 
        <Link to="/country">
        <button onClick={
          ()=>setCountry(country)
        }>Details</button>
        </Link></li>
      ))}
      </Route>
      </Switch>
   </div>
  );
}

function App() {
 
  
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Link to="/">Home</Link>
       
       <Switch>
      
         <Route path="/">
       <CountrySelect />
         </Route>
       </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;

const Details = ({country})=>{
  return(
    <div>
      <p>
      Name : {country.name}</p>
      <p> Code : {country.code}</p>
      <p>  Native : {country.native}</p>
    <p>  Emoji : {country.emoji}</p>
    </div>
  )
}