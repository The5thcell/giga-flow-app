import { Quote, User, GraduationCap, Users } from 'lucide-react';
import studentsImage from '../assets/students-connected.jpg';

const testimonials = [
  {
    quote: "The internet has helped us learn many things including those that the teachers don't teach in class. I want to say that the internet is also helping other youths - you can get news even when you're far. When I have my phone, I can just connect to the internet and check what is going on in the world and find out what's happening. I'm happy that we have the internet in the school.",
    author: "Jenny",
    role: "8th Grade Student",
    school: "Noonkopir Primary School, Kenya",
    icon: GraduationCap
  },
  {
    quote: "The internet has changed the way we teach. We've gone a long way from the normal use of textbooks. First, our pupils are able to explore. Secondly, it is fun. Third, it opens our pupils' minds. Their minds are broadened, because they can access any information from any country. Through the internet, my students are able to explore.",
    author: "Joseph Waweru",
    role: "Social Science Teacher",
    school: "Noonkopir Primary School, Kenya",
    icon: Users
  },
  {
    quote: "Life before the internet was really chaotic. It was really bad, it was something I wouldn't wish to go back to. Now that the Internet is just there at the click of a button, I don't have to wake up in the middle of the night as what I used to do before. Today, the teachers just normally come to the school to finish their administrative work simply because the Internet here is reliable.",
    author: "Peris Gaturi",
    role: "Head Teacher",
    school: "Noonkopir Primary School, Kenya",
    icon: User
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <div className="absolute top-32 left-32 w-72 h-72 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full blur-3xl animate-float-gentle" />
      <div className="absolute bottom-32 right-32 w-64 h-64 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-2xl animate-float-gentle" style={{ animationDelay: '3s' }} />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-primary/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-primary/20">
            <span className="text-sm font-medium text-primary">Real Stories</span>
          </div>
          <h2 className="giga-section-title animate-fade-up">
            Our Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Our open-source connectivity solutions and innovative technologies have helped countries, 
            transformed communities, and changed lives across the globe.
          </p>
        </div>

        {/* Enhanced Featured Image */}
        <div className="mb-20 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative rounded-3xl overflow-hidden shadow-hero max-w-5xl mx-auto group">
            <img 
              src={studentsImage} 
              alt="Students connected to the internet in a classroom"
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            <div className="absolute inset-0 border-2 border-white/20 rounded-3xl" />
            
            {/* Floating Stats Overlay */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 border border-white/40">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">115k+</div>
                    <div className="text-sm text-muted-foreground">Students Impacted</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">309</div>
                    <div className="text-sm text-muted-foreground">Schools Connected</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">Kenya</div>
                    <div className="text-sm text-muted-foreground">Success Story</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon;
            return (
              <div 
                key={testimonial.author}
                className="giga-testimonial animate-fade-up group"
                style={{ animationDelay: `${(index + 1) * 0.2}s` }}
              >
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <Quote className="w-10 h-10 text-primary/60 mr-4" />
                    <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <p className="text-foreground mb-8 leading-relaxed italic text-lg">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-lg">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-primary font-medium">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.school}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};