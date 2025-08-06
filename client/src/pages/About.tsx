import { Users, Award, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from 'react-simple-typewriter';
import nitinImg from "@/images/founder.jpg"; 
import suyashImg from "@/images/suyash.jpg"; 
import AmirImg from "@/images/amir.png"; 
import aryanImg from "@/images/aryan.jpg"; 
export default function About() {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "120+" },
    { icon: Award, label: "Projects Completed", value: "200+" },
    { icon: Clock, label: "Years of Experience", value: "4+" },
    { icon: Target, label: "Success Rate", value: "98%" },
  ];

  const team = [
    {
      name: "Nitin Verma",
      role: "Founder & CEO",
      image: nitinImg, // use the imported local image
      bio: "Visionary leader with 4+ years in digital design and strategy."
    },
    {
      name: "Suyash Sharma",
      role: "Lead Designer",
      image: suyashImg,
      bio: "Creative genius specializing in user experience and brand identity."
    },
    {
      name: "Amir Khan",
      role: "Technical Lead",
      image: AmirImg,
      bio: "Full-stack developer passionate about cutting-edge technologies."
    },
    {
      name: "Aryan Verma",
      role: "Marketing Director",
      image: aryanImg,
      bio: "Strategic marketer driving growth through data-driven campaigns."
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
    <section className="bg-bg py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About <span className="text-gradient">DesignPro</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">

  <Typewriter
      words={['We are a passionate team of designers, developers, and strategists dedicated to creating exceptional digital experiences that drive real business results.']}
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

      {/* Our Story */}
      <section className="bg-bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-text">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-text-secondary">
                <p>
                  Founded in 2016, DesignPro started as a small team with a big vision: to help businesses 
                  thrive in the digital age through exceptional design and development.
                </p>
                <p>
                  What began as a two-person studio has grown into a full-service digital agency, but we've 
                  never lost sight of our core values: creativity, quality, and client success.
                </p>
                <p>
                  Today, we work with companies of all sizes, from startups to Fortune 500 enterprises, 
                  helping them transform their digital presence and achieve their business goals.
                </p>
              </div>
              
            </div>
            
            <div className="bg-bg rounded-2xl p-8 shadow-lg border border-border">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 gradient-bg rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="text-white w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold text-text">{stat.value}</div>
                      <div className="text-sm text-text-secondary">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-bg py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-text">
              Our <span className="text-gradient">Mission</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-white w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-text mb-4">Innovation</h3>
              <p className="text-text-secondary">
                We stay ahead of industry trends and technologies to deliver cutting-edge solutions 
                that give our clients a competitive advantage.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-text mb-4">Collaboration</h3>
              <p className="text-text-secondary">
                We believe in true partnership with our clients, working closely together to understand 
                their goals and deliver exceptional results.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-text mb-4">Excellence</h3>
              <p className="text-text-secondary">
                Quality is never an accident. We're committed to delivering work that not only meets 
                but exceeds expectations in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-text">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              The talented individuals behind DesignPro's success. Each team member brings unique skills 
              and expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-bg rounded-xl p-6 shadow-lg border border-border card-hover text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-text mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-text-secondary text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
