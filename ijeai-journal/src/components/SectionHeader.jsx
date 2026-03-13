import styles from './SectionHeader.module.css'

export default function SectionHeader({ title, label }) {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  )
}
