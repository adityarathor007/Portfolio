import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { IntroSection } from "../components/IntroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { Footer } from "../components/Footer";
import { ContactSection } from "../components/ContactSection";


export const Home = () => {
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme toggle */}

            {/* Background Effect */}
            <StarBackground />

            {/* Navbar */}
            <Navbar />
            <div className="hidden sm:block">
                <ThemeToggle />
            </div>

            {/* Main Content */}
            <main>
                <IntroSection />
                <AboutSection />
                <ProjectsSection />
                <ContactSection />
                <Footer />
            </main>
            {/* Footer */}


        </div>
        );
}
