import { mockBook } from '@/lib/mock-data';
import BookViewer from '@/components/viewer/BookViewer';

interface BookPageProps {
  params: {
    bookId: string;
  };
}

export default function BookPage({ params }: BookPageProps) {
  // In the future, this would fetch the actual book data using params.bookId
  const book = mockBook;

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50'>
      <BookViewer book={book} />
    </div>
  );
}
