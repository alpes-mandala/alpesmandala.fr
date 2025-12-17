import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import Image from "next/image"

export default function TherapeutesPage() {
  const therapeutes = [
    {
      name: "Sunil Kumar Sharma",
      phone: "06 46 58 34 44",
      specialty: "MASSAGE PLANTAIRE, RELAXATION SONORE, CHANT SACRÉS, ASTROLOGIE VEDIQUE INDIENNE",
      description:
        "Sunil, né au cœur de l’Himalaya, nous transmet des soins sacrés, ancrés dans ses racines indiennes et sa présence. \nLe son et les vibrations sont au coeur de sa pratique. Les consultations en astrologie védique sont traduites par Isabelle. ",
      image: "/sunil.jpg",
    },
    {
      name: "Isabelle Coudray",
      phone: "06 29 22 28 00",
      specialty: "OSTÉOPATHIE, YOGA TRADITIONNEL",
      description:
        "Ostéopathe et enseignante de yoga traditionnel, passionnée de spiritualité, Isabelle accompagne chacun sur le chemin sacré du corps, à la rencontre du Soi. La santé est un voyage vers l’équilibre : ancré dans la matière, le corps s’élève vers le subtil, relié à la Nature et à ses cycles.  ",
      image: "/isabelle.jpg",
    },
    {
      name: "Karine Chanson",
      phone: "06 29 32 90 23",
      specialty: "MASSAGE HOLISTIQUE, PRANAYAMA, MÉDITATION",
      description:
        "Karine, grande aventurière et méditante passionnée, a parcouru le monde en quête de connaissance de soi et de voies de guérison. De ses voyages initiatiques, elle a rapporté une vision unique qu’elle transmet aujourd’hui à travers une alliance de soins holistiques profonds et transformateurs.",
      image: "/karine.jpg",
    },
    {
      name: "Catherine",
      phone: "06 33 31 64 29",
      specialty: "Qi Gong, Massage Tui Na",
      description:
        "Catherine est praticienne en médecine traditionnelle chinoise par le massage Tuina et enseignante en Qi Gong, formée en France et en Chine et imprégnée de cette philosophie de vie issue du taoïsme. \nElle vous accompagne par le massage Tuina  (reconnexion au corps, détente et  stimulation énergétique en lien avec les méridiens et points de digipuncture), ou par une séance de Qi Gong personnalisée.",
      image: "/catherine.jpg",
    },
    {
      name: "Vivian",
      phone: "06 79 93 13 35",
      specialty: "Massage Tuina, Soins énergétiques",
      description:
        "Praticien en médecine traditionnelle chinoise depuis 20 ans, Vivian vous propose de mettre ses compétences à votre service par le massage Tuina, massage traditionnel chinois. \nVivian peut également vous proposer des cours d'initiation au Taï Ji Quan qu'il pratique avec passion.",
      image: "/vivian.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6 animate-fade-in text-balance text-primary">
            Notre Équipe
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-1">
            Une équipe, une vision commune : apporter l'authenticité des traditions de l'Inde et de la Chine au cœur des Alpes françaises.
          </p>
        </div>
      </section>

      {/* Therapists Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapeutes.map((therapeute, index) => (
              <div
                key={index}
                className="group bg-card border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={therapeute.image ? "/therapeutes" + therapeute.image: "/placeholder.svg"}
                    alt={therapeute.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-light text-foreground mb-2">{therapeute.name}</h3>
                  <a className="text-sm text-accent uppercase tracking-wide" href={`tel:${therapeute.phone}`}>{therapeute.phone}</a>

                  <div className="border-t border-border pt-4 my-4">
                    <p className="text-sm font-medium text-foreground mb-2">{therapeute.specialty}</p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{therapeute.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-foreground mb-6 text-balance">
            Prêt à commencer votre voyage vers le bien-être ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Réservez votre séance avec le thérapeute de votre choix
          </p>
          <a
            href="/therapeutes"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 hover:bg-accent/90 transition-all duration-300 text-sm tracking-wide uppercase hover:shadow-lg"
          >
            Réserver maintenant
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
