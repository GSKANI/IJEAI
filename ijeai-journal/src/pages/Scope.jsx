import SectionHeader from '../components/SectionHeader'
import styles from './Page.module.css'

const AREAS = [
  { title: 'Engineering Sciences',     desc: 'Civil, mechanical, electrical, chemical, and biomedical engineering research and applications.' },
  { title: 'Artificial Intelligence',  desc: 'Machine learning, deep learning, NLP, robotics, and AI ethics.' },
  { title: 'Computer Science',         desc: 'Algorithms, software engineering, cybersecurity, and human-computer interaction.' },
  { title: 'Arts & Humanities',        desc: 'Digital arts, media studies, cultural technology, and creative computing.' },
  { title: 'Design & Innovation',      desc: 'Product design, UX/UI, sustainable design, and systems innovation.' },
  { title: 'Interdisciplinary Research', desc: 'Cross-domain studies bridging multiple disciplines are strongly encouraged.' },
  { title: 'Smart Technologies',       desc: 'IoT, smart cities, embedded systems, and wearable computing.' },
  { title: 'Sustainability',           desc: 'Green engineering, renewable energy, and environmental informatics.' },
]

export default function Scope() {
  return (
    <div className={`${styles.page} site-wrap`}>
      <SectionHeader title="Aim & Scope" label="Research Areas" />
      <div className={styles.prose}>
        <p>
          IJEAI publishes original research, review articles, short communications, and case studies exploring
          the dynamic boundaries between engineering disciplines, creative arts, and applied innovation.
          The journal welcomes contributions that are theoretical, empirical, or practice-based.
        </p>
      </div>
      <div className={styles.scopeGrid}>
        {AREAS.map(a => (
          <div key={a.title} className={styles.scopeItem}>
            <h5>{a.title}</h5>
            <p>{a.desc}</p>
          </div>
        ))}
      </div>
      <div className={styles.highlightBox}>
        <strong>Note:</strong> The journal particularly welcomes submissions that cross traditional
        disciplinary boundaries and propose novel interdisciplinary methodologies.
      </div>
    </div>
  )
}
