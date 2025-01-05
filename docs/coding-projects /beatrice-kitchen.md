# Beatrice - AI-Powered Recipe Extraction

## Created by Brandon Z. Hoff

Beatrice transforms cooking videos into interactive, structured recipes using AI. Simply paste a YouTube URL and get a detailed, step-by-step recipe with ingredients, instructions, and cooking tips.

## Features

- 🎥 YouTube video processing
- 🤖 AI-powered recipe extraction
- 📝 Structured recipe format
- 🛒 Shopping list generation
- ⏱️ Cooking timestamps
- 👤 User authentication
- 🔄 Real-time processing

## Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS
- **Backend**: Supabase, Python
- **AI**: Claude/Anthropic
- **APIs**: YouTube Data API
- **Deployment**: Vercel
- **Database**: PostgreSQL (via Supabase)

## Live Demo

Visit [Beatrice](https://your-site-url.com) to try it out!

## How It Works

1. User submits a YouTube cooking video URL
2. System extracts video metadata and transcript
3. AI processes the content into a structured recipe
4. Recipe is presented with interactive features

## Project Structure

```
beatrice/
├── frontend/           # React/TypeScript application
├── packages/           # Shared packages
├── scripts/           # Python processing scripts
└── supabase/          # Database and API functions
```

## Local Development

```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
CLAUDE_API_KEY=your_claude_api_key
```

## Contributing

While this is primarily a portfolio project, issues and pull requests are welcome.

## Contact

- **Developer**: Brandon Z. Hoff
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]
- **Email**: [Your Email]

## License

MIT License - see LICENSE.md for details