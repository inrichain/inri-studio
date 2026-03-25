import { Link } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell'
import { CONTRACTS } from '../lib/contracts/addresses'

const collections = [
  {
    name: 'INRI Collection 721',
    address: '0xeacc466b14238f7eaD98be4d0A74f7DDc529F268',
    type: 'ERC-721',
    status: 'Verified',
  },
  {
    name: 'INRI Collection 1155',
    address: '0x497843b780508e4823198d24F15019A3469a0f9E',
    type: 'ERC-1155',
    status: 'Verified',
  },
]

export function MyCollectionsPage() {
  return (
    <AppShell>
      <section className="grid grid-2">
        <div className="card highlight">
          <p className="kicker">Creator dashboard</p>
          <h2 className="section-title">Manage your collections from one place.</h2>
          <p className="section-copy">
            This page will read the connected wallet against the INRI Registry and surface owned or created collections with quick actions.
          </p>
        </div>
        <div className="card soft">
          <p className="kicker">Live contract stack</p>
          <ul className="feature-list">
            <li>
              <strong>Registry</strong>
              <span className="muted">{CONTRACTS.registry}</span>
            </li>
            <li>
              <strong>Factory</strong>
              <span className="muted">{CONTRACTS.factory}</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="grid">
        {collections.map((collection) => (
          <div className="card collection-card" key={collection.address}>
            <div className="collection-top">
              <div>
                <span className="badge success">{collection.status}</span>
                <h3 style={{ marginTop: 14 }}>{collection.name}</h3>
                <p className="muted">{collection.address}</p>
              </div>
              <div className="collection-meta">
                <span className="badge">{collection.type}</span>
              </div>
            </div>
            <div className="collection-actions">
              <Link className="button" to={`/collections/${collection.address}`}>Open Collection</Link>
              <Link className="button secondary" to={`/collections/${collection.address}/create-nft`}>Create NFT</Link>
            </div>
          </div>
        ))}
      </section>
    </AppShell>
  )
}
