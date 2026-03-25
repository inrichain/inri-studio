import { MEDIA_RULES, type MediaKind } from './media'

export function getMediaPrice(kind: MediaKind) {
  return MEDIA_RULES[kind].priceInri
}
