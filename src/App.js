import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import Home from './pages/home';
import View from './pages/view';
import Favorite from './pages/favourites';
import { Detail } from './pages/detail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.graphcdn.app/',
  cache: new InMemoryCache(),
});

function App() {  
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Detail/:id' element={<Detail/>}/>
          <Route path='/View' element={<View/>}/>
          <Route path='/Favorite' element={<Favorite/>}></Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
