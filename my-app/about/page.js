import Demo from "../components/Demo"
import Hello from "../components/HEllo"
import styles from './about.module.css';
// 确保默认导出函数名与文件路径匹配
export default function AboutPage() { 
  return (
    <div className={styles.container}>
      {/* 内容保持不变 */}
    </div>
  )
}
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
