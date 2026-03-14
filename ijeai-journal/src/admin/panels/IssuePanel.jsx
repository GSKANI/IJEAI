import s from '../Admin.module.css'

export default function IssuePanel({ data, update, saveAll }) {
  return (
    <div>
      <div className={s.card}>
        <div className={s.cardHeader}>
          <div><h3>Current Issue</h3><p>Update volume and issue details shown on the journal</p></div>
          <button className={`${s.btn} ${s.btnSolid}`} onClick={() => saveAll()}>💾 Save &amp; Publish</button>
        </div>
        <div className={s.cardBody}>
          <div className={s.formGrid3}>
            <div className={s.fg}>
              <label>Volume</label>
              <input value={data.issueVol} onChange={e => update({ issueVol: e.target.value })} placeholder="Volume 1" />
            </div>
            <div className={s.fg}>
              <label>Issue Number</label>
              <input value={data.issueNum} onChange={e => update({ issueNum: e.target.value })} placeholder="Issue 1" />
            </div>
            <div className={s.fg}>
              <label>Period</label>
              <input value={data.issuePeriod} onChange={e => update({ issuePeriod: e.target.value })} placeholder="January – March 2026" />
            </div>
          </div>
          <div className={s.highlightBox}>
            <strong>Current:</strong> {data.issueVol} · {data.issueNum} · {data.issuePeriod}
          </div>
        </div>
      </div>
    </div>
  )
}
