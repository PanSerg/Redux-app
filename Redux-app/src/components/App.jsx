import RecipeItem from './recipe-item/RecipeItem';
import Header from './header/Header';

function App() {

  return (
    <section>
      <Header />
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
    </section>
  )
}

export default App
