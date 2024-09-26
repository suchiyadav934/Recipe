import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const Recipe = () => {
          let searchRef = useRef()
  const [recipes, setrecip] = useState([]);
  const [search, setsearch] = useState("pizza");

  const getrecipes = async () => {
    let res = await fetch(`https://api.edamam.com/search?q=${search}&app_id=3e915d31&app_key=9185c7b2bfe2407f8b796db2fa3d219e`)
    let data = await res.json()

    console.log(data.hits)
    setrecip(data.hits)
    console.log(recipes)
  }
  const handleclick = (e)=>{
     e.preventDefault()
     let  value = searchRef.current.value
     setsearch(value)

  }
  useEffect(() => {
    getrecipes()
  }, [search])

  return (
    <div>
      <form className="d-flex w-50 m-auto my-3" role="search">
  <input ref={searchRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
  <button onClick={handleclick} className="btn btn-outline-success" type="submit">Search</button>
</form>

    
    <div className='d-flex container flex-wrap gap-5 my-5 justify-content-center bg-Success'>
      {
        recipes.map((e) => {
          return <div>
            <div className="card" style={{ width: '18rem' }}>
              <img src={e.recipe.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{e.recipe.label}</h5>
                <p className="card-text">Calories:- {Math.round(e.recipe.calories)}</p>
                {/* <p className="card-text">{e.recipe.cuisineType}</p> */}
                <div className='text-center'>
                <Link to="/viewrecipe" state={e} className="btn btn-primary m-auto">View More ➡</Link>
                </div>
              </div>
            </div>

          </div>
        })
      }
    </div>
    </div>
  )
}

export default Recipe

