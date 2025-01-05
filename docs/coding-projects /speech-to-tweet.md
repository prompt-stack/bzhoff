# Social Media Automation Suite

A comprehensive suite of Python tools for managing and automating social media content across multiple platforms. This suite includes three main components:

## Components

### 1. Twitter Bot
Post tweet threads from markdown files with automatic thread splitting and scheduling.

### 2. Threads Bot
Convert and cross-post content to Instagram Threads platform.

### 3. Proofreader
Validate and proofread your content before posting to ensure quality and compliance with platform limits.

## Features

- **Cross-Platform Posting**: Write once, post everywhere
- **Content Validation**: Character limits, formatting, and quality checks
- **Preview Mode**: Dry run feature to verify content before posting
- **Markdown Support**: Write content in easy-to-read markdown format
- **Rate Limit Handling**: Smart handling of platform API limits
- **Content Management**: Organize threads and posts in markdown files

## Setup

1. **Clone the Repository**
```bash
git clone <your-repo-url>
cd <your-repo-name>
```

2. **Install Dependencies**
```bash
# For Twitter Bot
cd twitter_bot
python3 -m pip install -r requirements.txt

# For Threads Bot
cd ../threads_bot
python3 -m pip install -r requirements.txt

# For Proofreader
cd ../proofreader
python3 -m pip install -r requirements.txt
```

3. **Environment Setup**
Create `.env` files in each tool's directory with the required API credentials:

**Twitter Bot (.env)**:
```
TWITTER_API_KEY=your_api_key
TWITTER_API_SECRET=your_api_secret
TWITTER_ACCESS_TOKEN=your_access_token
TWITTER_ACCESS_TOKEN_SECRET=your_access_token_secret
```

**Threads Bot (.env)**:
```
THREADS_USERNAME=your_username
THREADS_PASSWORD=your_password
```

**Proofreader (.env)**:
```
OPENAI_API_KEY=your_openai_key  # If using AI-powered proofreading
```

## Usage

### Twitter Bot
```bash
cd twitter_bot
python3 tweet_thread.py --thread your_thread.md --dry-run  # Preview
python3 tweet_thread.py --thread your_thread.md            # Post
```

### Threads Bot
```bash
cd threads_bot
python3 thread_converter.py your_content.md
```

### Proofreader
```bash
cd proofreader
python3 proofread-doc.py your_content.md
```

## Content Format
Create your content in markdown files. Separate posts with blank lines:

```markdown
First post text here.
Can be multiple lines for the same post.

Second post text here.
Keep within platform character limits.

Third post text here.
```

## Tips
- Use the proofreader before posting to any platform
- Preview content with --dry-run before posting
- Respect platform rate limits
- Keep API credentials secure
- Use separate virtual environments for each tool

## Requirements
- Python 3.x
- Platform-specific APIs (tweepy, threads-api)
- Other dependencies listed in each tool's requirements.txt

## Project Structure
```
.
├── twitter_bot/      # Twitter automation tool
├── threads_bot/      # Instagram Threads integration
└── proofreader/      # Content validation tool
```

## Contributing
Contributions welcome! Please read the contributing guidelines before submitting PRs.

## License
[Your chosen license] 