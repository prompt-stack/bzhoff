# WWJD (What Would Jesus Do?)

A modern web application that provides spiritual guidance and fosters a community of prayer. Built with Next.js, TypeScript, and powered by Anthropic's Claude AI.

## Features

### 🙏 Divine Guidance
- Ask questions about modern-day situations
- Receive relevant scripture passages and interpretations
- AI-powered guidance based on biblical teachings
- Contextual explanations and practical applications

### 🕊️ Prayer Wall
- Share prayers with the community
- Multiple prayer types:
  - Praise
  - Gratitude
  - Support
  - Testimony
  - Encouragement
  - General
- Each prayer includes:
  - AI-generated relevant scripture
  - Like functionality
  - Sharing capabilities
  - Timestamp
  - Prayer type badge

### ✨ User Experience
- Beautiful, modern UI with smooth animations
- Responsive design for all devices
- Real-time character count and validation
- Toast notifications for user feedback
- Loading states and error handling

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, React
- **UI Components**: Tailwind CSS, Shadcn/ui
- **Animations**: Framer Motion
- **AI Integration**: Anthropic Claude API
- **State Management**: React Hooks
- **Icons**: Lucide Icons

## Getting Started

### Prerequisites
- Node.js 18+ installed
- Anthropic API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rudijetson/wwjd.git
cd wwjd
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
ANTHROPIC_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
wwjd/
├── app/
│   ├── api/              # API routes
│   ├── components/       # React components
│   │   ├── prayers/     # Prayer-related components
│   │   └── ui/          # Reusable UI components
│   ├── lib/             # Utility functions
│   └── types/           # TypeScript types
├── public/              # Static assets
└── styles/             # Global styles
```

## Key Components

### GuidanceSection
- Main component for seeking divine guidance
- Handles user questions and displays AI responses
- Includes scripture, context, and application

### PrayerWall
- Community prayer sharing interface
- Filterable by prayer type
- Displays prayer cards with scripture

### PrayerForm
- Form for submitting new prayers
- Type selection and content input
- Character limit validation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
- AI powered by [Anthropic Claude](https://www.anthropic.com/) 