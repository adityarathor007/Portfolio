import {
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;

    const MOCK_MODE = false;

    const fakePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // toggle resolve/reject to test both cases
        resolve();
    //   reject(new Error("Fake failure"));
        }, 1000);
     });

    (MOCK_MODE ? fakePromise : emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ))
      .then(
        () => {
          toast({
            title: "Email sent!",
            description:
              "Thank you for your message. I'll get back to you soon ",
          });
          setIsSubmitting(false);
          form.reset();
        },
        (error) => {
          toast({
            title: "Error!",
            description: "Something went wrong. Try again after some time.",
          });
          setIsSubmitting(false);
        }
      );
  };



  return (
    <section id="contact" className="pt-40 pb-10 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Establish <span className="text-primary"> Contact</span>
        </h2>

        <div className="flex justify-center">
          <div className="bg-card p-8 rounded-lg shadow-xs w-full md:w-2/3 lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Send a Signal
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
             <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="your cosmic identity"
                />
              </div>


              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="your cosmic email_id"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Your Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="your subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Type your cosmic message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                {isSubmitting ? "Sending..." : "Shoot"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
