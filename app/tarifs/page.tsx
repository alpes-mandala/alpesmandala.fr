import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function Tarifs() {
  const services = [
    {
      name: "Massage Tuina - 30 min",
      price: "60 €",
      description: "Séance découverte pour une première expérience",
    },
    {
      name: "Massage Tuina - 60 min",
      price: "120 €",
      description: "Séance complète pour une détente optimale",
    },
    {
      name: "Massage Tuina - 90 min",
      price: "170 €",
      description: "Séance approfondie pour un bien-être total",
    },
    {
      name: "Forfait 5 séances",
      price: "550 €",
      description: "Économisez 50€ avec notre forfait privilège",
    },
    {
      name: "Massage en duo",
      price: "220 €",
      description: "Deux personnes, 60 minutes chacune",
    },
    {
      name: "Massage à domicile",
      price: "Sur devis",
      description: "Service premium pour votre confort",
    },
  ]

  return (
    <>
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="relative h-80 mb-16 -mx-6 overflow-hidden">
          <Image
            src="/luxury-spa-treatment-room-with-massage-table-and-c.jpg"
            alt="Salle de traitement premium"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center animate-fade-in">
            <div className="text-center text-white space-y-4">
              <p className="text-sm tracking-widest uppercase animate-fade-in-down">Nos prestations</p>
              <h1 className="text-5xl md:text-6xl font-light tracking-tight animate-fade-in-up">Tarifs</h1>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4 animate-fade-in-up">
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Des tarifs adaptés à vos besoins pour une expérience de bien-être luxueuse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 animate-stagger">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-lg border border-border hover:border-accent transition-smooth hover:shadow-lg hover:scale-105"
              >
                <h3 className="text-lg font-light tracking-wide mb-2">{service.name}</h3>
                <p className="text-3xl font-light text-accent mb-4">{service.price}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-light tracking-tight text-center mb-12 animate-fade-in-up">
              Nos services premium
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-stagger">
              <div className="space-y-4">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-smooth group">
                  <Image
                    src="/relaxing-massage-therapy-session-in-spa.jpg"
                    alt="Massage relaxant"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-light animate-fade-in-up">Séances individuelles</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Profitez d'une expérience personnalisée adaptée à vos besoins spécifiques et à votre bien-être.
                </p>
              </div>

              <div className="space-y-4">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-smooth group">
                  <Image
                    src="/couples-massage-therapy-in-luxury-spa-setting.jpg"
                    alt="Massage en duo"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-light animate-fade-in-up">Massages en duo</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Partagez un moment de détente en couple dans une ambiance intimiste et luxueuse.
                </p>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="bg-secondary/30 rounded-lg p-8 md:p-12 space-y-6 animate-fade-in-up">
            <h2 className="text-2xl font-light tracking-tight">Informations pratiques</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-light tracking-wide mb-3 uppercase text-sm">Conditions d'annulation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Les annulations doivent être effectuées au moins 24 heures avant votre rendez-vous pour éviter des
                  frais.
                </p>
              </div>

              <div>
                <h3 className="font-light tracking-wide mb-3 uppercase text-sm">Moyens de paiement</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nous acceptons les cartes bancaires, les virements et les espèces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
