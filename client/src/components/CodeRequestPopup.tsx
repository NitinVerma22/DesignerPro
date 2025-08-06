import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MessageCircle, Code2 } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

interface CodeRequestPopupProps {
  trigger?: React.ReactNode;
  phoneNumber?: string;
  message?: string;
}

const CodeRequestPopup: React.FC<CodeRequestPopupProps> = ({
  trigger,
  phoneNumber = '+917376742022',
  message = 'Hi! I would like to request access to view the code for your project. Could you please share the code or repository link? Thank you!'
}) => {
  const { theme } = useTheme();

  const handleWhatsAppRedirect = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const getThemeClasses = () => {
    return 'border-green-200 bg-gray-900';
  };

  const getButtonClasses = () => {
    return 'bg-green-600 hover:bg-green-700';
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button 
            variant="outline" 
            className={`flex items-center gap-2 ${getButtonClasses()} text-white`}
          >
            <Code2 className="h-4 w-4" />
            View Code
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className={`sm:max-w-md  ${getThemeClasses()}`}>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-green-700">
            <Code2 className="h-5 w-5" />
            Request Code Access
          </DialogTitle>
          <DialogDescription className="text-sm text-green-600 pt-2">
            Get access to view the complete source code for this project
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="rounded-lg bg-green-100 p-4 border border-green-200">
            <p className="text-sm text-center text-green-800 font-medium">
              Ask to view Code
            </p>
            <p className="text-xs text-green-600 text-center mt-2">
              Connect with us on WhatsApp to request code access
            </p>
          </div>
          
          <Button 
            onClick={handleWhatsAppRedirect}
            className={`w-full ${getButtonClasses()} text-white flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow`}
          >
            <MessageCircle className="h-4 w-4" />
            Request via WhatsApp
          </Button>
          
          <p className="text-xs text-center text-green-600">
            You'll be redirected to WhatsApp with a pre-filled message
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CodeRequestPopup;
