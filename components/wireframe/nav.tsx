interface Props { mobile?: boolean }

export default function WireframeNav({ mobile }: Props) {
  return (
    <nav className={`border-b-2 border-black flex items-center justify-between py-4 mt-0 ${mobile ? "py-3" : ""}`}>
      <div className="border border-black px-3 py-1 text-xs font-bold tracking-widest">
        SEMPU
      </div>
      {mobile ? (
        <div className="border border-black px-3 py-1 text-xs">☰ MENÚ</div>
      ) : (
        <div className="flex gap-6 text-xs tracking-widest">
          {["Sobre Mí", "Proyectos", "Habilidades", "Testimonios", "Contacto"].map((item) => (
            <div key={item} className="border-b-2 border-black pb-0.5 cursor-pointer">
              {item.toUpperCase()}
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}
