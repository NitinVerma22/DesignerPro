import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { GetPricing } from "../sections/GetPricing";
import { Button } from "@/components/ui/button";

export default function GetPricingButton({ serviceName, variant = "default" }: { serviceName: string; variant?: "default" | "header" }) {
  const [isOpen, setIsOpen] = useState(false);

  const getButtonClass = () => {
    if (variant === "header") {
      return "gradient-bg text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105";
    }
    return "text-primary hover:text-primary-dark font-medium inline-flex items-center p-0 h-auto hover:bg-transparent";
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant={variant === "header" ? "default" : "ghost"}
        className={getButtonClass()}
      >
        {variant === "header" ? "Get Started" : "Learn More"} <ArrowRight className="ml-2 w-4 h-4" />
      </Button>

      {isOpen && (
        <GetPricing
          serviceName={serviceName}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
