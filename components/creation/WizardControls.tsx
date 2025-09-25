import { Button } from '@/components/ui/button';

interface WizardControlsProps {
  step: number;
  onPrevious: () => void;
  onNext: () => void;
  canGoNext: boolean;
}

export default function WizardControls({
  step,
  onPrevious,
  onNext,
  canGoNext,
}: WizardControlsProps) {
  return (
    <div className='flex flex-col gap-3 rounded-2xl border border-purple-100 bg-white/90 p-4 shadow-lg shadow-purple-100/60 backdrop-blur sm:flex-row sm:items-center sm:justify-between'>
      <div className='text-sm text-gray-500'>
        {step === 1 &&
          'Great books start with a strong idea. Fill in the basics to set the tone.'}
        {step === 2 &&
          'Upload a clear photo so the AI can mirror your child beautifully.'}
        {step === 3 &&
          'Pick the illustration style that matches their personality and story.'}
      </div>

      <div className='flex items-center justify-between gap-3 sm:justify-end'>
        <Button
          variant='outline'
          onClick={onPrevious}
          disabled={step === 1}
          className='flex items-center gap-2 rounded-full px-5'
        >
          ← Back
        </Button>

        <Button
          onClick={onNext}
          disabled={!canGoNext}
          className='flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-5 text-base font-semibold hover:from-purple-700 hover:to-pink-700 disabled:bg-gray-200 disabled:text-gray-400'
        >
          {step === 3 ? 'Create Book ✨' : 'Next Step →'}
        </Button>
      </div>
    </div>
  );
}
