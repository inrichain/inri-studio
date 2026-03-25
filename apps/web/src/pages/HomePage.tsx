import { AppShell } from '../components/layout/AppShell'
import { MEDIA_LIMITS } from '../lib/media/pricingRules'

export function HomePage() {
  return (
    <AppShell>
      <section className="hero">
        <span className="badge">Create collections, mint NFTs, launch media on INRI</span>
        <h1>INRI Studio</h1>
        <p className="muted">A premium creator hub for ERC-721, ERC-1155, image, audio and video NFTs on INRI Chain.</p>
      </section>
      <section className="grid grid-3">
        {Object.entries(MEDIA_LIMITS).map(([key, rule]) => (
          <div className="card" key={key}>
            <h3>{rule.label}</h3>
            <p className="muted">Up to {rule.maxMb} MB</p>
            <p className="muted">Starts at {rule.priceInri} INRI</p>
          </div>
        ))}
      </section>
    </AppShell>
  )
}
