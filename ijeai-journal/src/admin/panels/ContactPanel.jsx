import s from '../Admin.module.css'

export default function ContactPanel({ data, update, saveAll }) {
  return (
    <div>
      <div className={s.card}>
        <div className={s.cardHeader}>
          <div><h3>Contact &amp; Publisher Info</h3><p>Shown on the Contact page and footer</p></div>
          <button className={`${s.btn} ${s.btnSolid}`} onClick={() => saveAll()}>💾 Save &amp; Publish</button>
        </div>
        <div className={s.cardBody}>
          <div className={s.formGrid}>
            <div className={s.fg}><label>Publisher Name</label><input value={data.publisher} onChange={e => update({ publisher: e.target.value })} /></div>
            <div className={s.fg}><label>Editor Email</label><input type="email" value={data.email}     onChange={e => update({ email: e.target.value })}     /></div>
            <div className={s.fg}><label>Website</label><input value={data.website}   onChange={e => update({ website: e.target.value })}   placeholder="www.example.com" /></div>
            <div className={s.fg}><label>Country</label><input value={data.country}   onChange={e => update({ country: e.target.value })}   /></div>
          </div>
          <div className={s.fg}><label>Address</label><input value={data.address} onChange={e => update({ address: e.target.value })} placeholder="City, State, Country" /></div>
        </div>
      </div>
    </div>
  )
}
