import SectionHeader from '../components/SectionHeader'
import styles from './Page.module.css'

export default function Contact({ data }) {
  const issnDisplay = data.issn === 'XXXX-XXXX' ? 'Application Pending' : data.issn

  return (
    <div className={`${styles.page} site-wrap`}>
      <SectionHeader title="Contact & Submit" label="Get in Touch" />
      <div className={styles.contactGrid}>
        <div className={styles.contactBlock}>
          <h4>Editorial Office</h4>
          {[
            { label: 'Publisher', value: data.publisher },
            { label: 'Journal',   value: 'IJEAI' },
            { label: 'Email',     value: <a href={`mailto:${data.email}`}>{data.email}</a> },
            { label: 'Website',   value: <a href={`https://${data.website}`} target="_blank" rel="noreferrer">{data.website}</a> },
            { label: 'Country',   value: data.country },
            { label: 'ISSN',      value: issnDisplay },
          ].map(r => (
            <div key={r.label} className={styles.contactRow}>
              <span className={styles.contactLabel}>{r.label}</span>
              <span className={styles.contactValue}>{r.value}</span>
            </div>
          ))}
        </div>

        <div className={styles.contactBlock}>
          <h4>Submit Your Paper</h4>
          <p style={{ fontSize: '14.5px', color: 'var(--text-light)', marginBottom: '20px', lineHeight: 1.7 }}>
            Send your manuscript to our editorial office. Please read the Author Guidelines before submitting.
          </p>
          <div className={styles.highlightBox}>
            <strong>Email:</strong> {data.email}<br />
            <strong>Subject:</strong> IJEAI Submission – [Paper Title]<br />
            <strong>Attachments:</strong> Manuscript (.docx or .pdf) + Cover Letter
          </div>
          <a
            className={styles.submitCta}
            href={`mailto:${data.email}?subject=IJEAI Paper Submission`}
          >
            Submit via Email
          </a>
        </div>
      </div>
    </div>
  )
}
