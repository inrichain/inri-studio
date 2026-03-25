import { Link } from 'react-router-dom'
import { ConnectWalletButton } from '../wallet/ConnectWalletButton'

export function Header() {
  return (
    <header className="header">
      <div>
        <strong>INRI Studio</strong>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/create-collection">Create Collection</Link>
        <Link to="/my-collections">My Collections</Link>
        <Link to="/my-nfts">My NFTs</Link>
        <Link to="/explore">Explore</Link>
      </nav>
      <ConnectWalletButton />
    </header>
  )
}
