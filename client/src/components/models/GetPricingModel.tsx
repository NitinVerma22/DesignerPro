import { createPortal } from "react-dom";
import { GetPricing } from "../sections/GetPricing";

interface GetPricingModalProps {
  serviceName: string;
  heading?: string;
  onClose: () => void;
}

export function GetPricingModal({ serviceName, heading = "Get Pricing", onClose }: GetPricingModalProps) {
  if (typeof window === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto">
      <div className="fixed inset-0 bg-black/10 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-50 mt-[5vh] mb-[5vh] w-full max-w-md overflow-y-auto max-h-[90vh]">
        <GetPricing serviceName={serviceName} heading={heading} onClose={onClose} />
      </div>
    </div>,
    document.body
  );
}
