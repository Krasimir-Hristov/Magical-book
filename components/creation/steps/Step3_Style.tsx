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
    description: 'Soft, dreamy watercolor illustrations',
    emoji: '🎨',
    preview: 'bg-gradient-to-br from-blue-200 to-purple-200',
  },
  {
    id: 'cartoon',
    name: 'Cartoon Fun',
    description: 'Bright, colorful cartoon style',
    emoji: '🌈',
    preview: 'bg-gradient-to-br from-yellow-200 to-orange-200',
  },
  {
    id: 'realistic',
    name: 'Realistic Art',
    description: 'Detailed, lifelike illustrations',
    emoji: '🖼️',
    preview: 'bg-gradient-to-br from-green-200 to-teal-200',
  },
  {
    id: 'fantasy',
    name: 'Fantasy Realm',
    description: 'Magical, enchanted illustrations',
    emoji: '✨',
    preview: 'bg-gradient-to-br from-purple-200 to-pink-200',
  },
  {
    id: 'vintage',
    name: 'Vintage Style',
    description: 'Classic, timeless artwork',
    emoji: '📖',
    preview: 'bg-gradient-to-br from-amber-200 to-brown-200',
  },
  {
    id: 'modern',
    name: 'Modern Art',
    description: 'Clean, contemporary style',
    emoji: '🔷',
    preview: 'bg-gradient-to-br from-cyan-200 to-blue-200',
  },
];

export default function Step3_Style({
  formData,
  updateFormData,
}: Step3StyleProps) {
  const handleStyleSelect = (styleId: string) => {
    updateFormData('selectedStyle', styleId);
  };

  return (
    <div className='space-y-6'>
      <div className='text-center mb-6'>
        <p className='text-gray-600'>
          Choose an art style that matches your vision
        </p>
      </div>

      <div className='space-y-4'>
        <Label className='text-sm font-medium'>Art Style *</Label>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {artStyles.map((style) => (
            <Card
              key={style.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                formData.selectedStyle === style.id
                  ? 'ring-2 ring-purple-500 shadow-lg'
                  : 'hover:shadow-md'
              }`}
              onClick={() => handleStyleSelect(style.id)}
            >
              <CardContent className='p-4'>
                <div className='text-center space-y-3'>
                  {/* Preview */}
                  <div
                    className={`w-full h-20 rounded-lg ${style.preview} flex items-center justify-center`}
                  >
                    <span className='text-3xl'>{style.emoji}</span>
                  </div>

                  {/* Style Info */}
                  <div>
                    <h3 className='font-semibold text-lg'>{style.name}</h3>
                    <p className='text-sm text-gray-600'>{style.description}</p>
                  </div>

                  {/* Selection Indicator */}
                  {formData.selectedStyle === style.id && (
                    <div className='text-purple-600 font-medium text-sm'>
                      ✓ Selected
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Style Preview */}
      {formData.selectedStyle && (
        <div className='bg-green-50 p-4 rounded-lg'>
          <p className='text-green-700 text-sm'>
            ✓ <strong>Great choice!</strong> Your story will be illustrated in{' '}
            <strong>
              {artStyles.find((s) => s.id === formData.selectedStyle)?.name}
            </strong>{' '}
            style.
          </p>
        </div>
      )}
    </div>
  );
}
