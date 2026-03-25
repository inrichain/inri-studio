import { useState } from 'react'

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<any>
    }
  }
}

export function useWallet() {
  const [account, setAccount] = useState<string>('')

  async function connect() {
    if (!window.ethereum) {
      alert('Install MetaMask or an EVM wallet first.')
      return
    }
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    setAccount(accounts[0] ?? '')
  }

  return { account, connect }
}
