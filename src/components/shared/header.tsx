import Link from "next/link";
import { Code } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "~/components/ui/button";

export default function Header() {
  return (
    <nav className="bg-background/80 sticky top-0 z-50 border-b px-4 py-3 backdrop-blur-sm md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-2xl font-bold"
        >
          <Code className="text-primary h-6 w-6" />
          <span className="sr-only">SnippetBase</span>
          <span className="hidden sm:inline">SnippetBase</span>
        </Link>

        {/* Nav Links (Placeholder) */}
        <div className="hidden space-x-6 md:flex">
          <Link
            href="#features"
            className="hover:text-primary text-sm font-medium"
          >
            Features
          </Link>
          <Link
            href="#problem-solution"
            className="hover:text-primary text-sm font-medium"
          >
            Why Us?
          </Link>
          <Link
            href="#pricing"
            className="hover:text-primary text-sm font-medium"
          >
            Pricing
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-2">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="sm">Sign Up</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
