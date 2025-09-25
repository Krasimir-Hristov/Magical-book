'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Progress } from '@/components/ui/progress';

const generationSteps = [
  'Analyzing your photo...',
  'Creating your story...',
  'Drawing magical illustrations...',
  'Adding finishing touches...',
  'Your book is ready! ✨',
];

export default function GeneratingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 1;

        // Update step based on progress
        const stepIndex = Math.floor(
          (newProgress / 100) * generationSteps.length
        );
        if (stepIndex !== currentStep && stepIndex < generationSteps.length) {
          setCurrentStep(stepIndex);
        }

        if (newProgress >= 100) {
          clearInterval(timer);
          // Redirect to the book page after generation is complete
          setTimeout(() => {
            router.push('/book/123');
          }, 1000); // Small delay to show completion
          return 100;
        }
        return newProgress;
      });
    }, 100); // Update every 100ms for smooth animation

    return () => clearInterval(timer);
  }, [currentStep]);

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center px-4'>
      <div className='max-w-md w-full text-center'>
        {/* Animated Logo */}
        <div className='mb-8'>
          <div className='w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse'>
            <span className='text-3xl text-white'>📚</span>
          </div>
          <h1 className='text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4'>
            Creating Your Magic
          </h1>
        </div>

        {/* Progress Bar */}
        <div className='mb-8'>
          <Progress value={progress} className='h-3 mb-4' />
          <p className='text-sm text-gray-500'>{progress}% complete</p>
        </div>

        {/* Current Step */}
        <div className='mb-8'>
          <p className='text-xl text-gray-700 font-medium animate-pulse'>
            {generationSteps[currentStep]}
          </p>
        </div>

        {/* Loading Animation */}
        <div className='flex justify-center space-x-2 mb-8'>
          <div className='w-3 h-3 bg-purple-500 rounded-full animate-bounce'></div>
          <div
            className='w-3 h-3 bg-pink-500 rounded-full animate-bounce'
            style={{ animationDelay: '0.1s' }}
          ></div>
          <div
            className='w-3 h-3 bg-blue-500 rounded-full animate-bounce'
            style={{ animationDelay: '0.2s' }}
          ></div>
        </div>

        {/* Encouragement Text */}
        <p className='text-gray-600 text-sm'>
          Please wait while we create something magical just for you. This
          usually takes 1-2 minutes.
        </p>
      </div>
    </div>
  );
}
