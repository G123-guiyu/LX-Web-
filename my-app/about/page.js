import Demo from "../components/Demo"
import Hello from "../components/HEllo"
import styles from './about.module.css';
export default function Home() {
  return (
    <div className={styles.container}>
      <h1 style={{ color: 'blue', marginBottom: '20px' }}>这是来自函数的内容</h1>
      <div className={styles.componentSection}>
        <Demo />
        <Hello />
      </div>
    </div>
  )
}
