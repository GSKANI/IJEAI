import s from './Admin.module.css'

export default function Modal({ title, onClose, children, footer }) {
  return (
    <div className={s.modalBg} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={s.modal}>
        <div className={s.modalHeader}>
          <h3>{title}</h3>
          <button className={s.modalClose} onClick={onClose}>&times;</button>
        </div>
        <div className={s.modalBody}>{children}</div>
        {footer && <div className={s.modalFooter}>{footer}</div>}
      </div>
    </div>
  )
}
