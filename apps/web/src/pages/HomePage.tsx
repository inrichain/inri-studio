import { Link } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell'
import { MEDIA_LIMITS } from '../lib/media/pricingRules'

const features = [
  {
    title: 'Collection factory',
    copy: 'Launch ERC-721 and ERC-1155 collections without touching smart contracts manually.',
  },
  {
    title: 'Media-first minting',
    copy: 'Mint image, audio and video NFTs with pricing rules, file limits and metadata handled by the platform.',
  },
  {
    title: 'Registry powered',
    copy: 'Collections created through INRI Studio can be verified, featured and surfaced inside the ecosystem.',
  },
]

const launchChecklist = [
  'Deploy collections in a guided flow',
  'Upload artwork, audio or video to IPFS',
  'Set royalties and creator payout wallet',
  'Manage verified collections from the registry',
]

export function HomePage() {
  return (
    <AppShell>
      <section className="hero">
        <div className="card highlight hero-panel">
          <div>
            <span className="badge">Premium creator hub for INRI Chain</span>
            <h1>Build powerful NFT collections with a market-ready experience.</h1>
            <p>
              INRI Studio is designed to make ERC-721, ERC-1155, image, audio and video NFTs feel simple for end users while keeping the professional Web3 stack behind the scenes.
            </p>
            <div className="hero-actions">
              <Link to="/create-collection" className="button">Launch Collection</Link>
              <Link to="/explore" className="button secondary">Explore Verified</Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong>721 + 1155</strong>
                <span>Collection types supported</span>
              </div>
              <div className="stat">
                <strong>IPFS-ready</strong>
                <span>Built for image, audio and video metadata</span>
              </div>
              <div className="stat">
                <strong>Registry-backed</strong>
                <span>Verification and featured collection flows</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-side">
          <div className="gradient-box">
            <p className="kicker">Built for creators</p>
            <h3>Launch collections that feel premium from day one.</h3>
            <p>Use INRI Studio as the branded entry point for artists, labels, communities and multimedia creators.</p>
          </div>
          <div className="card soft">
            <p className="kicker">Launch checklist</p>
            <ul className="feature-list">
              {launchChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="grid grid-3">
        {Object.entries(MEDIA_LIMITS).map(([key, rule]) => (
          <div className="card pricing-card" key={key}>
            <span className="badge success">{rule.label}</span>
            <h3>{rule.label} NFTs</h3>
            <div className="pricing-row">
              <span className="muted">Upload limit</span>
              <strong>{rule.maxMb} MB</strong>
            </div>
            <div className="pricing-row">
              <span className="muted">Base platform fee</span>
              <strong>{rule.priceInri} INRI</strong>
            </div>
            <p className="muted small" style={{ marginTop: 14 }}>
              Ideal for {key === 'image' ? 'art, PFPs and collection covers' : key === 'audio' ? 'music drops, spoken audio and collectibles' : 'trailers, premium clips and multimedia releases'}.
            </p>
          </div>
        ))}
      </section>

      <section className="grid grid-2">
        <div className="card">
          <p className="kicker">Why creators will use this</p>
          <h2 className="section-title">A cleaner launch flow for real users</h2>
          <p className="section-copy">
            The blockchain infrastructure is already live. The job of this app is to make the experience beautiful, branded and simple enough that creators never need to open a contract manually.
          </p>
        </div>

        <div className="card soft">
          <p className="kicker">Core advantages</p>
          <ul className="feature-list">
            {features.map((feature) => (
              <li key={feature.title}>
                <strong>{feature.title}</strong>
                <span className="muted">{feature.copy}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </AppShell>
  )
}
