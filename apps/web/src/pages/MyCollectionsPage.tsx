import { AppShell } from '../components/layout/AppShell'
import { CONTRACTS } from '../lib/contracts/addresses'

export function MyCollectionsPage() {
  return (
    <AppShell>
      <div className="card">
        <h2>My Collections</h2>
        <p className="muted">This page will read collections created by the connected wallet via the Registry and Factory.</p>
        <p className="muted">Registry: {CONTRACTS.registry}</p>
        <p className="muted">Factory: {CONTRACTS.factory}</p>
      </div>
    </AppShell>
  )
}
