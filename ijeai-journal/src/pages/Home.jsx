import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import PaperCard from '../components/PaperCard'
import styles from './Home.module.css'

export default function Home({ data }) {
  const issueLabel = `${data.issueVol.replace('Volume', 'Vol')}, ${data.issueNum} · 2026`

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className="site-wrap">
          <div className={styles.heroLabel}>{data.heroLabel}</div>
          <h2 className={styles.heroH2}>
            {data.heroH1} <em>{data.heroH2}</em>
          </h2>
          <p className={styles.heroDesc}>{data.heroDesc}</p>
          <div className={styles.heroBadges}>
            <span className={`${styles.badge} ${styles.badgeTeal}`}>Open Access</span>
            <span className={`${styles.badge} ${styles.badgeGold}`}>Double-Blind Peer Review</span>
            <span className={`${styles.badge} ${styles.badgeWhite}`}>Quarterly Publication</span>
            <span className={`${styles.badge} ${styles.badgeWhite}`}>Published in India</span>
          </div>
        </div>
      </div>

      <div className="site-wrap">
        {/* Info Cards */}
        <div className={styles.infoGrid}>
          {[
            { label: 'Publisher',    value: data.publisher,    sub: data.address },
            { label: 'First Volume', value: 'Vol. 1, No. 1',   sub: 'January 2026' },
            { label: 'Review Type', value: 'Double-Blind',     sub: 'Peer-Reviewed' },
            { label: 'Access Type', value: 'Open Access',      sub: 'Free to read & download' },
          ].map(c => (
            <div key={c.label} className={styles.infoCard}>
              <h4>{c.label}</h4>
              <p>{c.value}</p>
              <span>{c.sub}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className={styles.statRow}>
          {[
            { num: data.papers.length, lbl: 'Papers Published' },
            { num: 1,                  lbl: 'Volume'            },
            { num: data.board.length,  lbl: 'Board Members'     },
            { num: 6,                  lbl: 'Disciplines'       },
          ].map(s => (
            <div key={s.lbl} className={styles.statItem}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLbl}>{s.lbl}</span>
            </div>
          ))}
        </div>

        {/* Current Issue Highlights */}
        <SectionHeader title="Current Issue Highlights" label={issueLabel} />
        <div className={styles.papersList}>
          {data.papers.map(p => <PaperCard key={p.id} paper={p} />)}
        </div>

        <div className={styles.viewAll}>
          <Link to="/issue" className={styles.viewAllBtn}>
            View Full Issue &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
