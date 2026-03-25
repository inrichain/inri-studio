import { PropsWithChildren } from 'react'
import { Header } from './Header'

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      <main className="container">{children}</main>
    </div>
  )
}
