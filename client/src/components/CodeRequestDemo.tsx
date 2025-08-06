import React from 'react';
import CodeRequestPopup from './CodeRequestPopup';
import { Button } from './ui/button';

const CodeRequestDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Code Request Popup Demo</h1>
        
        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Basic Usage</h2>
            <CodeRequestPopup />
          </div>
          
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Custom Trigger</h2>
            <CodeRequestPopup 
              trigger={
                <Button variant="default" className="bg-green-600 hover:bg-green-700">
                  Get Code Access
                </Button>
              }
            />
          </div>
          
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Custom Message</h2>
            <CodeRequestPopup 
              message="Hello! I'm interested in viewing the source code for this project. Could you please provide access? Thank you!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeRequestDemo;
