import { useState } from 'react'
import { ADMIN_EMAIL } from './adminData'
import s from './Admin.module.css'

export default function Login({ onLogin, adminPw }) {
  const [email, setEmail] = useState(ADMIN_EMAIL)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function tryLogin() {
    if (email.trim() === ADMIN_EMAIL && password === adminPw) {
      onLogin(true)
    } else {
      setError('Invalid email or password.')
    }
  }

  return (
    <div className={s.loginScreen}>
      <div className={s.loginCard}>
        <div className={s.loginLogo}>
          <div className={s.loginEmblem}>
            <svg viewBox="0 0 30 30" fill="none" width="30" height="30">
              <rect x="2"  y="2"  width="11" height="11" fill="white" opacity="0.9"/>
              <rect x="17" y="2"  width="11" height="11" fill="white" opacity="0.5"/>
              <rect x="2"  y="17" width="11" height="11" fill="white" opacity="0.5"/>
              <rect x="17" y="17" width="11" height="11" fill="white" opacity="0.9"/>
            </svg>
          </div>
          <div className={s.loginBrand}>
            <h1>IJEAI Admin</h1>
            <p>Sead</p>
          </div>
        </div>

        <h2>Admin Panel</h2>
        <p className={s.sub}>Sign in to manage your journal content</p>

        {error && <div className={s.loginError}>{error}</div>}

        <div className={s.field}>
          <label>Admin Email</label>
          <input
            type="email" value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && tryLogin()}
          />
        </div>
        <div className={s.field}>
          <label>Password</label>
          <input
            type="password" value={password} placeholder="••••••••"
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && tryLogin()}
          />
        </div>
        <button className={s.loginBtn} onClick={tryLogin}>Sign In</button>
        <div className={s.loginHint}>Default password: admin123</div>
      </div>
    </div>
  )
}
