import {
  TwitterShareButton,
  LinkedinShareButton,
  FacebookShareButton,
  TwitterIcon,
  LinkedinIcon,
  FacebookIcon,
} from 'react-share';

interface ShareButtonsProps {
  url: string;
  title: string;
  summary?: string;
}

export function ShareButtons({ url, title, summary }: ShareButtonsProps) {
  return (
    <div className="flex gap-3 items-center">
      <TwitterShareButton 
        url={url} 
        title={title}
        className="flex"
      >
        <div className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
          <TwitterIcon size={20} round={false} iconFillColor="currentColor" bgStyle={{ fill: 'transparent' }} />
        </div>
      </TwitterShareButton>

      <LinkedinShareButton 
        url={url} 
        title={title}
        summary={summary}
        source="bzhoff.com"
        className="flex"
      >
        <div className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
          <LinkedinIcon size={20} round={false} iconFillColor="currentColor" bgStyle={{ fill: 'transparent' }} />
        </div>
      </LinkedinShareButton>

      <FacebookShareButton 
        url={url}
        hashtag="#tech"
        className="flex"
      >
        <div className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
          <FacebookIcon size={20} round={false} iconFillColor="currentColor" bgStyle={{ fill: 'transparent' }} />
        </div>
      </FacebookShareButton>
    </div>
  );
} 