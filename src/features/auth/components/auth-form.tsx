"use client"
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { signIn } from '@/lib/auth/client'
import { User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const AuthForm = () => {
  const router = useRouter()
  return (
    <Dialog defaultOpen
     onOpenChange={() => router.back()}
    >
      <DialogContent className='w-[450px]'>
        <DialogHeader>
          <DialogTitle>
          Login or SignUp
          </DialogTitle>
          <DialogDescription>
          Login or SignUp using OAuth or Login as Guest
        </DialogDescription>
        </DialogHeader>
        <Button
        onClick={() => signIn("google", router)}
        >
          <FaGoogle />
          Login with Google
        </Button>
        <Button
        onClick={() => signIn("github", router)}
        >
          <FaGithub />
          Login with Github
        </Button>
        <Button
        onClick={() => signIn("anonymous", router)}
        >
          <User />
          Login as Guest
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default AuthForm