import styles from './RecipeItem.module.css';
import { useActions } from '../../hooks/useActions';
import { useFavorites } from '../../hooks/useFavorites';

function RecipeItem({ recipe }) {
  const {favorites} = useFavorites();

  const {toggleFavorites} = useActions();

  const isExists = favorites.some(
    r => r.id === recipe.id
  )

  console.log(favorites);

  return (
    <>
          <div className={styles.item}>
              {/* <img src="" all="" /> */}
              <h2>{recipe.name}</h2>
        <button onClick={() => toggleFavorites(recipe)
   
        }>{isExists ? 'Remove from' : 'add to' } favorites</button>
      </div>
    </>
  )
}

export default RecipeItem;