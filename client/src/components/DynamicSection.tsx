import { Typewriter } from 'react-simple-typewriter';

interface DynamicSectionProps {
  heading: string;
  typewriterText: string;
}

export default function DynamicSection({ heading, typewriterText }: DynamicSectionProps) {
  return (
    <section className="bg-bg py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          {heading}
        </h1>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
          <Typewriter
            words={[typewriterText]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={20}
            deleteSpeed={10}
            delaySpeed={300}
          />
        </p>
      </div>
    </section>
  );
}
