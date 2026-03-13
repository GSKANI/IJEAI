import { useState } from 'react'
import Modal from '../Modal'
import { SUBJECT_AREAS } from '../adminData'
import s from '../Admin.module.css'

const BLANK = { num: '', title: '', authors: '', area: 'Artificial Intelligence', pages: '', tags: '', abstract: '', date: new Date().toISOString().slice(0,10) }

export default function PapersPanel({ data, saveAll, showToast }) {
  const [modal, setModal] = useState(null) // null | 'add' | paperId
  const [form, setForm]   = useState(BLANK)

  function openAdd() {
    const nextNum = String(data.papers.length + 1).padStart(2, '0')
    setForm({ ...BLANK, num: nextNum })
    setModal('add')
  }

  function openEdit(p) {
    setForm({ ...p, tags: p.tags.join(', ') })
    setModal(p.id)
  }

  function set(k, v) { setForm(f => ({ ...f, [k]: v })) }

  function save() {
    if (!form.title.trim() || !form.authors.trim()) { showToast('Title and authors are required.', 'err'); return }
    const tags = form.tags.split(',').map(t => t.trim()).filter(Boolean)
    if (modal === 'add') {
      const id = Date.now()
      const newPapers = [...data.papers, { ...form, id, tags, pages: form.pages || '—' }]
      saveAll({ papers: newPapers })
    } else {
      const newPapers = data.papers.map(p => p.id === modal ? { ...form, id: modal, tags, pages: form.pages || '—' } : p)
      saveAll({ papers: newPapers })
    }
    setModal(null)
    showToast(modal === 'add' ? 'Paper added!' : 'Paper updated!')
  }

  function deletePaper(id) {
    if (!confirm('Delete this paper? This cannot be undone.')) return
    saveAll({ papers: data.papers.filter(p => p.id !== id) })
    showToast('Paper deleted.')
  }

  return (
    <div>
      <div className={s.card}>
        <div className={s.cardHeader}>
          <div><h3>Published Papers</h3><p>Add, edit or remove papers from the journal</p></div>
          <button className={`${s.btn} ${s.btnTeal}`} onClick={openAdd}>+ Add Paper</button>
        </div>
        <div className={s.cardBody}>
          {data.papers.length === 0
            ? <div className={s.emptyState}>No papers yet. Click "+ Add Paper" to begin.</div>
            : data.papers.map(p => (
              <div key={p.id} className={s.paperRow}>
                <div className={s.paperRowNum}>{p.num}</div>
                <div className={s.paperRowBody}>
                  <h4>{p.title}</h4>
                  <p>{p.authors} · Pages {p.pages} · {p.area} · {p.date}</p>
                  <div style={{ marginTop: 6 }}>
                    {p.tags.map(t => <span key={t} className={s.ptag}>{t}</span>)}
                  </div>
                </div>
                <div className={s.paperRowActions}>
                  <button className={`${s.btn} ${s.btnGold} ${s.btnSm}`} onClick={() => openEdit(p)}>Edit</button>
                  <button className={`${s.btn} ${s.btnRed}  ${s.btnSm}`} onClick={() => deletePaper(p.id)}>Delete</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {modal && (
        <Modal
          title={modal === 'add' ? 'Add New Paper' : 'Edit Paper'}
          onClose={() => setModal(null)}
          footer={
            <>
              <button className={`${s.btn} ${s.btnTeal}`} onClick={() => setModal(null)}>Cancel</button>
              <button className={`${s.btn} ${s.btnSolid}`} onClick={save}>
                {modal === 'add' ? 'Add Paper' : 'Save Changes'}
              </button>
            </>
          }
        >
          <div className={s.formGrid}>
            <div className={s.fg}><label>Paper Number</label><input value={form.num}  onChange={e => set('num', e.target.value)}  placeholder="01" /></div>
            <div className={s.fg}><label>Date Accepted</label><input type="date" value={form.date} onChange={e => set('date', e.target.value)} /></div>
          </div>
          <div className={s.fg}><label>Title *</label><input value={form.title}   onChange={e => set('title', e.target.value)}   placeholder="Full paper title" /></div>
          <div className={s.fg}><label>Authors *</label><input value={form.authors} onChange={e => set('authors', e.target.value)} placeholder="Author 1, Author 2" /></div>
          <div className={s.formGrid}>
            <div className={s.fg}>
              <label>Subject Area</label>
              <select value={form.area} onChange={e => set('area', e.target.value)}>
                {SUBJECT_AREAS.map(a => <option key={a}>{a}</option>)}
              </select>
            </div>
            <div className={s.fg}><label>Page Range</label><input value={form.pages} onChange={e => set('pages', e.target.value)} placeholder="e.g. 42–56" /></div>
          </div>
          <div className={s.fg}><label>Tags (comma-separated)</label><input value={form.tags} onChange={e => set('tags', e.target.value)} placeholder="AI, Machine Learning" /></div>
          <div className={s.fg}><label>Abstract</label><textarea value={form.abstract} onChange={e => set('abstract', e.target.value)} placeholder="Paper abstract..." /></div>
        </Modal>
      )}
    </div>
  )
}
