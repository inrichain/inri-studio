import { AppShell } from '../components/layout/AppShell'
import { CreateNFTForm } from '../components/nft/CreateNFTForm'

export function CollectionDetailsPage() {
  return (
    <AppShell>
      <div className="card" style={{ marginBottom: 16 }}>
        <h2>Collection Details</h2>
        <p className="muted">Header, address, verification badge, settings and NFT list go here.</p>
      </div>
      <CreateNFTForm />
    </AppShell>
  )
}
