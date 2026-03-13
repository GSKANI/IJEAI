import styles from './PaperCard.module.css'

export default function PaperCard({ paper, showAbstract = false }) {
  return (
    <div className={styles.item}>
      <span className={styles.num}>{paper.num}</span>
      <div className={styles.details}>
        <h5 className={styles.title}>{paper.title}</h5>
        <div className={styles.meta}>
          {paper.authors} &nbsp;&middot;&nbsp; Pages {paper.pages}
          {showAbstract && <>&nbsp;&middot;&nbsp; {paper.date}</>}
        </div>
        <div className={styles.tags}>
          {paper.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
        </div>
        {showAbstract && (
          <p className={styles.abstract}><strong>Abstract:</strong> {paper.abstract}</p>
        )}
      </div>
    </div>
  )
}
