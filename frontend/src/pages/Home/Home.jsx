import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import MealPlanner from '../../components/MealPlanner/MealPlanner'
import RealTimeDietaryInsights from '../../components/RealTimeDietary/RealTimeDietaryInsights'


const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category}/>
      <MealPlanner/>
      <RealTimeDietaryInsights/>
      <AppDownload/>

    </>
  )
}

export default Home