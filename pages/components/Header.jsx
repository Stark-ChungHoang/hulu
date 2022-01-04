import Image from "next/image"
import HeaderItems from "./HeaderItems"
import {
    HomeIcon, BadgeCheckIcon, CollectionIcon,
    LightningBoltIcon , SearchIcon, UsersIcon
} from "@heroicons/react/outline"
function Header() {
    return (
        <header className="flex flex-col sm:flex-row justify-between items-center m-5">
            <div className="flex flex-grow max-w-2xl justify-evenly">
                <HeaderItems Icon={HomeIcon} title="HOME"></HeaderItems>
                <HeaderItems Icon={LightningBoltIcon} title="TRENDING"></HeaderItems>
                <HeaderItems Icon={BadgeCheckIcon} title="VERIFIED"></HeaderItems>
                <HeaderItems Icon={CollectionIcon} title="COLLECTIONS"></HeaderItems>
                <HeaderItems Icon={SearchIcon} title="SEARCH"></HeaderItems>
                <HeaderItems Icon={UsersIcon} title="ACCOUNT"></HeaderItems>
            </div>
            <Image
                    className="object-contain"
                    src="https://links.papareact.com/ua6"
                    width={200}
                    height={100}
            />
        </header>
    )
}

export default Header
