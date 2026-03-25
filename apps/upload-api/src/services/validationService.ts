import { plans } from '../config/plans'

export function validateKind(kind: string) {
  return kind in plans
}
