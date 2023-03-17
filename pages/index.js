import { MainLayout } from '@/components/layouts/MainLayout'
import Link from 'next/link'

// es obligatorio que exporte por default. El nombre del componente puede no ser igual que el nombre del archivo
// algo que si es obligatorio en React.
export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home Page</h1>

      <h1 className={'title'}>
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className={'description'}>
        Get started by editing&nbsp;
        <code className={'code'}>pages/index.js</code>
      </p>
    </MainLayout>
  )
}
