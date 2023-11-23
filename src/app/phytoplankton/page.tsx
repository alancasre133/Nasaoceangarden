import Image from "next/image"

export default function PhytoplanktonPage() {
  return (
    <>
      <Image
        src="/phytoplancton/pp1.png"
        alt="What is phytoplankton?"
        width={1974}
        height={1084}
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        quality={100}
      />
      <h1>Phytoplankton</h1>
    </>
  )
}
