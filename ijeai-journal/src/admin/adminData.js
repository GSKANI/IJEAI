import { DEFAULT_DATA } from '../data'

export function loadAdminData() {
  try {
    const stored = localStorage.getItem('ijeai_data')
    return stored ? { ...DEFAULT_DATA, ...JSON.parse(stored) } : structuredClone(DEFAULT_DATA)
  } catch {
    return structuredClone(DEFAULT_DATA)
  }
}

export function saveAdminData(data) {
  localStorage.setItem('ijeai_data', JSON.stringify(data))
}

export const ADMIN_EMAIL = 'admin@sead.com'
export const DEFAULT_PW  = 'admin123'

export const SUBJECT_AREAS = [
  'Artificial Intelligence',
  'Engineering Sciences',
  'Computer Science',
  'Arts & Humanities',
  'Design & Innovation',
  'Smart Technologies',
  'Sustainability',
  'Interdisciplinary Research',
]
