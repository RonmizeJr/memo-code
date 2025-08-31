import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-background border-t py-8">
      <div className="text-muted-foreground mx-auto max-w-7xl px-4 text-center text-sm md:flex md:justify-between md:text-left">
        <p className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} MemoCode. All rights reserved.
        </p>
        <div className="space-x-4">
          <Link href="/privacy" className="hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-primary">
            Terms of Service
          </Link>
          <Link
            href="https://github.com/RonmizeJr/memo-code"
            className="hover:text-primary"
          >
            GitHub
          </Link>
          {/* Add more social links as needed */}
        </div>
      </div>
    </footer>
  );
}
