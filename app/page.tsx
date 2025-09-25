import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50'>
      {/* Hero Section */}
      <section className='container mx-auto px-4 py-20 text-center'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6'>
            Create Magical Stories
          </h1>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            Transform your child into the hero of their own personalized
            adventure. Upload a photo and watch AI create a beautiful, custom
            children's book just for them.
          </p>

          <div className='flex gap-4 justify-center mb-12'>
            <Link href='/create'>
              <Button
                size='lg'
                className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6 h-auto'
              >
                Start Creating ✨
              </Button>
            </Link>
            <Link href='/login'>
              <Button
                variant='outline'
                size='lg'
                className='text-lg px-8 py-6 h-auto'
              >
                See Examples
              </Button>
            </Link>
          </div>

          {/* Feature Preview */}
          <div className='grid md:grid-cols-3 gap-8 mt-16'>
            <div className='bg-white/60 backdrop-blur-sm rounded-xl p-6 border'>
              <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xl mb-4 mx-auto'>
                📷
              </div>
              <h3 className='text-xl font-semibold mb-2'>Upload Photo</h3>
              <p className='text-gray-600'>
                Upload your child's photo to make them the star of the story
              </p>
            </div>

            <div className='bg-white/60 backdrop-blur-sm rounded-xl p-6 border'>
              <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xl mb-4 mx-auto'>
                🎨
              </div>
              <h3 className='text-xl font-semibold mb-2'>Choose Style</h3>
              <p className='text-gray-600'>
                Pick from beautiful art styles to match your child's imagination
              </p>
            </div>

            <div className='bg-white/60 backdrop-blur-sm rounded-xl p-6 border'>
              <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xl mb-4 mx-auto'>
                📖
              </div>
              <h3 className='text-xl font-semibold mb-2'>Get Your Book</h3>
              <p className='text-gray-600'>
                Receive a personalized story ready to read and download
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='container mx-auto px-4 py-20 text-center'>
        <div className='max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-12 border'>
          <h2 className='text-3xl font-bold mb-4'>Ready to Start?</h2>
          <p className='text-gray-600 mb-8'>
            Create your first magical book in just a few minutes. No experience
            needed!
          </p>
          <Link href='/create'>
            <Button
              size='lg'
              className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-12 py-6 h-auto'
            >
              Create Your Book Now 🚀
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
