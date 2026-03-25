import { useState } from 'react'

export function CreateCollectionForm() {
  const [type, setType] = useState<'721' | '1155'>('721')

  return (
    <div className="card">
      <h2>Create Collection</h2>
      <div className="grid">
        <div>
          <label className="label">Type</label>
          <select className="select" value={type} onChange={(e) => setType(e.target.value as '721'|'1155')}>
            <option value="721">ERC-721</option>
            <option value="1155">ERC-1155</option>
          </select>
        </div>
        <div>
          <label className="label">Name</label>
          <input className="input" placeholder="INRI Collection" />
        </div>
        <div>
          <label className="label">Symbol</label>
          <input className="input" placeholder="INRI" />
        </div>
        <div>
          <label className="label">Royalty (%)</label>
          <input className="input" type="number" defaultValue={5} />
        </div>
        <div>
          <label className="label">Supply {type === '721' ? '(721)' : '(managed per token type later)'}</label>
          <input className="input" type="number" placeholder="1000" disabled={type === '1155'} />
        </div>
        <div>
          <label className="label">Description</label>
          <textarea className="textarea" rows={4} placeholder="Collection description" />
        </div>
      </div>
      <div style={{ marginTop: 16 }}>
        <button className="button">Create Collection</button>
      </div>
    </div>
  )
}
