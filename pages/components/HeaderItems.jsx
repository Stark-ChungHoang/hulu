function HeaderItems({Icon, title}) {
    return (
        <div className="group flex flex-col items-center w-12 sm:w-20 cursor-pointer">
            <Icon className="h-8 group-hover:animate-bounce mb-1" />
            <p className="tracking-widest opacity-0 group-hover:opacity-100">{title}</p>
        </div>
    )
}

export default HeaderItems
