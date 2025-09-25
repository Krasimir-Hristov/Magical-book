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
      <div className='rounded-2xl border border-blue-100 bg-blue-50/70 p-5 text-sm text-blue-700 shadow-sm shadow-blue-100/40'>
        <h3 className='mb-2 flex items-center gap-2 text-base font-semibold text-blue-800'>
          <span>🔍</span> Story Foundation
        </h3>
        <p>
          Think about the world you want to build. Set the tone, theme, and
          reading level to match your child's imagination.
        </p>
      </div>

      {/* Book Title */}
      <div className='space-y-2'>
        <Label
          htmlFor='title'
          className='text-xs font-semibold uppercase tracking-[0.3em] text-purple-600'
        >
          Book Title *
        </Label>
        <Input
          id='title'
          placeholder="e.g., Emma's Adventure in the Enchanted Forest"
          value={formData.title}
          onChange={(e) => updateFormData('title', e.target.value)}
          className='w-full rounded-xl border-purple-200 bg-white/90 text-base shadow-inner shadow-purple-100 placeholder:text-gray-400 focus:border-purple-300 focus:ring-2 focus:ring-purple-200'
        />
        <p className='text-xs text-gray-500'>
          Make it personal and exciting—this will appear on the book cover.
        </p>
      </div>

      {/* Theme Selection */}
      <div className='space-y-2'>
        <Label className='text-xs font-semibold uppercase tracking-[0.3em] text-purple-600'>
          Story Theme *
        </Label>
        <Select
          value={formData.theme}
          onValueChange={(value: string) => updateFormData('theme', value)}
        >
          <SelectTrigger className='w-full rounded-xl border-purple-200 bg-white/90 text-base shadow-inner shadow-purple-100 focus:border-purple-300 focus:ring-2 focus:ring-purple-200'>
            <SelectValue placeholder='Choose a theme for your story' />
          </SelectTrigger>
          <SelectContent className='rounded-2xl border border-purple-100 bg-white shadow-lg shadow-purple-200/30'>
            <div className='px-3 py-2 text-xs uppercase tracking-[0.3em] text-purple-500'>
              Popular Themes
            </div>
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
        <p className='text-xs text-gray-500'>
          We will tailor the storyline and illustrations around this theme.
        </p>
      </div>

      {/* Age Group */}
      <div className='space-y-2'>
        <Label className='text-xs font-semibold uppercase tracking-[0.3em] text-purple-600'>
          Age Group *
        </Label>
        <Select
          value={formData.ageGroup}
          onValueChange={(value: string) => updateFormData('ageGroup', value)}
        >
          <SelectTrigger className='w-full rounded-xl border-purple-200 bg-white/90 text-base shadow-inner shadow-purple-100 focus:border-purple-300 focus:ring-2 focus:ring-purple-200'>
            <SelectValue placeholder="Select your child's age group" />
          </SelectTrigger>
          <SelectContent className='rounded-2xl border border-purple-100 bg-white shadow-lg shadow-purple-200/30'>
            <div className='px-3 py-2 text-xs uppercase tracking-[0.3em] text-purple-500'>
              Reading Years
            </div>
            <SelectItem value='2-4'>👶 2-4 years (Simple stories)</SelectItem>
            <SelectItem value='5-7'>🧒 5-7 years (Early readers)</SelectItem>
            <SelectItem value='8-10'>👦 8-10 years (Chapter books)</SelectItem>
            <SelectItem value='11-13'>👧 11-13 years (Young teens)</SelectItem>
          </SelectContent>
        </Select>
        <p className='text-xs text-gray-500'>
          We adjust vocabulary and plot complexity based on the age range.
        </p>
      </div>
    </div>
  );
}
