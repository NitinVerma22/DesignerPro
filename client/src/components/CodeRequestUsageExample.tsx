import React from 'react';
import CodeRequestPopup from './CodeRequestPopup';
import { Button } from './ui/button';
import { Code2 } from 'lucide-react';

export const CodeRequestUsageExample: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <CodeRequestPopup 
        trigger={
          <Button 
            variant="default" 
            className="bg-green-600 hover:bg-green-700 text-white shadow-lg rounded-full p-4"
          >
            <Code2 className="h-5 w-5" />
          </Button>
        }
      />
    </div>
  );
};
