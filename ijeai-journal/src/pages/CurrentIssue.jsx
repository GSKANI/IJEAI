import SectionHeader from '../components/SectionHeader'
import PaperCard from '../components/PaperCard'
import styles from './Page.module.css'

export default function CurrentIssue({ data }) {
  const topLabel = `${data.issueVol.replace('Volume', 'Vol')}, No ${data.issueNum.replace(/\D/g, '')} · 2026`

  return (
    <div className={`${styles.page} site-wrap`}>
      <SectionHeader title="Current Issue" label={topLabel} />
      <div className={styles.issueHeader}>
        <div>
          <h4>{data.issueVol} · {data.issueNum}</h4>
          <p>{data.issuePeriod} · {data.papers.length} Articles</p>
        </div>
        <span>ISSN: {data.issn}</span>
      </div>
      <div className={styles.papersList}>
        {data.papers.map(p => <PaperCard key={p.id} paper={p} showAbstract />)}
      </div>
    </div>
  )
}
