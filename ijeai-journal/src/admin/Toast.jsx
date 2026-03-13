import s from './Admin.module.css'

export default function Toast({ msg, type }) {
  return (
    <div className={`${s.toast} ${type === 'err' ? s.toastErr : ''} ${s.toastShow}`}>
      {msg}
    </div>
  )
}
