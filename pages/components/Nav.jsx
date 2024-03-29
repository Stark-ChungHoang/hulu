import requests from "../../utils/requests"
import { useRouter } from "next/router"
function Nav() {
    const router = useRouter()
    return (
        <nav className="relative">
            <div className=" flex px-10 sm:px-20 text-2xl whitespace-nowrap overflow-x-scroll space-x-10 sm:space-x-20 scrollbar-hide ">
            {Object.entries(requests).map(([key,sp]) => (
                <div className="last:pr-14 cursor-pointer transition duration-100 tranform hover:scale-125 
                                        hover:text-white active:text-red-500"
                         key={key} onClick={()=>router.push(`/?genre=${key}`)} >
                    {sp.title}
                </div>
            ))
            }
            <div className="absolute top-0 right-0 w-1/12 h-10 bg-gradient-to-l from-[#06202A]"  />
        </div>
        </nav>
    )
}

export default Nav
