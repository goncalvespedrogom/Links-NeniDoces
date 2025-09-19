import Image from "next/image";

type LinkItem = {
  label: string;
  href: string;
};

const LINKS: LinkItem[] = [
  { 
    label: "IFOOD", 
    href: "https://www.ifood.com.br/delivery/cachoeiro-de-itapemirim-es/tropicalia-acai-basileia/69312a35-6b0f-4315-b17a-e1b5bcdbfbde?UTM_Medium=share" 
  },
  { 
    label: "WHATSAPP", 
    href: "https://wa.me/5528999017096" 
  },
  { 
    label: "INSTAGRAM", 
    href: "https://www.instagram.com/acaitropicaliaes/" 
  },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center pt-12">
      <div className="flex flex-col items-center gap-16">
        <Image
          src="/logo/logo.png"
          alt="Logo Açaí Tropicalia"
          width={220}
          height={220}
          className="rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
          priority
          unoptimized
        />

        <div className="flex flex-col gap-8 w-[360px] max-w-[90vw]">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group select-none inline-flex items-center justify-center h-[70px] rounded-[42px] text-[22px] font-bold tracking-wide transition-transform duration-150 active:translate-y-[2px] hover:opacity-90"
              style={{
                color: "#0E9252",
                background: "#F6C106",
                fontFamily: "Codec Pro, sans-serif",
                fontWeight: "800",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
