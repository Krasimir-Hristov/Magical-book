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
      <div className='text-center mb-6'>
        <p className='text-gray-600'>
          Upload a photo of your child to make them the star of the story
        </p>
      </div>

      {/* File Upload Area */}
      <div className='space-y-4'>
        <Label className='text-sm font-medium'>Character Photo *</Label>

        <div
          className='border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors cursor-pointer'
          onClick={handleButtonClick}
        >
          {imagePreview ? (
            <div className='space-y-4'>
              <div className='relative w-40 h-40 mx-auto rounded-lg overflow-hidden'>
                <Image
                  src={imagePreview}
                  alt='Character preview'
                  fill
                  className='object-cover'
                />
              </div>
              <p className='text-green-600 font-medium'>
                ✓ Photo uploaded successfully!
              </p>
              <Button variant='outline' size='sm'>
                Change Photo
              </Button>
            </div>
          ) : (
            <div className='space-y-4'>
              <div className='w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center'>
                <span className='text-3xl text-gray-400'>📷</span>
              </div>
              <div>
                <p className='text-lg font-medium text-gray-700 mb-2'>
                  Click to upload a photo
                </p>
                <p className='text-sm text-gray-500'>
                  JPG, PNG or GIF (max 10MB)
                </p>
              </div>
              <Button className='bg-gradient-to-r from-purple-600 to-pink-600'>
                Choose Photo
              </Button>
            </div>
          )}
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
      <div className='bg-yellow-50 p-4 rounded-lg'>
        <h4 className='font-medium text-yellow-800 mb-2'>📸 Photo Tips:</h4>
        <ul className='text-sm text-yellow-700 space-y-1'>
          <li>• Use a clear, well-lit photo</li>
          <li>• Make sure your child's face is clearly visible</li>
          <li>• Avoid sunglasses or face coverings</li>
          <li>• Single person photos work best</li>
        </ul>
      </div>
    </div>
  );
}
