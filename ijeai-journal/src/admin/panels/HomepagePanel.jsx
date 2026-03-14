import s from '../Admin.module.css'

export default function HomepagePanel({ data, update, saveAll }) {
  return (
    <div>
      <div className={s.card}>
        <div className={s.cardHeader}>
          <div><h3>Homepage Content</h3><p>Edit hero banner and homepage text</p></div>
          <button className={`${s.btn} ${s.btnSolid}`} onClick={() => saveAll()}>💾 Save &amp; Publish</button>
        </div>
        <div className={s.cardBody}>
          <div className={s.fg}>
            <label>Hero Label (above heading)</label>
            <input value={data.heroLabel} onChange={e => update({ heroLabel: e.target.value })} placeholder="Volume 1 · Issue 1 · January 2026" />
          </div>
          <div className={s.fg}>
            <label>Hero Heading Line 1</label>
            <input value={data.heroH1} onChange={e => update({ heroH1: e.target.value })} placeholder="Advancing Knowledge Across" />
          </div>
          <div className={s.fg}>
            <label>Hero Heading Line 2 (italic accent)</label>
            <input value={data.heroH2} onChange={e => update({ heroH2: e.target.value })} placeholder="Engineering, Arts and Innovation" />
          </div>
          <div className={s.fg}>
            <label>Hero Description</label>
            <textarea value={data.heroDesc} onChange={e => update({ heroDesc: e.target.value })} rows={3} />
          </div>
          <div className={s.highlightBox}>
            Changes are saved to the journal when you click <strong>Save &amp; Publish</strong>.
          </div>
        </div>
      </div>
    </div>
  )
}
