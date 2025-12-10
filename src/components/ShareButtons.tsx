import { Twitter, Linkedin, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ShareButtonsProps {
  title: string;
  url: string;
}

const ShareButtons = ({ title, url }: ShareButtonsProps) => {
  const handleShare = (platform: string) => {
    if (platform === "copy") {
      navigator.clipboard.writeText(url);
      toast.success("Link copied!");
      return;
    }
    
    const shareUrl = platform === "twitter" 
      ? `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
      : `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    
    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="sm" onClick={() => handleShare("twitter")} className="font-mono">
        <Twitter className="w-4 h-4 mr-2" />Twitter
      </Button>
      <Button variant="outline" size="sm" onClick={() => handleShare("linkedin")} className="font-mono">
        <Linkedin className="w-4 h-4 mr-2" />LinkedIn
      </Button>
      <Button variant="outline" size="sm" onClick={() => handleShare("copy")} className="font-mono">
        <Link2 className="w-4 h-4 mr-2" />Copy Link
      </Button>
    </div>
  );
};

export default ShareButtons;
