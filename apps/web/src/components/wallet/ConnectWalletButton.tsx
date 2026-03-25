import { useWallet } from '../../hooks/useWallet'

export function ConnectWalletButton() {
  const { account, connect } = useWallet()
  return (
    <button className="button" onClick={connect}>
      {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
    </button>
  )
}
