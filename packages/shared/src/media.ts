export type MediaKind = 'image' | 'audio' | 'video'

export const MEDIA_RULES = {
  image: {
    maxBytes: 10 * 1024 * 1024,
    accepted: ['image/png', 'image/jpeg', 'image/webp', 'image/gif'],
    priceInri: 1,
  },
  audio: {
    maxBytes: 50 * 1024 * 1024,
    accepted: ['audio/mpeg', 'audio/wav', 'audio/ogg'],
    priceInri: 3,
  },
  video: {
    maxBytes: 200 * 1024 * 1024,
    accepted: ['video/mp4', 'video/webm'],
    priceInri: 8,
  },
} as const
