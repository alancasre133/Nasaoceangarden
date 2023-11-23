import Image from "next/image"

export function Logo() {
  return (
    <Image
      src="/full-logo.png"
      height={64}
      width={200}
      alt="Ecotide Logo"
      className="contrast-200"
    />
  )
}
