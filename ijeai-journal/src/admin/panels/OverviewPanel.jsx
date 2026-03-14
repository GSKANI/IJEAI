import s from '../Admin.module.css'

export default function OverviewPanel({ data, saveAll, setTab }) {
  return (
    <div>
      {/* Stats */}
      <div className={s.statsRow}>
        <div className={s.statCard}>
          <span className={s.statNum}>{data.papers.length}</span>
          <span className={s.statLbl}>Published Papers</span>
        </div>
        <div className={s.statCard} style={{ borderTopColor: 'var(--gold, #e8b75a)' }}>
          <span className={s.statNum} style={{ color: '#e8b75a' }}>{data.board.length}</span>
          <span className={s.statLbl}>Board Members</span>
        </div>
        <div className={s.statCard} style={{ borderTopColor: '#4a9eff' }}>
          <span className={s.statNum} style={{ color: '#4a9eff' }}>
            {data.issueVol?.replace('Volume', 'Vol')}
          </span>
          <span className={s.statLbl}>Current Volume</span>
        </div>
        <div className={s.statCard} style={{ borderTopColor: '#7a8fa6' }}>
          <span className={s.statNum} style={{ color: '#7a8fa6', fontSize: 18, paddingTop: 8 }}>
            {data.issn === 'XXXX-XXXX' ? 'Pending' : 'Assigned'}
          </span>
          <span className={s.statLbl}>ISSN Status</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className={s.card}>
        <div className={s.cardHeader}><h3>Quick Actions</h3></div>
        <div className={s.cardBody}>
          <div className={s.qaGrid}>
            {[
              { icon: '+', label: 'Add Paper',        tab: 'papers'  },
              { icon: '👤', label: 'Add Board Member', tab: 'board'   },
              { icon: '✦', label: 'Edit Homepage',    tab: 'hero'    },
              { icon: '📰', label: 'Edit Issue',       tab: 'issue'   },
              { icon: '✉', label: 'Edit Contact',     tab: 'contact' },
            ].map(a => (
              <div key={a.label} className={s.qaBtn} onClick={() => setTab(a.tab)}>
                <span className={s.qaIcon}>{a.icon}</span>
                {a.label}
              </div>
            ))}
            <div className={s.qaBtn} style={{ borderColor: '#00c4a8', color: '#00c4a8' }} onClick={() => saveAll()}>
              <span className={s.qaIcon}>💾</span>
              Save All Changes
            </div>
          </div>
        </div>
      </div>

      {/* Papers list */}
      <div className={s.card}>
        <div className={s.cardHeader}><h3>All Papers</h3></div>
        <div className={s.cardBody}>
          {data.papers.length === 0
            ? <div className={s.emptyState}>No papers yet.</div>
            : data.papers.map(p => (
              <div key={p.id} className={s.paperRow}>
                <div className={s.paperRowNum}>{p.num}</div>
                <div className={s.paperRowBody}>
                  <h4>{p.title}</h4>
                  <p>{p.authors} · Pages {p.pages} · {p.area}</p>
                  <div style={{ marginTop: 6 }}>
                    {p.tags.map(t => <span key={t} className={s.ptag}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
