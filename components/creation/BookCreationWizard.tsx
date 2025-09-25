'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Step1_Details from './steps/Step1_Details';
import Step2_Character from './steps/Step2_Character';
import Step3_Style from './steps/Step3_Style';
import WizardControls from './WizardControls';

const steps = [
  {
    id: 1,
    title: 'Story Basics',
    description: 'Choose a title, theme, and age range for the adventure.',
    highlight: 'Lay the foundation of your magical tale.',
  },
  {
    id: 2,
    title: 'Hero Portrait',
    description:
      'Add a photo of your child so they become the star of the story.',
    highlight: 'Clear portraits create the best illustrations.',
  },
  {
    id: 3,
    title: 'Art Direction',
    description:
      'Select the illustration style that matches their imagination.',
    highlight: 'Each style adjusts colour palettes and storytelling tone.',
  },
];

export default function BookCreationWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    theme: '',
    ageGroup: '',
    characterImage: null as File | null,
    selectedStyle: '',
  });

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else if (step === 3) {
      // When user clicks "Create Book ✨", navigate to generating page
      router.push('/generating');
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1_Details formData={formData} updateFormData={updateFormData} />
        );
      case 2:
        return (
          <Step2_Character
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 3:
        return (
          <Step3_Style formData={formData} updateFormData={updateFormData} />
        );
      default:
        return null;
    }
  };

  return (
    <div className='container mx-auto max-w-6xl px-4 py-8 lg:py-12'>
      <div className='mb-10 text-center lg:text-left'>
        <p className='mb-3 inline-flex items-center rounded-full border border-purple-200/70 bg-purple-50 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-purple-600'>
          Create · Personalize · Delight
        </p>
        <div className='flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
          <div>
            <h1 className='text-3xl font-bold leading-tight text-gray-900 sm:text-4xl'>
              Create Your Magical Book
            </h1>
            <p className='mt-2 max-w-xl text-base text-gray-600 sm:text-lg'>
              Follow the guided journey to build a personalised adventure
              featuring your child as the hero.
            </p>
          </div>
          <div className='hidden items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 text-sm text-purple-600 shadow-sm lg:flex'>
            <span className='inline-flex h-7 w-7 items-center justify-center rounded-full bg-purple-100'>
              🪄
            </span>
            Tips and progress update live as you move through the steps.
          </div>
        </div>
      </div>

      <div className='grid gap-6 lg:grid-cols-[320px,1fr] lg:gap-10'>
        {/* Sidebar */}
        <aside className='hidden lg:block'>
          <div className='sticky top-24 space-y-6 rounded-3xl border border-purple-100 bg-white/80 p-6 shadow-lg shadow-purple-100/60 backdrop-blur'>
            <div>
              <h2 className='text-sm font-semibold uppercase tracking-widest text-purple-600'>
                Creation roadmap
              </h2>
              <p className='mt-2 text-sm text-gray-500'>
                Three guided steps to bring your story to life.
              </p>
            </div>

            <div className='space-y-4'>
              {steps.map((sidebarStep) => {
                const isActive = sidebarStep.id === step;
                const isCompleted = sidebarStep.id < step;

                return (
                  <button
                    key={sidebarStep.id}
                    type='button'
                    onClick={() => setStep(sidebarStep.id)}
                    className={`w-full rounded-2xl border p-4 text-left transition-all ${
                      isActive
                        ? 'border-transparent bg-gradient-to-r from-purple-500/90 to-pink-500/90 text-white shadow-lg shadow-purple-300/40'
                        : 'border-purple-100 bg-white/70 text-gray-700 hover:border-purple-200 hover:bg-white'
                    }`}
                  >
                    <div className='mb-2 flex items-center justify-between text-sm font-semibold uppercase tracking-[0.3em]'>
                      <span>{`Step ${sidebarStep.id}`}</span>
                      {isCompleted && (
                        <span className='text-green-100'>Done ✓</span>
                      )}
                    </div>
                    <h3
                      className={`text-lg font-semibold ${
                        isActive ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {sidebarStep.title}
                    </h3>
                    <p
                      className={`mt-2 text-sm leading-relaxed ${
                        isActive ? 'text-purple-50/90' : 'text-gray-500'
                      }`}
                    >
                      {sidebarStep.description}
                    </p>
                    <div
                      className={`mt-3 flex items-center gap-2 rounded-xl border px-3 py-2 text-xs ${
                        isActive
                          ? 'border-white/30 bg-white/10 text-white'
                          : 'border-purple-100 bg-purple-50/70 text-purple-700'
                      }`}
                    >
                      <span>💡</span>
                      <span>{sidebarStep.highlight}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className='rounded-2xl border border-purple-100 bg-white/80 p-4 text-sm text-purple-700 shadow-inner shadow-purple-100'>
              <h4 className='flex items-center gap-2 font-semibold text-purple-800'>
                <span>⏱️</span>Estimated completion
              </h4>
              <p className='mt-1 text-purple-600'>
                Less than 5 minutes — perfect for a quick creative session.
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className='space-y-6'>
          {/* Progress Indicator */}
          <div className='rounded-3xl border border-purple-100/60 bg-white/80 p-4 shadow-sm shadow-purple-100 backdrop-blur lg:hidden'>
            <div className='flex items-center justify-between text-sm font-semibold text-purple-600'>
              <span>{`Step ${step} of 3`}</span>
              <span>{steps.find((s) => s.id === step)?.title}</span>
            </div>
            <div className='mt-3 h-2 w-full overflow-hidden rounded-full bg-purple-100'>
              <div
                className='h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500'
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Step Content */}
          <Card className='rounded-3xl border border-purple-100/70 bg-white/90 shadow-2xl shadow-purple-100/60'>
            <CardHeader className='text-center lg:text-left'>
              <p className='text-sm uppercase tracking-[0.3em] text-purple-500'>
                {`Step ${step}`}
              </p>
              <CardTitle className='text-2xl lg:text-3xl'>
                {step === 1 && 'Book Details & Theme'}
                {step === 2 && 'Upload Your Hero'}
                {step === 3 && 'Choose The Illustration Style'}
              </CardTitle>
            </CardHeader>
            <CardContent className='pb-8 pt-0 lg:pt-2'>
              {renderStep()}
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <WizardControls
            step={step}
            onPrevious={prevStep}
            onNext={nextStep}
            canGoNext={
              (step === 1 &&
                !!formData.title &&
                !!formData.theme &&
                !!formData.ageGroup) ||
              (step === 2 && !!formData.characterImage) ||
              (step === 3 && !!formData.selectedStyle)
            }
          />
        </div>
      </div>
    </div>
  );
}
