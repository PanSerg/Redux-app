import styles from './RecipeItem.module.css';
import { useActions } from '../../hooks/useActions';
import { useFavorites } from '../../hooks/useFavorites';
import { IRecipe } from '../../types/recipe.types';

interface IRecipeItem {
  recipe: IRecipe
}

function RecipeItem({ recipe }: IRecipeItem) {
  const {favorites} = useFavorites();

  const {toggleFavorites} = useActions();

  const isExists = favorites.some(
    r => r.id === recipe.id
  )

 

  return (
    <>
          <div className={styles.item}>
              <img src={recipe.image} all={recipe.name} />
              <h2>{recipe.name}</h2>
        <button onClick={() => toggleFavorites(recipe)
   
        }>{isExists ? 'Remove from' : 'add to' } favorites</button>
      </div>
    </>
  )
}

export default RecipeItem;