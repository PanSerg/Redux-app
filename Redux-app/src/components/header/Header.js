import styles from './Header.module.css';
import { IoAccessibility } from "react-icons/io5";

export default function Header(){
  return <header className={styles.header}>
  <IoAccessibility />
</header>;
}

