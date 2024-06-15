'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
export function NavLinks() {
  const pathname = usePathname()
 
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Soccer AI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="justify-content-end">            
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/improve">Improve Soccer</Nav.Link>
            <SignedOut>
              <Nav.Link><SignInButton/></Nav.Link>
            </SignedOut>
            <SignedIn>
              <Nav.Link href="/sign-in"><UserButton afterSignOutUrl='/'/></Nav.Link>
            </SignedIn>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}