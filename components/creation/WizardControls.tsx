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
    <div className='flex justify-between items-center'>
      <Button
        variant='outline'
        onClick={onPrevious}
        disabled={step === 1}
        className='flex items-center gap-2'
      >
        ← Back
      </Button>

      <Button
        onClick={onNext}
        disabled={!canGoNext}
        className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex items-center gap-2'
      >
        {step === 3 ? 'Create Book ✨' : 'Next →'}
      </Button>
    </div>
  );
}
