import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="p-10 px-20 top-0 bg-background w-full flex items-center justify-between">
            <div className="flex w-[300px] gap-2 items-center">
                <Image src={Logo} alt="logo" width={30} height={0} className="aspect-square"/>
                <h1 className="font-semibold text-xl">Unclaimed</h1>
            </div>
            <div className="flex gap-20 w-[300px] justify-center">
                <Link href='#benefits' className="font-semibold">Benefits</Link>
                <Link href='#pricing' className="font-semibold">Pricing</Link>
                <Link href='#faqs' className="font-semibold">FAQ</Link>
            </div>
            <div className="flex gap-5 w-[300px] justify-end">
                <button className="px-6 py-2 bg-[#FCFCFD] border border-[#EDF0F5] rounded-xl">Login</button>
                <a className="text-background px-6 py-2 rounded-xl bg-hdark" href='/get-started'>Signup</a>
            </div>
        </div>
    )
}