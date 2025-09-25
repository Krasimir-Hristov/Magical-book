'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Step1_Details from './steps/Step1_Details';
import Step2_Character from './steps/Step2_Character';
import Step3_Style from './steps/Step3_Style';
import WizardControls from './WizardControls';

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
    <div className='container mx-auto px-4 py-8 max-w-4xl'>
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4'>
          Create Your Magical Book
        </h1>
        <p className='text-gray-600 text-lg'>
          Follow these simple steps to create a personalized story
        </p>
      </div>

      {/* Progress Indicator */}
      <div className='flex justify-center mb-8'>
        <div className='flex items-center space-x-4'>
          {[1, 2, 3].map((stepNum) => (
            <div key={stepNum} className='flex items-center'>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                  stepNum <= step
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {stepNum}
              </div>
              {stepNum < 3 && (
                <div
                  className={`w-12 h-1 mx-2 transition-all duration-200 ${
                    stepNum < step
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                      : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-2xl text-center'>
            {step === 1 && 'Step 1: Book Details'}
            {step === 2 && 'Step 2: Character Photo'}
            {step === 3 && 'Step 3: Choose Style'}
          </CardTitle>
        </CardHeader>
        <CardContent>{renderStep()}</CardContent>
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
  );
}
