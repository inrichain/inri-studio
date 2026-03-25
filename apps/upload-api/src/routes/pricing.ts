import { getPricing } from '../services/pricingService'

export function pricingRoute(url: URL) {
  const kind = url.searchParams.get('kind') || 'image'
  return getPricing(kind) || { error: 'Unknown kind' }
}
