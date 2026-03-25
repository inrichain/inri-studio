import { AppShell } from '../components/layout/AppShell'

export function MyNFTsPage() {
  return (
    <AppShell>
      <div className="card">
        <h2>My NFTs</h2>
        <p className="muted">This page will list NFTs owned or minted by the connected wallet.</p>
      </div>
    </AppShell>
  )
}
