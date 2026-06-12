import { BriefcaseBusiness, School, Code, User, Github, Linkedin, Mail, FileUser } from "lucide-react";


export const AboutSection=()=>{
    return <section id="about" className="pt-60 pb-20 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-8xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  <div className="space-y-6">


    <div className="flex justify-center md:justify-center">
      <img
        src="/self.png" // put your image in public/ folder for cleaner import
        alt="My Profile"
        className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-xl border-4 border-primary object-cover"
      />
    </div>


    <div className="flex justify-center gap-6 mt-4">

      <a
        href="https://www.linkedin.com/in/aditya-rathor-87829324b/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        <Linkedin className="w-6 h-6" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/adityarathor007"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition"
      >
        <Github className="w-6 h-6" />
      </a>

      {/* Email */}
      <a
        href="mailto:b22ai044@iitj.ac.in"
        className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
      >
        <Mail className="w-6 h-6" />
      </a>

      <a
        href="https://drive.google.com/file/d/13Ysgf8UPewGMCHklU2hH0Rsx8X2d91nJ/view?usp=drive_link"
        className="p-3 rounded-full bg-cyan-600 text-white hover:bg-cyan-700 transition"
      >
        <FileUser className="w-6 h-6" />
      </a>

    </div>
    </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <School className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-xl">IIT Jodhpur</h4>
                  <p className="text-lg text-muted-foreground">
                    Completed B.tech in artificial intelligence and data science
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BriefcaseBusiness className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Samsung Electronics</h4>
                  <p className="text-lg text-muted-foreground">
                    Worked as an R&D intern on sensors present in samsung wearables for activity tracking
                  </p>
                </div>
                </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-xl">Hobbies</h4>
                    <p className="text-lg text-muted-foreground">
                      {/* Under mentorship of Dr.Anand Mishra working on text-aware noise removal of real-world images and previously worked on the script identification module of IndicPhotoOCR, part of the Bhashini Project. */}
                      Besides developing I enjoy activites that help me stay balanced and creative. Passionate about fitness and maintain healthy lifestyle through gym, expressing myself through piano and playing football. I also have keen interest in styling stuff including myself :)
                    </p>
                  </div>
                </div>
              </div>
                </div>
        </div>
        </div>

    </section>
}
