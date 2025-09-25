import BookCreationWizard from '@/components/creation/BookCreationWizard';

export default function CreatePage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50'>
      <BookCreationWizard />
    </div>
  );
}
