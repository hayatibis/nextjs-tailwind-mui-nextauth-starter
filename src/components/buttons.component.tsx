'use client'

import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import Button from '@mui/base/Button'

export const LoginButton = () => {
  return (
    <Button
      className="mr-2.5 bg-green-600 rounded-md py-1 px-4"
      onClick={() => signIn()}
    >
      Sign in
    </Button>
  )
}

export const RegisterButton = () => {
  return (
    <Link href="/register" className="mr-2.5">
      Register
    </Link>
  )
}

export const LogoutButton = () => {
  return (
    <button className="mr-2.5" onClick={() => signOut()}>
      Sign Out
    </button>
  )
}

export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>
}
