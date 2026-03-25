import { APP_CONFIG } from '../../app/config'

export async function getUploadQuote(kind: 'image'|'audio'|'video') {
  const res = await fetch(`${APP_CONFIG.uploadApiBaseUrl}/pricing?kind=${kind}`)
  return res.json()
}
