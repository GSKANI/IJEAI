import { useState } from 'react'
import { saveAdminData } from '../adminData'
import { DEFAULT_DATA } from '../../data'
import s from '../Admin.module.css'

export default function SettingsPanel({ data, update, saveAll, showToast, setPw }) {
  const [newPw,    setNewPw]    = useState('')
  const [confirmPw,setConfirmPw]= useState('')

  function changePassword() {
    if (!newPw)          { showToast('Enter a new password.', 'err'); return }
    if (newPw !== confirmPw) { showToast('Passwords do not match.', 'err'); return }
    setPw(newPw)
    setNewPw(''); setConfirmPw('')
    showToast('Password updated!')
  }

  function exportData() {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'ijeai-data.json'
    a.click()
  }

  function resetData() {
    if (!confirm('Reset ALL journal data to defaults? This cannot be undone.')) return
    const fresh = structuredClone(DEFAULT_DATA)
    saveAdminData(fresh)
    window.location.reload()
  }

  return (
    <div>
      {/* ISSN */}
      <div className={s.card}>
        <div className={s.cardHeader}><div><h3>Journal Settings</h3><p>Core journal identifiers</p></div></div>
        <div className={s.cardBody}>
          <div className={s.formGrid}>
            <div className={s.fg}>
              <label>ISSN</label>
              <input value={data.issn} onChange={e => update({ issn: e.target.value })} placeholder="XXXX-XXXX" />
            </div>
          </div>
          <button className={`${s.btn} ${s.btnSolid}`} onClick={() => saveAll()}>💾 Save &amp; Publish</button>
        </div>
      </div>

      {/* Password */}
      <div className={s.card}>
        <div className={s.cardHeader}><div><h3>Change Password</h3><p>Admin login password</p></div></div>
        <div className={s.cardBody}>
          <div className={s.formGrid}>
            <div className={s.fg}><label>New Password</label><input type="password" value={newPw} onChange={e => setNewPw(e.target.value)} placeholder="••••••••" /></div>
            <div className={s.fg}><label>Confirm Password</label><input type="password" value={confirmPw} onChange={e => setConfirmPw(e.target.value)} placeholder="••••••••" /></div>
          </div>
          <button className={`${s.btn} ${s.btnTeal}`} onClick={changePassword}>Update Password</button>
        </div>
      </div>

      {/* Data Management */}
      <div className={s.card}>
        <div className={s.cardHeader}><div><h3>Data Management</h3><p>Export or reset journal data</p></div></div>
        <div className={s.cardBody} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button className={`${s.btn} ${s.btnGold}`} onClick={exportData}>⬇ Export JSON Backup</button>
          <button className={`${s.btn} ${s.btnRed}`}  onClick={resetData}>↺ Reset to Defaults</button>
        </div>
      </div>
    </div>
  )
}
