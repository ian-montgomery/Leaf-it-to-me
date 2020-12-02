import React from 'react'



import Header from './Header.jsx'
import Home from './Home.jsx'
import IndividualPlant from './IndividualPlant.jsx'
import SavedPlants from './SavedPlants.jsx'


// import NewComponent from './NewComponent.jsx'


// -- Login\
// -- Register\
// -- User\

class App extends React.Component {
    render () {
      return (
        <>
          <Header/>
          <Home/>
          <IndividualPlant/>
          <SavedPlants/>
        </>
      )
    }
  }

export default App