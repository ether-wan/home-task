import { Button } from "@/components/ui/button";
import { useState } from "react";


export const TradingSelector = () => {

    return (
        <>
            <div className="flex w-full h-full">
                <Button variant="market" action="select" borderRadius="left">Perps</Button>
                <Button variant="market" borderRadius="square">Lend</Button>
                <Button variant="market" borderRadius="right">Vaults</Button>
            </div>
        </>
    )
}