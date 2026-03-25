import { useState } from 'react'
import { MEDIA_LIMITS } from '../../lib/media/pricingRules'

export function CreateNFTForm() {
  const [kind, setKind] = useState<'image' | 'audio' | 'video'>('image')
  const rule = MEDIA_LIMITS[kind]

  return (
    <section className="grid grid-2">
      <div className="card highlight">
        <p className="kicker">Create NFT</p>
        <h2 className="section-title">Mint premium media in a guided flow.</h2>
        <p className="section-copy">
          INRI Studio should hide the technical complexity. Creators only choose the media format, upload files, set metadata and confirm the mint.
        </p>

        <div className="form-grid" style={{ marginTop: 24 }}>
          <div>
            <label className="label">Media type</label>
            <select className="select" value={kind} onChange={(e) => setKind(e.target.value as 'image' | 'audio' | 'video')}>
              <option value="image">Image</option>
              <option value="audio">Audio</option>
              <option value="video">Video</option>
            </select>
          </div>
          <div>
            <label className="label">NFT name</label>
            <input className="input" placeholder="Midnight Signal #1" />
          </div>
          <div className="full">
            <label className="label">Description</label>
            <textarea className="textarea" rows={4} placeholder="Tell the story behind this asset, drop, release or collectible." />
          </div>
          <div>
            <label className="label">Primary media file</label>
            <input className="input" type="file" />
          </div>
          <div>
            <label className="label">Cover image</label>
            <input className="input" type="file" />
          </div>
          <div>
            <label className="label">Price in INRI</label>
            <input className="input" type="number" placeholder="0" />
          </div>
          <div>
            <label className="label">Supply</label>
            <input className="input" type="number" placeholder="1" />
          </div>
        </div>

        <div className="form-actions">
          <button className="button">Upload & Mint</button>
          <button className="button secondary" type="button">Preview Metadata</button>
        </div>
      </div>

      <div className="grid">
        <div className="card pricing-card">
          <span className="badge">Current media rule</span>
          <h3 style={{ marginTop: 14 }}>{rule.label}</h3>
          <div className="pricing-row">
            <span className="muted">Upload limit</span>
            <strong>{rule.maxMb} MB</strong>
          </div>
          <div className="pricing-row">
            <span className="muted">Base platform fee</span>
            <strong>{rule.priceInri} INRI</strong>
          </div>
        </div>

        <div className="card soft">
          <p className="kicker">What happens behind the scenes</p>
          <ul className="feature-list">
            <li><strong>Validation</strong><span className="muted">File type and size are checked before upload.</span></li>
            <li><strong>IPFS upload</strong><span className="muted">Media and JSON metadata are pushed through the signed upload flow.</span></li>
            <li><strong>On-chain mint</strong><span className="muted">The collection contract receives the final metadata URI and mints the NFT.</span></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
