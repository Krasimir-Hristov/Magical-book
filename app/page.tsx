import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  const features = [
    {
      icon: '📷',
      title: 'Upload & Personalize',
      description:
        "Add your child's photo and details to craft their starring role.",
    },
    {
      icon: '🎨',
      title: 'Choose An Art Style',
      description:
        'Pick from whimsical illustration styles that match their imagination.',
    },
    {
      icon: '📖',
      title: 'Receive A Magical Book',
      description:
        'Download or print a keepsake storybook they will never forget.',
    },
  ];

  return (
    <div className='relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50'>
      {/* Decorative Background */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-32 h-72 w-72 rounded-full bg-purple-200/60 blur-3xl' />
        <div className='absolute top-1/3 -left-32 h-72 w-72 rounded-full bg-pink-200/60 blur-3xl' />
        <div className='absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-200/50 blur-3xl' />
      </div>

      {/* Hero Section */}
      <section className='relative container mx-auto flex flex-col items-center px-4 pb-24 pt-24 text-center sm:pb-28 sm:pt-28 lg:pt-32'>
        <div className='max-w-4xl'>
          <span className='inline-flex items-center rounded-full border border-purple-200 bg-white/70 px-4 py-1 text-sm font-medium text-purple-600 shadow-sm backdrop-blur'>
            ✨ AI-crafted adventures made just for your child
          </span>

          <h1 className='mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>
            Turn bedtime into a{' '}
            <span className='bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
              magical journey
            </span>
          </h1>
          <p className='mt-6 text-lg text-gray-600 sm:text-xl'>
            Personalize every story with your child's name, photo, and favorite
            themes. Our AI crafts stunning illustrations and heartfelt
            adventures they'll cherish forever.
          </p>

          <div className='mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center'>
            <Link href='/create' className='w-full sm:w-auto'>
              <Button
                size='lg'
                className='group w-full rounded-full bg-gradient-to-r cursor-pointer from-purple-600 via-pink-500 to-orange-400 px-12 py-7 text-xl font-semibold text-white shadow-lg shadow-purple-400/40 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 sm:w-auto'
              >
                Start Creating Now ✨
                <span className='ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1'>
                  →
                </span>
              </Button>
            </Link>
            <div className='flex items-center gap-3 rounded-full border border-purple-200/60 bg-white/80 px-5 py-3 text-sm text-gray-600 shadow-sm backdrop-blur-sm'>
              <span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-lg'>
                ⭐
              </span>
              Loved by parents in 30+ countries
            </div>
          </div>
        </div>

        {/* Feature Preview */}
        <div className='mt-20 grid w-full gap-6 sm:gap-8 md:grid-cols-3'>
          {features.map((feature) => (
            <div
              key={feature.title}
              className='relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-6 shadow-lg shadow-purple-200/30 transition-transform duration-300 hover:-translate-y-2 hover:shadow-purple-300/40 backdrop-blur-sm'
            >
              <div className='absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-100/70 blur-3xl' />
              <div className='relative flex h-full flex-col items-center text-center'>
                <div className='mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-3xl text-white shadow-md'>
                  {feature.icon}
                </div>
                <h3 className='text-xl font-semibold text-gray-800'>
                  {feature.title}
                </h3>
                <p className='mt-3 text-base text-gray-600'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className='relative container mx-auto px-4 pb-24 sm:pb-28'>
        <div className='relative mx-auto flex max-w-3xl flex-col items-center rounded-3xl border border-white/70 bg-gradient-to-r from-purple-500/90 via-pink-500/90 to-purple-400/90 p-10 text-center text-white shadow-[0_25px_50px_-12px_rgba(124,58,237,0.45)] sm:p-14'>
          <div className='absolute -left-10 top-1/2 hidden h-40 w-40 -translate-y-1/2 rounded-full bg-white/20 blur-3xl md:block' />
          <div className='absolute -right-10 bottom-0 hidden h-32 w-32 rounded-full bg-orange-300/30 blur-2xl md:block' />

          <h2 className='relative text-3xl font-bold sm:text-4xl'>
            Create Your First Story Tonight
          </h2>
          <p className='relative mt-4 max-w-xl text-base text-purple-50 sm:text-lg'>
            Bring their dreams to life with AI-crafted illustrations,
            personalized characters, and heartwarming adventures tailored just
            for them.
          </p>

          <Link href='/create' className='relative mt-8 w-full sm:w-auto'>
            <Button
              size='lg'
              className='w-full rounded-full bg-white px-10 py-5 text-lg cursor-pointer font-semibold text-purple-600 shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl sm:w-auto'
            >
              Craft A Story In Minutes 🚀
            </Button>
          </Link>

          <p className='relative mt-4 text-xs uppercase tracking-[0.3em] text-purple-100'>
            No design skills needed · Ready in under 5 minutes
          </p>
        </div>
      </section>
    </div>
  );
}
