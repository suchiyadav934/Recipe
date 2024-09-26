import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const ViewRecipe = () => {
  let location = useLocation()
  let recipe = location.state.recipe
  console.log(location)
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-4 border border-black justify-content-center d-flex bg-info'>
          <img src={recipe.image} />
        </div>
        <div className='col-md-8 bg-warning ps-5'>
          <h3 className='my-3'>{recipe.label}</h3>
          <h4 className='my-3'>{recipe.mealType[0]}</h4>
          <h5 className='my-3'>{recipe.cuisineType}</h5>
          <Link to={recipe.url} className='btn btn-info my-3'>Recipe method</Link>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-md-10'>
        <table className="table">
        <thead>
    <tr>
      <th scope="col">text</th>
      <th scope="col">quntitiy</th>
      <th scope="col">food</th>
      <th scope="col">weight</th>
    </tr>
  </thead>
  <tbody>
  {recipe.ingredients.map((ele)=>{
    return <tr>
      <th>{ele.text}</th>
      <td>{ele.quantity}</td>
      <td>{ele.food}</td>
      <td>{ele.weight}</td>
    </tr>
  })}
    
    
  </tbody>
  </table>
     
  

        </div>
        <div className='col-md-2'>
        <h3>HealthLabels</h3>
       <h6>
         {recipe.healthLabels.map((element) => {
            return <li>{element}</li>
          })}  
         </h6>
        </div>
      </div>
      
    </div>
  )
}

export default ViewRecipe
