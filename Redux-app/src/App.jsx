// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import RecipeItem from './recipe-item/RecipeItem'

function App() {

  return (
    <>
      <div>
        <RecipeItem recipe={{
          id: 1,
          name: 'Лазанья',
        }} />
        <RecipeItem recipe={{
          id: 2,
          name: 'Шашлык',
        }} />
        <RecipeItem recipe={{
          id: 3,
          name: 'Паста',
        }} />
      </div>
    </>
  )
}

export default App
