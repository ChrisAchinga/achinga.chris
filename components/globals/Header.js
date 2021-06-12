import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <nav>
        <Link href='/'>home</Link>
        <Link href='/resume'>resume</Link>
        <Link href='/blog'>blog</Link>
        <Link href='/projects'>projects</Link>
      </nav>
    </header>
  )
}

export default Header
