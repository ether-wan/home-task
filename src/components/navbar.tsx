import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuContent
} from "@/components/ui/navigation-menu"
import { OPYNConnectButton } from './connect-btn'
import Image from 'next/image'

import opynLogo from "@/assets/opyn-logo.png"
import Link from 'next/link'

import { ChartLine, Shrink } from 'lucide-react'

const navigation = [
    { icon: ChartLine, name: 'Trade', href: '#', current: true },
    { icon: Shrink, name: 'Markets', href: '#', current: false },
    { icon: ChartLine, name: 'Vaults', href: '#', current: false },
    { icon: Shrink, name: 'Portfolio', href: '#', current: false }
]

function classNames(...classes: Array<string | boolean>) {
    return classes.filter(Boolean).join(' ')
}

export const Navbar = () => {
    return (
        <Disclosure as="nav">
            <div className="mx-auto">
                <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-shrink-0 items-center">
                            <Image
                                alt="OPYN MARKET"
                                src={opynLogo}
                                className="w-32 h-auto"
                            />
                        </div>
                    <div className="inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="sm:flex hidden flex-1 items-center sm:items-stretch justify-start">
                        <div className="sm:ml-6 sm:flex items-cente">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <div className="flex space-x-1">
                                        {navigation.map((item, i) => (
                                            <NavigationMenuItem key={i}>
                                                <Link href={item.href} legacyBehavior passHref>
                                                    <NavigationMenuLink className={navigationMenuTriggerStyle({ selected: item.current })}>
                                                        {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                                                        {item.name}
                                                    </NavigationMenuLink>
                                                </Link>
                                            </NavigationMenuItem>
                                        ))}
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger>More</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    </div>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden md:flex">
                        <OPYNConnectButton />
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
