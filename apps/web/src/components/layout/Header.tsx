import { Link } from 'react-router-dom'
import { ConnectWalletButton } from '../wallet/ConnectWalletButton'

export function Header() {
  return (
    <header className="header">
      <Link to="/" className="brand" aria-label="INRI Studio home">
        <div className="brand-mark" />
        <div className="brand-text">
          <span className="brand-title">INRI Studio</span>
          <span className="brand-subtitle">Create premium NFTs on INRI Chain</span>
        </div>
      </Link>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/create-collection">Create Collection</Link>
        <Link to="/my-collections">My Collections</Link>
        <Link to="/my-nfts">My NFTs</Link>
        <Link to="/explore">Explore</Link>
      </nav>

      <div className="header-actions">
        <ConnectWalletButton />
      </div>
    </header>
  )
}
