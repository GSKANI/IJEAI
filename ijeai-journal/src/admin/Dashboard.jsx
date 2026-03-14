import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { loadAdminData, saveAdminData } from './adminData'
import PapersPanel    from './panels/PapersPanel'
import BoardPanel     from './panels/BoardPanel'
import HomepagePanel  from './panels/HomepagePanel'
import IssuePanel     from './panels/IssuePanel'
import ContactPanel   from './panels/ContactPanel'
import SettingsPanel  from './panels/SettingsPanel'
import OverviewPanel  from './panels/OverviewPanel'
import Toast          from './Toast'
import s              from './Admin.module.css'

const TABS = [
  { id: 'overview', label: '▦ Overview'      },
  { id: 'papers',   label: '📄 Papers'        },
  { id: 'board',    label: '👥 Board'         },
  { id: 'hero',     label: '✦ Homepage'      },
  { id: 'issue',    label: '📰 Current Issue' },
  { id: 'contact',  label: '✉ Contact Info'  },
  { id: 'settings', label: '⚙ Settings'      },
]

export default function Dashboard({ onLogout, pw, setPw }) {
  const [tab, setTab]     = useState('overview')
  const [data, setData]   = useState(loadAdminData)
  const [dirty, setDirty] = useState(false)
  const [toast, setToast] = useState(null)

  const showToast = (msg, type = 'ok') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3000)
  }

  const update = useCallback((partial) => {
    setData(prev => ({ ...prev, ...partial }))
    setDirty(true)
  }, [])

  const saveAll = useCallback((extraData) => {
    const merged = extraData ? { ...data, ...extraData } : data
    setData(merged)
    saveAdminData(merged)
    setDirty(false)
    showToast('All changes saved and published to journal!')
  }, [data])

  const panelProps = { data, update, saveAll, showToast }

  return (
    <div className={s.adminApp}>
      {/* Topbar */}
      <div className={s.topbar}>
        <div className={s.topbarBrand}>
          <div className={s.tbEmblem}>
            <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
              <rect x="1"    y="1"    width="7.5" height="7.5" fill="white" opacity="0.9"/>
              <rect x="11.5" y="1"    width="7.5" height="7.5" fill="white" opacity="0.5"/>
              <rect x="1"    y="11.5" width="7.5" height="7.5" fill="white" opacity="0.5"/>
              <rect x="11.5" y="11.5" width="7.5" height="7.5" fill="white" opacity="0.9"/>
            </svg>
          </div>
          <span>IJEAI <em>Admin</em></span>
        </div>
        <div className={s.topbarRight}>
          {dirty && <span className={s.dirtyBadge}>● Unsaved changes</span>}
          <Link to="/" className={`${s.tbBtn} ${s.tbBtnGhost}`} target="_blank">
            ↗ View Journal
          </Link>
          <button className={`${s.tbBtn} ${s.tbBtnRed}`} onClick={onLogout}>Sign Out</button>
        </div>
      </div>

      {/* Tab bar */}
      <div className={s.tabBar}>
        {TABS.map(t => (
          <button
            key={t.id}
            className={`${s.tabBtn} ${tab === t.id ? s.tabActive : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Panel content */}
      <div className={s.content}>
        {tab === 'overview' && <OverviewPanel {...panelProps} setTab={setTab} />}
        {tab === 'papers'   && <PapersPanel   {...panelProps} />}
        {tab === 'board'    && <BoardPanel     {...panelProps} />}
        {tab === 'hero'     && <HomepagePanel  {...panelProps} />}
        {tab === 'issue'    && <IssuePanel     {...panelProps} />}
        {tab === 'contact'  && <ContactPanel   {...panelProps} />}
        {tab === 'settings' && <SettingsPanel  {...panelProps} pw={pw} setPw={setPw} />}
      </div>

      {toast && <Toast msg={toast.msg} type={toast.type} />}
    </div>
  )
}
