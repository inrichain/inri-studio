import { AppShell } from '../components/layout/AppShell'
import { CreateNFTForm } from '../components/nft/CreateNFTForm'

export function CollectionDetailsPage() {
  return (
    <AppShell>
      <section className="grid grid-2">
        <div className="card highlight">
          <span className="badge success">Verified collection</span>
          <h2 className="section-title" style={{ marginTop: 16 }}>Collection control panel</h2>
          <p className="section-copy">
            This space is meant to show collection branding, contract address, royalty setup, minted items and creator actions in a cleaner premium layout.
          </p>
        </div>
        <div className="card soft">
          <p className="kicker">Planned modules</p>
          <ul className="feature-list">
            <li><strong>Collection header</strong><span className="muted">Logo, banner, chain, address and status badges.</span></li>
            <li><strong>Creator controls</strong><span className="muted">Pause minting, reveal, update metadata and adjust pricing flows.</span></li>
            <li><strong>NFT list</strong><span className="muted">Media cards for minted items and token types.</span></li>
          </ul>
        </div>
      </section>
      <CreateNFTForm />
    </AppShell>
  )
}
