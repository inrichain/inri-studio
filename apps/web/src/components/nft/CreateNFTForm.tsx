import { useState } from 'react'
import { MEDIA_LIMITS } from '../../lib/media/pricingRules'

export function CreateNFTForm() {
  const [kind, setKind] = useState<'image'|'audio'|'video'>('image')
  const rule = MEDIA_LIMITS[kind]

  return (
    <div className="card">
      <h2>Create NFT</h2>
      <p className="muted">Upload limits and pricing are handled by INRI Studio, not by the user manually.</p>
      <div className="grid">
        <div>
          <label className="label">Media type</label>
          <select className="select" value={kind} onChange={(e) => setKind(e.target.value as any)}>
            <option value="image">Image</option>
            <option value="audio">Audio</option>
            <option value="video">Video</option>
          </select>
        </div>
        <div>
          <label className="label">Name</label>
          <input className="input" placeholder="My NFT" />
        </div>
        <div>
          <label className="label">Description</label>
          <textarea className="textarea" rows={4} placeholder="Description" />
        </div>
        <div className="card">
          <strong>{rule.label}</strong>
          <p className="muted">Limit: {rule.maxMb} MB</p>
          <p className="muted">Base price: {rule.priceInri} INRI</p>
        </div>
      </div>
      <div style={{ marginTop: 16 }}>
        <button className="button">Upload & Mint</button>
      </div>
    </div>
  )
}
