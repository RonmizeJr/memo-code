import { SignUpButton } from "@clerk/nextjs";
import { Search, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardDescription, CardTitle } from "~/components/ui/card";

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* 2. Hero Section */}
      <section className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden py-16 md:py-24">
        {/* Background Gradient / Shape (Example) */}
        <div className="from-primary/10 to-background absolute inset-0 z-0 bg-gradient-to-br opacity-50"></div>
        <div className="bg-primary/50 absolute -top-1/4 -left-1/4 h-80 w-80 rounded-full opacity-20 blur-3xl filter"></div>
        <div className="bg-secondary/50 absolute -right-1/4 -bottom-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl filter"></div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Never forget a code snippet again.
          </h1>
          <p className="text-muted-foreground mb-8 text-lg md:text-xl">
            Your personal, searchable code library. Efficiently save, search,
            and recall your most valuable code snippets.
          </p>
          <div className="flex justify-center space-x-4">
            <SignUpButton mode="modal">
              <Button size="lg" className="px-8 py-3">
                Start Organizing Your Code
              </Button>
            </SignUpButton>
            <Button variant="outline" size="lg" className="px-8 py-3">
              Learn More
            </Button>
          </div>
          {/* Optional: Screenshot/Demo Placeholder */}
          <div className="mt-12 overflow-hidden rounded-lg border shadow-xl">
            <img
              src="https://placehold.co/1200x600/E5E7EB/1F2937/png?text=App+Screenshot+or+Demo+GIF"
              alt="App Screenshot"
              width={1200}
              height={600}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* 3. Problem/Solution Section */}
      <section id="problem-solution" className="bg-muted/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-12 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 lg:text-4xl">
            Tired of scattered gists and endless searching?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="flex flex-col items-center p-6 text-center">
              <Zap className="text-primary mb-4 h-10 w-10" />
              <CardTitle className="mb-2 text-xl font-semibold">
                Lost Snippets
              </CardTitle>
              <CardDescription>
                Keep all your valuable code in one secure, accessible place.
              </CardDescription>
            </Card>
            <Card className="flex flex-col items-center p-6 text-center">
              <Sparkles className="text-primary mb-4 h-10 w-10" />
              <CardTitle className="mb-2 text-xl font-semibold">
                Wasted Time
              </CardTitle>
              <CardDescription>
                Powerful search and tagging means you find what you need, fast.
              </CardDescription>
            </Card>
            <Card className="flex flex-col items-center p-6 text-center">
              <Search className="text-primary mb-4 h-10 w-10" />
              <CardTitle className="mb-2 text-xl font-semibold">
                Unorganized Mess
              </CardTitle>
              <CardDescription>
                Structure your knowledge with tags, languages, and descriptions.
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Key Features Showcase Section */}
      <section id="features" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 scroll-m-20 border-b pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0 lg:text-4xl">
            Features Designed for Developers
          </h2>

          {/* Feature 1 */}
          <div className="mb-20 grid items-center gap-8 md:grid-cols-2 lg:gap-16">
            <div className="order-2 md:order-1">
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                Smart Search & Filtering
              </h3>
              <p className="text-muted-foreground text-lg">
                Find *anything* in seconds. Full-text search, language filters,
                and custom tags put your code at your fingertips. No more
                digging through old projects or browser history.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://placehold.co/800x450/E5E7EB/1F2937/png?text=Search+Feature+Screenshot"
                alt="Search Feature"
                width={800}
                height={450}
                className="h-auto w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="mb-20 grid items-center gap-8 md:grid-cols-2 lg:gap-16">
            <div className="order-2">
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                Beautiful Syntax Highlighting
              </h3>
              <p className="text-muted-foreground text-lg">
                Read your code with ease. Support for dozens of languages
                ensures your snippets look great and are easy to parse, just
                like in your favorite IDE.
              </p>
            </div>
            <div className="order-1">
              <img
                src="https://placehold.co/800x450/E5E7EB/1F2937/png?text=Syntax+Highlighting+Example"
                alt="Syntax Highlighting"
                width={800}
                height={450}
                className="h-auto w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
            <div className="order-2 md:order-1">
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                Effortless Organization
              </h3>
              <p className="text-muted-foreground text-lg">
                Tag, categorize, and describe your snippets. Build a personal
                knowledge base that works the way *you* think, not a rigid
                folder structure.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://placehold.co/800x450/E5E7EB/1F2937/png?text=Organization+Screenshot"
                alt="Organization"
                width={800}
                height={450}
                className="h-auto w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Call to Action (Bottom) */}
      <section className="bg-primary text-primary-foreground py-16 text-center md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Ready to supercharge your workflow?
          </h2>
          <p className="mb-8 text-lg opacity-90 md:text-xl">
            Join hundreds of developers who are already building their personal
            code library.
          </p>
          <SignUpButton mode="modal">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Get Started for Free
            </Button>
          </SignUpButton>
        </div>
      </section>
    </main>
  );
}
