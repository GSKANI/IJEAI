import SectionHeader from '../components/SectionHeader'
import styles from './Page.module.css'

export default function Guidelines({ data }) {
  return (
    <div className={`${styles.page} site-wrap`}>
      <SectionHeader title="Author Guidelines" label="Submission Info" />

      <div className={styles.guidelineBlock}>
        <h4>Manuscript Format</h4>
        <ul>
          <li>File format: Microsoft Word (.docx) or LaTeX</li>
          <li>Font: Times New Roman, 12pt, double-spaced</li>
          <li>Page margins: 2.54 cm on all sides</li>
          <li>Length: 4,000–8,000 words (excluding references)</li>
          <li>Abstract: 200–300 words</li>
          <li>Keywords: 5–8, separated by semicolons</li>
          <li>References: IEEE or APA citation style</li>
          <li>Figures: minimum 300 DPI resolution</li>
        </ul>
      </div>

      <div className={styles.guidelineBlock}>
        <h4>Submission Process</h4>
        <ul>
          <li>Submit via email to <strong>{data.email}</strong></li>
          <li>Subject: IJEAI Submission – [Paper Title]</li>
          <li>Include cover letter with author details and declaration</li>
          <li>Must be original, not under simultaneous review elsewhere</li>
          <li>Receipt acknowledged within 3 working days</li>
        </ul>
      </div>

      <div className={styles.guidelineBlock}>
        <h4>Peer Review Process</h4>
        <ul>
          <li>Double-blind peer review by minimum two independent reviewers</li>
          <li>Typical review turnaround: 4–6 weeks</li>
          <li>Outcomes: Accept, Minor Revision, Major Revision, Reject</li>
        </ul>
      </div>

      <div className={styles.guidelineBlock}>
        <h4>Publication Ethics</h4>
        <ul>
          <li>Follows COPE (Committee on Publication Ethics) guidelines</li>
          <li>Plagiarism similarity index must not exceed 20%</li>
          <li>All authors must have contributed substantially to the work</li>
          <li>Conflicts of interest must be declared in the cover letter</li>
        </ul>
      </div>

      <div className={styles.guidelineBlock}>
        <h4>Article Processing Charges</h4>
        <ul>
          <li>APC: ₹2,000 (India) / USD 50 (International) upon acceptance</li>
          <li>Waivers available for authors from low-income countries</li>
          <li>No submission fee at review stage</li>
        </ul>
      </div>
    </div>
  )
}
