import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function Tarifs() {
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
              Une expérience thérapeutique traditionnelle à un tarif unique
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-16 animate-fade-in-up">
            <div className="p-12 bg-card rounded-lg border-2 border-accent shadow-xl text-center">
              <div className="mb-6">
                <p className="text-6xl font-light text-accent mb-2">135 €</p>
                <p className="text-lg text-muted-foreground">par heure</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                Une séance personnalisée de médecine chinoise adaptée à vos besoins
              </p>
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
                  Nous acceptons les chèques et les espèces.
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
