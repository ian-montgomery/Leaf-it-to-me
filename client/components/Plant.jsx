import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addPlantToUsersPlantsDB } from '../apis/plants'

import { addPlantToReduxandDb, currentPlant } from '../actions/index'

const Plant = (props) => {

  const plant = props.plant 
  const handleClick = () => {
    console.log('hi i am handleclick')
    // props.dispatch(addPlantToReduxandDb(plant.id)
  } 
  return (
    <div>
      <div className='each-profile'>
      <div className='profile-picture'>
          <img src= {plant.img}/>
        <div className='profile-name-plate'>
          <p className='profile-name'>{plant.common_name}</p>
          <p className='species'>{plant.species_name}</p>

        </div>
        <div className='button-plate'>
          <Link to={`/plants/${plant.common_name}`}><a>Click me</a></Link>
          <h4 className='name'>{plant.common_name}</h4>
          <a onClick={handleClick}>Add Me</a>
          <Link to={`/plants/${plant.common_name}`}>More info</Link>
        </div>
        </div>
      
        </div>
        </div>
  )
}

export default connect()(Plant)
