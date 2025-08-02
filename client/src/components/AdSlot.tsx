import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AdSlot() {
  const [isVisible, setIsVisible] = useState(false);

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 left-4 z-50">
        <Button
          onClick={() => setIsVisible(true)}
          variant="outline"
          size="sm"
          className="bg-bg-secondary border-border shadow-lg"
        >
          <Eye className="w-4 h-4 mr-2" />
          Show Ad Slot
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-bg-secondary border-b border-t border-border py-2">
      <div className="container mx-auto px-4">
        <div className="bg-border rounded-lg p-4 text-sm text-text-secondary flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span>Advertisement Space - This section can be toggled on/off for future monetization</span>
            <div className="hidden sm:block text-xs opacity-75">
              728x90 Banner • Above the fold placement
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => setIsVisible(false)}
              variant="ghost"
              size="sm"
              className="text-text-secondary hover:text-text"
              title="Hide Ad Slot"
            >
              <EyeOff className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => setIsVisible(false)}
              variant="ghost"
              size="sm"
              className="text-text-secondary hover:text-text"
              title="Close Ad Slot"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
