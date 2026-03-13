import { Outlet, NavLink } from 'react-router-dom'
import styles from './Layout.module.css'

const NAV_LINKS = [
  { to: '/',            label: 'Home'           },
  { to: '/about',       label: 'About'          },
  { to: '/scope',       label: 'Aim & Scope'    },
  { to: '/board',       label: 'Editorial Board'},
  { to: '/issue',       label: 'Current Issue'  },
  { to: '/guidelines',  label: 'Author Guidelines'},
  { to: '/contact',     label: 'Contact'        },
]

export default function Layout({ data }) {
  return (
    <div className={styles.root}>
      {/* Top Strip */}
      <div className={styles.topStrip}>
        Open Access &middot; Peer-Reviewed &middot; Published by{' '}
        <span>{data.publisher}</span> &middot; ISSN:{' '}
        <span>{data.issn}</span> &middot; Quarterly
      </div>

      {/* Masthead */}
      <header className={styles.masthead}>
        <div className={styles.mastheadLogo}>
          <div className={styles.logoEmblem}>
            <svg viewBox="0 0 42 42" fill="none" width="42" height="42">
              <rect x="4"  y="4"  width="15" height="15" fill="#1a7a6e"/>
              <rect x="23" y="4"  width="15" height="15" fill="#c9973a" opacity="0.85"/>
              <rect x="4"  y="23" width="15" height="15" fill="#c9973a" opacity="0.85"/>
              <rect x="23" y="23" width="15" height="15" fill="#1a7a6e"/>
              <circle cx="21" cy="21" r="4" fill="white"/>
            </svg>
          </div>
          <div className={styles.mastheadTitles}>
            <h1>International Journal of<br /><em>Engineering, Arts and Innovation</em></h1>
            <p>IJEAI &middot; Published by {data.publisher} &middot; Est. 2026</p>
          </div>
        </div>
        <div className={styles.mastheadMeta}>
          <div><span className={styles.issnBadge}>ISSN: {data.issn}</span></div>
          <div>Frequency: Quarterly</div>
          <div>Language: English</div>
          <div>Open Access Journal</div>
        </div>
      </header>

      {/* Nav */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            className={`${styles.navLink} ${styles.navSubmit}`}
            href={`mailto:${data.email}?subject=IJEAI Submission`}
          >
            Submit Paper
          </a>
        </div>
      </nav>

      {/* Page Content */}
      <main className={styles.main}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={`${styles.footerInner} site-wrap`}>
          <div className={styles.footerBrand}>
            <h3>International Journal of Engineering, Arts and Innovation</h3>
            <p>A peer-reviewed, open access journal published by {data.publisher}. Bridging engineering sciences, creative arts, and applied innovation since 2026.</p>
            <p className={styles.footerMeta}>
              ISSN: {data.issn} &middot; Published in {data.country} &middot; Open Access CC BY 4.0
            </p>
          </div>
          <div className={styles.footerCol}>
            <h4>Journal</h4>
            <NavLink to="/about">About the Journal</NavLink>
            <NavLink to="/scope">Aim &amp; Scope</NavLink>
            <NavLink to="/board">Editorial Board</NavLink>
            <NavLink to="/issue">Current Issue</NavLink>
          </div>
          <div className={styles.footerCol}>
            <h4>Authors</h4>
            <NavLink to="/guidelines">Author Guidelines</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </div>
        </div>
        <div className={`${styles.footerBottom} site-wrap`}>
          <span>&copy; 2026 {data.publisher}. All rights reserved.</span>
          <span>{data.website} &middot; {data.address}</span>
        </div>
      </footer>
    </div>
  )
}
