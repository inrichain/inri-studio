import { AppShell } from '../components/layout/AppShell'

const verified = [
  {
    name: 'INRI Collection 721',
    copy: 'A verified ERC-721 collection created through the INRI Studio factory.',
  },
  {
    name: 'INRI Collection 1155',
    copy: 'A verified ERC-1155 collection ready for editions, media series and creator drops.',
  },
]

export function ExplorePage() {
  return (
    <AppShell>
      <section className="card highlight">
        <p className="kicker">Explore</p>
        <h2 className="section-title">Featured and verified collections on INRI.</h2>
        <p className="section-copy">This page is the storefront layer of the registry and should become the public face of INRI media drops.</p>
      </section>

      <section className="grid grid-2">
        {verified.map((item) => (
          <div className="card collection-card" key={item.name}>
            <span className="badge success">Verified</span>
            <h3 style={{ marginTop: 14 }}>{item.name}</h3>
            <p className="muted">{item.copy}</p>
            <div className="collection-actions">
              <button className="button">View Collection</button>
            </div>
          </div>
        ))}
      </section>
    </AppShell>
  )
}
