import SectionHeader from '../components/SectionHeader'
import styles from './Page.module.css'

export default function About({ data }) {
  return (
    <div className={`${styles.page} site-wrap`}>
      <SectionHeader title="About the Journal" label="IJEAI" />

      <div className={styles.prose}>
        <p className={styles.dropcap}>
          The <strong>International Journal of Engineering, Arts and Innovation (IJEAI)</strong> is a
          peer-reviewed, open access academic journal published by <strong>{data.publisher}</strong>,
          headquartered in {data.address}. Established in 2026, IJEAI is committed to disseminating
          original, high-quality research spanning engineering, technology, arts, and creative innovation.
        </p>
        <p>
          The journal provides a rigorous and transparent scholarly platform where researchers, practitioners,
          educators, and innovators can share cutting-edge findings with the global academic community.
          All articles undergo a double-blind peer review process to ensure academic integrity,
          methodological rigor, and scholarly merit.
        </p>
        <p>
          IJEAI is freely accessible to readers worldwide without subscription barriers, embodying the
          principles of open science and equitable knowledge sharing. Authors retain copyright to their
          work under a <strong>Creative Commons Attribution (CC BY 4.0)</strong> license.
        </p>
      </div>

      <div className={styles.infoGrid}>
        {[
          { label: 'Founded',    value: '2026',          sub: 'Vol. 1 launched January 2026'    },
          { label: 'Publisher',  value: data.publisher,   sub: data.address                      },
          { label: 'Frequency',  value: 'Quarterly',      sub: '4 issues per year'               },
          { label: 'Language',   value: 'English',        sub: 'International submissions welcome'},
          { label: 'Review',     value: 'Double-Blind',   sub: 'Peer review'                     },
          { label: 'Access',     value: 'Open Access',    sub: 'CC BY 4.0 license'               },
        ].map(c => (
          <div key={c.label} className={styles.infoCard}>
            <h4>{c.label}</h4>
            <p>{c.value}</p>
            <span>{c.sub}</span>
          </div>
        ))}
      </div>

      <div className={styles.guidelineBlock}>
        <h4>Journal Objectives</h4>
        <ul>
          {[
            'Promote interdisciplinary research bridging engineering sciences and creative arts',
            'Provide a platform for original research, review articles, and case studies',
            'Advance knowledge in technology, innovation, and design thinking',
            'Foster collaboration between researchers across technical and humanistic disciplines',
            'Uphold the highest standards of publication ethics and scholarly integrity',
            'Ensure free and equitable access to academic knowledge globally',
          ].map(o => <li key={o}>{o}</li>)}
        </ul>
      </div>
    </div>
  )
}
