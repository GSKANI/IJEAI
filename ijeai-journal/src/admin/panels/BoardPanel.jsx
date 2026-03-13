import { useState } from 'react'
import Modal from '../Modal'
import s from '../Admin.module.css'

const ROLES     = ['Editor-in-Chief', 'Associate Editor', 'Board Member']
const ROLE_CLS  = { 'Editor-in-Chief': s.roleEic, 'Associate Editor': s.roleAssoc, 'Board Member': s.roleMember }
const BLANK     = { initials: '', name: '', role: 'Board Member', institution: '', country: '' }

export default function BoardPanel({ data, saveAll, showToast }) {
  const [modal, setModal] = useState(null)
  const [form,  setForm]  = useState(BLANK)

  function openAdd() { setForm(BLANK); setModal('add') }
  function openEdit(m) { setForm({ ...m }); setModal(m.id) }
  function set(k, v) { setForm(f => ({ ...f, [k]: v })) }

  function save() {
    if (!form.name.trim()) { showToast('Name is required.', 'err'); return }
    const initials = form.initials.trim().toUpperCase() ||
      form.name.split(' ').map(x => x[0]).join('').slice(0, 2).toUpperCase()
    if (modal === 'add') {
      const id = Date.now()
      saveAll({ board: [...data.board, { ...form, id, initials }] })
    } else {
      saveAll({ board: data.board.map(m => m.id === modal ? { ...form, id: modal, initials } : m) })
    }
    setModal(null)
    showToast(modal === 'add' ? 'Board member added!' : 'Member updated!')
  }

  function deleteMember(id) {
    if (!confirm('Remove this board member?')) return
    saveAll({ board: data.board.filter(m => m.id !== id) })
    showToast('Member removed.')
  }

  return (
    <div>
      <div className={s.card}>
        <div className={s.cardHeader}>
          <div><h3>Editorial Board</h3><p>Manage editors and board members</p></div>
          <button className={`${s.btn} ${s.btnTeal}`} onClick={openAdd}>+ Add Member</button>
        </div>
        <div className={s.cardBody}>
          {ROLES.map(role => {
            const members = data.board.filter(m => m.role === role)
            if (!members.length) return null
            return (
              <div key={role}>
                <div className={s.sectionLead}>{role}{role !== 'Editor-in-Chief' ? 's' : ''}</div>
                {members.map(m => (
                  <div key={m.id} className={s.bmRow}>
                    <div className={s.bmAvatar}>{m.initials}</div>
                    <div className={s.bmInfo}>
                      <h4>{m.name} <span className={`${s.roleBadge} ${ROLE_CLS[m.role]}`} style={{ marginLeft: 8 }}>{m.role}</span></h4>
                      <p>{m.institution} &nbsp;·&nbsp; {m.country}</p>
                    </div>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button className={`${s.btn} ${s.btnGold} ${s.btnSm}`} onClick={() => openEdit(m)}>Edit</button>
                      <button className={`${s.btn} ${s.btnRed}  ${s.btnSm}`} onClick={() => deleteMember(m.id)}>Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            )
          })}
          {data.board.length === 0 && <div className={s.emptyState}>No board members. Click "+ Add Member".</div>}
        </div>
      </div>

      {modal && (
        <Modal
          title={modal === 'add' ? 'Add Board Member' : 'Edit Board Member'}
          onClose={() => setModal(null)}
          footer={
            <>
              <button className={`${s.btn} ${s.btnTeal}`} onClick={() => setModal(null)}>Cancel</button>
              <button className={`${s.btn} ${s.btnSolid}`} onClick={save}>{modal === 'add' ? 'Add Member' : 'Save'}</button>
            </>
          }
        >
          <div className={s.formGrid}>
            <div className={s.fg}><label>Initials (2–3 chars)</label><input value={form.initials} onChange={e => set('initials', e.target.value)} maxLength={3} placeholder="JS" /></div>
            <div className={s.fg}>
              <label>Role</label>
              <select value={form.role} onChange={e => set('role', e.target.value)}>
                {ROLES.map(r => <option key={r}>{r}</option>)}
              </select>
            </div>
          </div>
          <div className={s.fg}><label>Full Name *</label><input value={form.name}        onChange={e => set('name', e.target.value)}        placeholder="Dr. Jane Smith" /></div>
          <div className={s.formGrid}>
            <div className={s.fg}><label>Institution</label><input value={form.institution} onChange={e => set('institution', e.target.value)} placeholder="University Name" /></div>
            <div className={s.fg}><label>Country</label><input    value={form.country}     onChange={e => set('country', e.target.value)}     placeholder="Country" /></div>
          </div>
        </Modal>
      )}
    </div>
  )
}
