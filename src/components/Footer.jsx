import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-2 px-4 bg-card relative border-t border-border mt-3 pt-2 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-md text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} by @adirathor | All rights reserved.
      </p>
      <a
        href="#intro"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
