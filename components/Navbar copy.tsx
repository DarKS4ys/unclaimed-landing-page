export default function Navbar() {
    return (
        <div className="p-10 fixed top-0 bg-background w-full flex items-center justify-between">
            <h1 className="font-semibold w-[300px]">Unclaimed</h1>
            <div className="flex gap-5 w-[300px] justify-center">
                <button>Resources</button>
                <button>About</button>
                <button>Pricing</button>
                <button>FAQs</button>
            </div>
            <div className="flex gap-5 w-[300px] justify-end">
                <button>Login</button>
                <button className="bg-[--highlight] text-[--background] px-4 py-2 rounded-xl">Signup</button>
            </div>
        </div>
    )
}