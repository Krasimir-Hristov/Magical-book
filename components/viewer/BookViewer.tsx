'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Book } from '@/lib/mock-data';

interface BookViewerProps {
  book: Book;
}

export default function BookViewer({ book }: BookViewerProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isEditingText, setIsEditingText] = useState(false);
  const [editedText, setEditedText] = useState(
    book.pages[currentPage]?.text || ''
  );

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setIsEditingText(false);
      setEditedText(book.pages[currentPage - 1]?.text || '');
    }
  };

  const goToNextPage = () => {
    if (currentPage < book.pages.length - 1) {
      setCurrentPage(currentPage + 1);
      setIsEditingText(false);
      setEditedText(book.pages[currentPage + 1]?.text || '');
    }
  };

  const handleEditToggle = () => {
    if (isEditingText) {
      // Save the edited text (in a real app, this would save to database)
      book.pages[currentPage].text = editedText;
    } else {
      setEditedText(book.pages[currentPage].text);
    }
    setIsEditingText(!isEditingText);
  };

  const handleDownloadPDF = () => {
    // Placeholder function - in real app would generate and download PDF
    alert('PDF download would start here! 📚');
  };

  const currentPageData = book.pages[currentPage];

  return (
    <div className='container mx-auto px-4 py-8 max-w-6xl'>
      {/* Header */}
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2'>
          {book.title}
        </h1>
        <p className='text-gray-600'>
          A {book.style} story for ages {book.ageGroup} • Created on{' '}
          {new Date(book.createdAt).toLocaleDateString()}
        </p>
      </div>

      {/* Book Content */}
      <Card className='mb-8'>
        <CardContent className='p-8'>
          <div className='grid lg:grid-cols-2 gap-8 items-center min-h-[500px]'>
            {/* Image Section */}
            <div className='relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg'>
              <Image
                src={currentPageData.image}
                alt={`Page ${currentPage + 1} illustration`}
                fill
                className='object-cover'
                priority
              />
            </div>

            {/* Text Section */}
            <div className='space-y-4'>
              <div className='flex justify-between items-center'>
                <h3 className='text-lg font-semibold text-gray-700'>
                  {currentPage === 0
                    ? 'Cover'
                    : `Page ${currentPage} of ${book.pages.length - 1}`}
                </h3>
                {currentPage !== 0 && (
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={handleEditToggle}
                    className='flex items-center gap-2'
                  >
                    {isEditingText ? '💾 Save' : '✏️ Edit Text'}
                  </Button>
                )}
              </div>

              {currentPage === 0 ? (
                // Cover page design
                <div className='bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-lg border-2 border-purple-200 text-center min-h-[300px] flex flex-col justify-center'>
                  <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6'>
                    {book.title}
                  </h1>
                  <p className='text-xl text-gray-700 mb-4'>A Magical Story</p>
                  <p className='text-lg text-gray-600 mb-6'>
                    Starring {book.characterName}
                  </p>
                  <div className='flex justify-center items-center gap-4 text-sm text-gray-500'>
                    <span>🎨 {book.style} style</span>
                    <span>👶 Ages {book.ageGroup}</span>
                  </div>
                </div>
              ) : isEditingText ? (
                <textarea
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  className='w-full h-48 p-4 border rounded-lg text-lg leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-purple-500'
                  placeholder='Edit the story text...'
                />
              ) : (
                <div className='bg-white/60 p-6 rounded-lg border'>
                  <p className='text-lg leading-relaxed text-gray-800'>
                    {currentPageData.text}
                  </p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Controls */}
      <div className='flex justify-between items-center mb-8'>
        <Button
          variant='outline'
          onClick={goToPreviousPage}
          disabled={currentPage === 0}
          className='flex items-center gap-2'
        >
          ← Previous Page
        </Button>

        {/* Page Indicators */}
        <div className='flex space-x-2'>
          {book.pages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(index);
                setIsEditingText(false);
                setEditedText(book.pages[index].text);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentPage
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <Button
          variant='outline'
          onClick={goToNextPage}
          disabled={currentPage === book.pages.length - 1}
          className='flex items-center gap-2'
        >
          Next Page →
        </Button>
      </div>

      {/* Action Buttons */}
      <div className='flex justify-center gap-4'>
        <Button
          onClick={handleDownloadPDF}
          className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex items-center gap-2'
        >
          📄 Download as PDF
        </Button>
        <Button variant='outline' className='flex items-center gap-2'>
          🔗 Share Book
        </Button>
        <Button variant='outline' className='flex items-center gap-2'>
          🎨 Create Another
        </Button>
      </div>
    </div>
  );
}
