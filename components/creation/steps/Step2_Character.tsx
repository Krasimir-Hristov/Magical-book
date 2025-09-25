'use client';

import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Image from 'next/image';

interface Step2CharacterProps {
  formData: {
    title: string;
    theme: string;
    ageGroup: string;
    characterImage: File | null;
    selectedStyle: string;
  };
  updateFormData: (field: string, value: any) => void;
}

export default function Step2_Character({
  formData,
  updateFormData,
}: Step2CharacterProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      updateFormData('characterImage', file);

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className='space-y-6'>
      <div className='rounded-2xl border border-purple-100 bg-purple-50/70 p-5 text-sm text-purple-700 shadow-sm shadow-purple-100/50'>
        <h3 className='mb-2 flex items-center gap-2 text-base font-semibold text-purple-800'>
          <span>📸</span> Hero Portrait
        </h3>
        <p>
          Upload a bright, clear photo so the AI illustration keeps their unique
          features. Square photos with their face centered work best.
        </p>
      </div>

      {/* File Upload Area */}
      <div className='space-y-4'>
        <Label className='text-xs font-semibold uppercase tracking-[0.3em] text-purple-600'>
          Character Photo *
        </Label>

        <div
          className='relative overflow-hidden rounded-2xl border-2 border-dashed border-purple-200 bg-white/80 p-8 text-center transition-all hover:border-purple-300 hover:bg-white backdrop-blur cursor-pointer'
          onClick={handleButtonClick}
        >
          <div className='absolute -top-10 -right-10 h-40 w-40 rounded-full bg-purple-100/60 blur-3xl' />
          <div className='relative'>
            {imagePreview ? (
              <div className='space-y-5'>
                <div className='relative mx-auto h-44 w-44 overflow-hidden rounded-2xl shadow-xl shadow-purple-200/40'>
                  <Image
                    src={imagePreview}
                    alt='Character preview'
                    fill
                    className='object-cover'
                  />
                </div>
                <p className='text-sm font-medium text-green-600'>
                  ✓ Photo uploaded successfully! Tap below to replace.
                </p>
                <div className='flex items-center justify-center gap-3'>
                  <Button
                    variant='outline'
                    size='sm'
                    className='rounded-full px-5'
                  >
                    Change Photo
                  </Button>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='text-xs text-gray-500 hover:text-gray-700'
                    onClick={(event) => {
                      event.stopPropagation();
                      setImagePreview(null);
                      updateFormData('characterImage', null);
                    }}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ) : (
              <div className='space-y-5'>
                <div className='mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-purple-100 text-4xl text-purple-500 shadow-inner shadow-purple-200'>
                  📷
                </div>
                <div>
                  <p className='text-lg font-semibold text-gray-800'>
                    Tap to upload your hero
                  </p>
                  <p className='text-sm text-gray-500'>
                    JPG, PNG or GIF · Max 10MB · Face forward
                  </p>
                </div>
                <div className='flex flex-col gap-2 text-xs text-gray-500'>
                  <span>✨ Clear photos produce magical results</span>
                  <span>✨ Avoid group photos or busy backgrounds</span>
                </div>
                <Button className='rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-5 text-base font-semibold'>
                  Choose Photo
                </Button>
              </div>
            )}
          </div>
        </div>

        <input
          ref={fileInputRef}
          type='file'
          accept='image/*'
          onChange={handleFileChange}
          className='hidden'
        />
      </div>

      {/* Tips */}
      <div className='grid gap-4 rounded-2xl border border-purple-100 bg-white/80 p-5 shadow-inner shadow-purple-100 sm:grid-cols-2'>
        <div>
          <h4 className='mb-2 text-sm font-semibold text-purple-700 uppercase tracking-[0.3em]'>
            Photo tips
          </h4>
          <ul className='space-y-2 text-sm text-gray-600'>
            <li>• Use a bright, front-facing photo</li>
            <li>• Keep their entire face visible</li>
            <li>• Remove hats, sunglasses, or face paint</li>
            <li>• Avoid filters for the most natural result</li>
          </ul>
        </div>
        <div className='rounded-xl border border-purple-100 bg-purple-50/70 p-4 text-sm text-purple-700'>
          <h5 className='mb-2 font-semibold text-purple-800'>Why it matters</h5>
          <p>
            The photo helps the AI match facial structure, hair colour, and
            personality. We never share your images—they remain private in your
            account.
          </p>
        </div>
      </div>
    </div>
  );
}
