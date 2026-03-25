import { plans } from '../config/plans'

export function getPricing(kind: string) {
  return plans[kind as keyof typeof plans] ?? null
}
