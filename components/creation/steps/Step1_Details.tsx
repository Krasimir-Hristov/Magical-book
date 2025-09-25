import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Step1DetailsProps {
  formData: {
    title: string;
    theme: string;
    ageGroup: string;
    characterImage: File | null;
    selectedStyle: string;
  };
  updateFormData: (field: string, value: any) => void;
}

export default function Step1_Details({
  formData,
  updateFormData,
}: Step1DetailsProps) {
  return (
    <div className='space-y-6'>
      <div className='text-center mb-6'>
        <p className='text-gray-600'>
          Let's start with the basics of your magical story
        </p>
      </div>

      {/* Book Title */}
      <div className='space-y-2'>
        <Label htmlFor='title' className='text-sm font-medium'>
          Book Title *
        </Label>
        <Input
          id='title'
          placeholder="e.g., Emma's Adventure in the Enchanted Forest"
          value={formData.title}
          onChange={(e) => updateFormData('title', e.target.value)}
          className='w-full'
        />
      </div>

      {/* Theme Selection */}
      <div className='space-y-2'>
        <Label className='text-sm font-medium'>Story Theme *</Label>
        <Select
          value={formData.theme}
          onValueChange={(value: string) => updateFormData('theme', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder='Choose a theme for your story' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='adventure'>
              🏔️ Adventure & Exploration
            </SelectItem>
            <SelectItem value='magic'>✨ Magic & Fantasy</SelectItem>
            <SelectItem value='animals'>🐾 Animals & Nature</SelectItem>
            <SelectItem value='space'>🚀 Space & Science</SelectItem>
            <SelectItem value='pirates'>🏴‍☠️ Pirates & Treasure</SelectItem>
            <SelectItem value='princesses'>👑 Princesses & Castles</SelectItem>
            <SelectItem value='dinosaurs'>
              🦕 Dinosaurs & Prehistoric
            </SelectItem>
            <SelectItem value='underwater'>🌊 Underwater Adventure</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Age Group */}
      <div className='space-y-2'>
        <Label className='text-sm font-medium'>Age Group *</Label>
        <Select
          value={formData.ageGroup}
          onValueChange={(value: string) => updateFormData('ageGroup', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select your child's age group" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='2-4'>👶 2-4 years (Simple stories)</SelectItem>
            <SelectItem value='5-7'>🧒 5-7 years (Early readers)</SelectItem>
            <SelectItem value='8-10'>👦 8-10 years (Chapter books)</SelectItem>
            <SelectItem value='11-13'>👧 11-13 years (Young teens)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className='bg-blue-50 p-4 rounded-lg'>
        <p className='text-sm text-blue-700'>
          💡 <strong>Tip:</strong> Choose a theme your child loves! The story
          will be personalized around their interests.
        </p>
      </div>
    </div>
  );
}
