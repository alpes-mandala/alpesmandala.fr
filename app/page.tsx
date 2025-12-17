import { titleFont } from "@/app/fonts";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { AstrologyIcon, MassageIcon, OsteopathyIcon, QiGongIcon, YogaIcon } from "@/components/practice-icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero Section with Image */}
        <section className="min-h-screen flex items-center justify-center px-6 bg-background relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/serene-mountain-spa-massage-room-with-soft-lightin.jpg"
              alt="Spa luxueux en montagne"
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <div className="space-y-4 animate-fade-in-up">
              <p className="text-sm tracking-widest uppercase text-accent">
                Expérience exclusive
              </p>
              <h1 className={cn("text-5xl md:text-7xl font-light tracking-tight text-balance text-primary", titleFont.className)}>
                Alpes Mandala
              </h1>
              <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto text-balance">
                Soins en chambre ou en chalet privé
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                href="/tarifs"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth font-light tracking-wide hover:shadow-lg"
              >
                Découvrir nos tarifs
              </Link>
              <Link
                href="/therapeutes"
                className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-smooth font-light tracking-wide hover:shadow-lg"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-light tracking-tight text-center mb-16 animate-fade-in-up">
              Dans le cadre privilégié des Alpes, nous vous proposons des soins
              et pratiques inspirés des grandes sagesses de l'Inde et de la
              Chine.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-stagger">
              {[
                {
                  icon: <MassageIcon />,
                  title: "Massages énergétiques",
                  description: "Harmonisation du corps et de l'esprit par des techniques ancestrales.",
                },
                {
                  icon: <YogaIcon />,
                  title: "Yoga",
                  description: "Équilibre et sérénité à travers des postures et la respiration.",
                },
                {
                  icon: <QiGongIcon />,
                  title: "QI Gong",
                  description: "Cultiver l'énergie vitale par des mouvements doux et méditatifs.",
                },
                {
                  icon: <OsteopathyIcon />,
                  title: "Ostéopathie",
                  description: "Rétablir la mobilité et l'équilibre structurel du corps.",
                },
                {
                  icon: <AstrologyIcon />,
                  title: "Astrologie védique",
                  description: "Guidance et compréhension de soi par la sagesse ancestrale.",
                },
              ].map((practice, index) => (
                <div
                  key={index}
                  className="p-8 bg-card rounded-lg border border-border hover:border-accent transition-smooth hover:shadow-lg hover:scale-105 text-center flex justify-center items-center flex-col"
                >
                  <div className="flex items-center gap-2">
                    <div className="mb-4 flex justify-center w-8">{practice.icon}</div>
                    <h3 className="text-lg font-light tracking-wide mb-3 text-accent">{practice.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{practice.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-secondary/30">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl font-light tracking-tight">
              Élevez vos sens, apaisez votre esprit
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Réservez votre séance dès maintenant
            </p>
            <Link
              href="/therapeutes"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-smooth font-light tracking-wide hover:shadow-lg hover:scale-105"
            >
              Réserver maintenant
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
