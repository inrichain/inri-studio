import { useEffect, useState } from 'react'
import { getUploadQuote } from '../lib/api/uploadApi'

export function useUploadQuote(kind: 'image'|'audio'|'video') {
  const [data, setData] = useState<any>(null)
  useEffect(() => {
    getUploadQuote(kind).then(setData).catch(() => setData(null))
  }, [kind])
  return data
}
