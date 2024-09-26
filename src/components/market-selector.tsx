import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { mockPairs } from "@/mock/pair"
import { useState } from "react"
import { ChevronDown } from "lucide-react" 
import Image from "next/image";


export const MarketSelector = () => {

    const [selectedPair, setSelectedPair] = useState(mockPairs[0]);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="dropdown" borderRadius="soft" action="select">
                        <Image src={selectedPair.icon} alt={selectedPair.name} width={52} />
                        {selectedPair.name} 
                        <ChevronDown/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {mockPairs.map((pair, i) => (
                        <Button variant="dropdown" borderRadius="soft" action="select" key={i}>
                            <Image src={selectedPair.icon} alt={selectedPair.name} width={52} />
                            <span className="text-xl">{pair.name}</span>
                        </Button>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}