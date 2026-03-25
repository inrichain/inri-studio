import { useState } from 'react'

export function CreateCollectionForm() {
  const [type, setType] = useState<'721' | '1155'>('721')

  return (
    <div className="grid grid-2">
      <div className="card highlight">
        <p className="kicker">Create collection</p>
        <h2 className="section-title">Launch a branded NFT collection on INRI.</h2>
        <p className="section-copy">
          Choose the collection model, set your payout wallet and prepare the metadata flow. The smart contract creation runs behind the interface.
        </p>

        <div className="form-grid" style={{ marginTop: 24 }}>
          <div>
            <label className="label">Collection type</label>
            <select className="select" value={type} onChange={(e) => setType(e.target.value as '721' | '1155')}>
              <option value="721">ERC-721 · Unique NFTs</option>
              <option value="1155">ERC-1155 · Editions / multi-item</option>
            </select>
            <div className="field-help">
              {type === '721'
                ? 'Best for 1/1 items, premium drops and fixed-size collections.'
                : 'Best for editions, tickets, multi-item collections and scalable media drops.'}
            </div>
          </div>

          <div>
            <label className="label">Collection name</label>
            <input className="input" placeholder="INRI Genesis Audio Club" />
          </div>

          <div>
            <label className="label">Symbol</label>
            <input className="input" placeholder="IGAC" />
          </div>

          <div>
            <label className="label">Royalty (%)</label>
            <input className="input" type="number" defaultValue={5} />
          </div>

          <div>
            <label className="label">Creator payout wallet</label>
            <input className="input" placeholder="0x..." />
          </div>

          <div>
            <label className="label">Logo / cover image</label>
            <input className="input" type="file" />
          </div>

          <div>
            <label className="label">Banner image</label>
            <input className="input" type="file" />
          </div>

          <div>
            <label className="label">721 max supply</label>
            <input className="input" type="number" placeholder="1000" disabled={type === '1155'} />
            <div className="field-help">For ERC-1155, supply is defined later per token type.</div>
          </div>

          <div className="full">
            <label className="label">Collection description</label>
            <textarea className="textarea" rows={5} placeholder="Describe the collection, the audience and the media experience." />
          </div>
        </div>

        <div className="form-actions">
          <button className="button">Create Collection</button>
          <button className="button secondary" type="button">Save Draft</button>
        </div>
      </div>

      <div className="grid">
        <div className="card soft">
          <p className="kicker">What INRI Studio handles</p>
          <ul className="feature-list">
            <li>
              <strong>Contract deployment</strong>
              <span className="muted">The factory creates and registers the collection without exposing technical contract steps.</span>
            </li>
            <li>
              <strong>Metadata-ready structure</strong>
              <span className="muted">Collection image, banner and metadata are prepared for IPFS and future minting flows.</span>
            </li>
            <li>
              <strong>Creator ownership</strong>
              <span className="muted">The creator keeps operational control of the collection after deployment.</span>
            </li>
          </ul>
        </div>

        <div className="card">
          <p className="kicker">Recommended launch flow</p>
          <div className="table-like">
            <div className="table-row">
              <strong>1. Choose collection model</strong>
              <span className="muted">721</span>
              <span className="muted">or 1155</span>
              <span className="badge">Step 1</span>
            </div>
            <div className="table-row">
              <strong>2. Upload brand assets</strong>
              <span className="muted">logo</span>
              <span className="muted">banner</span>
              <span className="badge">Step 2</span>
            </div>
            <div className="table-row">
              <strong>3. Confirm payout + royalty</strong>
              <span className="muted">wallet</span>
              <span className="muted">royalty</span>
              <span className="badge">Step 3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
