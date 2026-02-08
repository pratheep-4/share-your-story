import { Camera, Search, Truck, Heart } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Upload Your Book",
    description: "Take a photo of your old textbook and fill in the details.",
  },
  {
    icon: Search,
    title: "Students Browse",
    description: "Students in need browse available books by subject or title.",
  },
  {
    icon: Truck,
    title: "Claim & Delivery",
    description: "Someone claims your book, and it gets delivered to them.",
  },
  {
    icon: Heart,
    title: "Spread Knowledge",
    description: "Your book finds a new home and helps someone learn.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-secondary/50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">How It Works</h2>
          <p className="text-muted-foreground">
            Sharing is simple. Here's how you can give your textbooks a second life.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
