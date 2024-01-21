import { useFavorites } from '../../hooks/useFavorites';
import styles from './Header.module.css';
import { IoAccessibility } from "react-icons/io5";

export default function Header() {
  const { favorites } = useFavorites();

  return (
    <header className={styles.header}>
    <IoAccessibility fontSize={20}/>
    <span>{favorites.length}</span>
    </header>
  )
}

