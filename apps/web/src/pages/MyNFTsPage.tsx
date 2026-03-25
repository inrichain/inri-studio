import { AppShell } from '../components/layout/AppShell'

const items = [
  { name: 'Genesis Frame', type: 'Image', collection: 'INRI Collection 721' },
  { name: 'Studio Pass', type: 'Audio', collection: 'INRI Collection 1155' },
]

export function MyNFTsPage() {
  return (
    <AppShell>
      <section className="card highlight">
        <p className="kicker">My NFTs</p>
        <h2 className="section-title">Track your minted media and owned collectibles.</h2>
        <p className="section-copy">This page will eventually combine wallet holdings, creator drops and metadata previews in one dashboard.</p>
      </section>

      <section className="grid grid-2">
        {items.map((item) => (
          <div className="card collection-card" key={item.name}>
            <div className="collection-top">
              <div>
                <span className="badge">{item.type}</span>
                <h3 style={{ marginTop: 14 }}>{item.name}</h3>
                <p className="muted">{item.collection}</p>
              </div>
            </div>
            <div className="collection-actions">
              <button className="button secondary">Open NFT</button>
            </div>
          </div>
        ))}
      </section>
    </AppShell>
  )
}
