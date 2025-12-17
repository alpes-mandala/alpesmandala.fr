export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div>
            <h3 className="text-lg font-light tracking-wide mb-4 text-accent">Alpes Mandala</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Médecine chinoise traditionnelle pour votre bien-être en montagne.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-light tracking-wide mb-4 uppercase">Horaires</h4>
            <p className="text-sm text-muted-foreground">
              Lundi - Dimanche
              <br />
              Sur rendez-vous
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>&copy; 2025 Alpes Mandala. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
