import type { PropsWithChildren } from 'react'
import { Header } from './Header'

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      <main className="container page">{children}</main>
    </div>
  )
}
