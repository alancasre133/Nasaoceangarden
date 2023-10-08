import Link from "next/link"

const LINKS = [
  {
    href: "oceans",
    text: "About oceans",
  },
  {
    href: "phytoplankton",
    text: "Phytoplankton",
  },
  {
    href: "gardens",
    text: "Explore gardens",
  },
]

export function Footer() {
  return (
    <footer className="z-10 w-full pt-4">
      <ul className="flex flex-col gap-28 md:flex-row items-center justify-center flex-wrap">
        {LINKS.map(({ href, text }) => (
          <li key={href}>
            <Link href={href} className="text-3xl hover:text-[#56898F]">
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}
