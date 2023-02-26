import Link from "next/link";
import Image from "next/image";
import data from '../../data/data.json';



export default function Navbar() {
  return (
    <div>
      <div className="bg-[#040D21]">
        <div className="hidden sm:flex flex-row items-center justify-between mx-16">
          <div className="flex m-4">
            <Image
              src="/images/SoChemLogo.svg"
              width={50}
              height={50}
              alt="logo"
            />
            <span className="pl-8">
              <ul>
                <li className="text-[#2A6BFF]">
                  SoChem
                </li>
                <li className="text-[#F7FAFF]">
                  IITBHU Varanasi
                </li>
              </ul>
            </span>
          </div>
          <div className="justify-end hidden items-center sm:flex space-x-12 2xl:space-x-16 font-medium">
            {data.navbarElements.map((i) => (
              <div
                key={i.id}
              >
                <Link href={i.href}>
                  <button className="hover:underline  2xl:text-xl text-[#F7FAFF] underline-offset-4 decoraton-8 decoration-[#2A6BFF] duration-100">
                    {i.title}
                  </button>
                </Link>
              </div>
            ))}
            <Link href="/login">
              <button className="text-[#F7FAFF] bg-[#2A6BFF] p-2 rounded-2xl w-24">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div >
  )
}