import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Sparkles } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import DasboardBtn from "./DasboardBtn";

function Navbar() {
  return (
    <nav className="border-b px-4 py-3 flex items-center justify-between">
      {/* LEFT SIDE - LOGO */}
      <Link
        href="/"
        className="flex items-center gap-2 font-semibold text-2xl font-mono hover:opacity-80 transition-opacity"
      >
        <Sparkles className="size-8 text-violet-500" />
        <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
          InterVerse
        </span>
      </Link>

      {/* RIGHT SIDE - ACTIONS */}
      <SignedIn>
        <div className="flex items-center space-x-4">
          <DasboardBtn />
          <ModeToggle />
          <UserButton />
        </div>
      </SignedIn>
    </nav>
  );
}

export default Navbar;
