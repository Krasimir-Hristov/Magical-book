export interface BookPage {
  id: number;
  image: string;
  text: string;
}

export interface Book {
  id: string;
  title: string;
  theme: string;
  ageGroup: string;
  style: string;
  characterName: string;
  pages: BookPage[];
  createdAt: string;
}

export const mockBook: Book = {
  id: '123',
  title: "Emma's Magical Adventure",
  theme: 'magic',
  ageGroup: '5-7',
  style: 'watercolor',
  characterName: 'Emma',
  createdAt: '2024-01-15',
  pages: [
    {
      id: 0,
      image:
        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop&crop=center',
      text: '', // Cover page has no text, just the title
    },
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=center',
      text: 'Once upon a time, in a magical forest filled with sparkling flowers and singing birds, there lived a brave little girl named Emma. She had curly brown hair and the kindest heart in the whole kingdom.',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&crop=center',
      text: 'One sunny morning, Emma discovered a mysterious glowing crystal hidden beneath an old oak tree. The crystal pulsed with a soft blue light and seemed to whisper her name in the gentle breeze.',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center',
      text: "As Emma picked up the crystal, a friendly fairy appeared before her! 'Hello, Emma,' said the fairy with a tinkling voice. 'I am Luna, guardian of the Enchanted Forest. I need your help to save our magical realm!'",
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1441471349424-351990746ff4?w=600&h=400&fit=crop&crop=center',
      text: "Luna explained that an evil sorcerer had stolen all the colors from the forest, leaving everything gray and sad. 'Only someone with a pure heart like yours can restore the magic,' Luna said, her wings shimmering hopefully.",
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=400&fit=crop&crop=center',
      text: 'Emma bravely accepted the quest. Together with Luna, she journeyed through the gray forest, using the power of the crystal to bring back colors wherever they went. Flowers bloomed, birds sang, and magic returned to the land.',
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&crop=center',
      text: "When they reached the sorcerer's dark tower, Emma faced her fears and used the crystal's power combined with her brave heart to defeat the evil magic. The forest burst into brilliant colors, more beautiful than ever before!",
    },
    {
      id: 7,
      image:
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=center',
      text: 'The grateful forest creatures celebrated Emma as their hero. Luna granted Emma a special gift - whenever she needed courage, the crystal would glow to remind her of her own inner strength and bravery.',
    },
    {
      id: 8,
      image:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center',
      text: 'Emma returned home with wonderful memories and new friends. Every night, she would look at her magical crystal and remember that even the smallest person can make the biggest difference when they believe in themselves. The End.',
    },
  ],
};
