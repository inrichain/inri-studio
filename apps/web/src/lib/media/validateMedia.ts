import { MEDIA_LIMITS } from './pricingRules'

export function validateMedia(kind: keyof typeof MEDIA_LIMITS, file?: File | null) {
  if (!file) return 'No file selected.'
  const maxBytes = MEDIA_LIMITS[kind].maxMb * 1024 * 1024
  if (file.size > maxBytes) return `File exceeds ${MEDIA_LIMITS[kind].maxMb} MB.`
  return null
}
