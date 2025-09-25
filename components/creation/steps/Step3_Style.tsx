import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

interface Step3StyleProps {
  formData: {
    title: string;
    theme: string;
    ageGroup: string;
    characterImage: File | null;
    selectedStyle: string;
  };
  updateFormData: (field: string, value: any) => void;
}

const artStyles = [
  {
    id: 'watercolor',
    name: 'Watercolor Magic',
    description: 'Soft, dreamy brush strokes with gentle colours.',
    emoji: '🎨',
    preview: 'bg-gradient-to-br from-blue-200 to-purple-200',
    tone: 'Ethereal, calm, and poetic. Great for bedtime tales.',
  },
  {
    id: 'cartoon',
    name: 'Cartoon Fun',
    description: 'Vibrant colours and playful character designs.',
    emoji: '🌈',
    preview: 'bg-gradient-to-br from-yellow-200 to-orange-200',
    tone: 'Energetic, humorous, and full of motion.',
  },
  {
    id: 'realistic',
    name: 'Realistic Art',
    description: 'Detailed illustrations that feel cinematic.',
    emoji: '🖼️',
    preview: 'bg-gradient-to-br from-green-200 to-teal-200',
    tone: 'Lifelike emotions and cinematic moments.',
  },
  {
    id: 'fantasy',
    name: 'Fantasy Realm',
    description: 'Sparkling lights, mystical creatures, enchanted vibes.',
    emoji: '✨',
    preview: 'bg-gradient-to-br from-purple-200 to-pink-200',
    tone: 'Whimsical, otherworldly, and full of wonder.',
  },
  {
    id: 'vintage',
    name: 'Vintage Storybook',
    description: 'Muted palettes with classic storybook textures.',
    emoji: '📖',
    preview: 'bg-gradient-to-br from-amber-200 to-brown-200',
    tone: 'Nostalgic, timeless, and cosy.',
  },
  {
    id: 'modern',
    name: 'Modern Minimal',
    description: 'Bold shapes and graphic storytelling.',
    emoji: '🔷',
    preview: 'bg-gradient-to-br from-cyan-200 to-blue-200',
    tone: 'Sleek, stylish, and design-driven.',
  },
];

export default function Step3_Style({
  formData,
  updateFormData,
}: Step3StyleProps) {
  const handleStyleSelect = (styleId: string) => {
    updateFormData('selectedStyle', styleId);
  };

  const selectedStyle = artStyles.find((s) => s.id === formData.selectedStyle);

  return (
    <div className='space-y-6'>
      <div className='rounded-2xl border border-pink-100 bg-pink-50/70 p-5 text-sm text-pink-700 shadow-sm shadow-pink-100/40'>
        <h3 className='mb-2 flex items-center gap-2 text-base font-semibold text-pink-800'>
          <span>🎨</span> Art Direction
        </h3>
        <p>
          Each style influences colour palettes, expressions, and storytelling
          tone. Pick the look that matches your child’s personality.
        </p>
      </div>

      <div className='space-y-4'>
        <Label className='text-xs font-semibold uppercase tracking-[0.3em] text-purple-600'>
          Art Style *
        </Label>

        <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {artStyles.map((style) => {
            const isSelected = formData.selectedStyle === style.id;

            return (
              <Card
                key={style.id}
                className={`relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isSelected
                    ? 'border-transparent bg-gradient-to-br from-purple-500/90 to-pink-500/90 text-white shadow-xl shadow-purple-300/50'
                    : 'border-purple-100 bg-white/80 text-gray-800 shadow hover:-translate-y-1 hover:shadow-lg'
                }`}
                onClick={() => handleStyleSelect(style.id)}
              >
                <div className='absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/20 blur-2xl' />
                {isSelected && (
                  <div className='absolute right-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur'>
                    Selected
                  </div>
                )}
                <CardContent className='relative space-y-4 p-5'>
                  <div
                    className={`flex h-24 w-full items-center justify-center rounded-xl ${style.preview} text-4xl shadow-inner shadow-black/10`}
                  >
                    {style.emoji}
                  </div>

                  <div className='space-y-2 text-center'>
                    <h3
                      className={`text-lg font-semibold ${
                        isSelected ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {style.name}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        isSelected ? 'text-purple-50/90' : 'text-gray-600'
                      }`}
                    >
                      {style.description}
                    </p>
                  </div>

                  <div
                    className={`rounded-xl border px-4 py-3 text-xs ${
                      isSelected
                        ? 'border-white/40 bg-white/10 text-white'
                        : 'border-purple-100 bg-purple-50/70 text-purple-700'
                    }`}
                  >
                    <strong>Vibe:</strong> {style.tone}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Style Preview */}
      {selectedStyle && (
        <div className='rounded-2xl border border-green-100 bg-green-50/80 p-5 text-sm text-green-700 shadow-inner shadow-green-100'>
          <h4 className='mb-2 text-base font-semibold text-green-800'>
            Great choice!
          </h4>
          <p>
            Your story will be illustrated in{' '}
            <strong>{selectedStyle.name}</strong> style. Expect{' '}
            {selectedStyle.tone.toLowerCase()} across every page.
          </p>
        </div>
      )}
    </div>
  );
}
