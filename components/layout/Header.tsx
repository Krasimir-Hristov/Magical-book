'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className='border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60'>
      <div className='container flex h-16 items-center justify-between px-4'>
        {/* Logo */}
        <Link href='/' className='flex items-center space-x-2 cursor-pointer'>
          <div className='h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center'>
            <span className='text-white font-bold text-sm'>📚</span>
          </div>
          <span className='font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
            Magical Book
          </span>
        </Link>

        {/* Navigation Buttons */}
        <div className='flex items-center space-x-4'>
          <Link href='/login'>
            <Button variant='ghost' size='sm' className='cursor-pointer'>
              Login
            </Button>
          </Link>
          <Link href='/signup'>
            <Button
              size='sm'
              className='bg-gradient-to-r cursor-pointer from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
