import styles from './layout.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}