import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { mockPairs } from "@/mock/pair"
import { useState } from "react"
import { ChevronDown } from "lucide-react" 


export const MarketSelector = () => {

    const [selectedPair, setSelectedPair] = useState(mockPairs[0]);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="default" borderRadius="soft" selected={true}>{selectedPair.name} {<ChevronDown />}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {mockPairs.map((pair, i) => (
                        <Button variant="default" borderRadius="soft" selected={true} key={i}>{pair.name}</Button>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}