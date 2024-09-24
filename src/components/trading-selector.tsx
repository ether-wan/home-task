import { Button } from "@/components/ui/button";


export const TradingSelector = () => {
    return (
        <>
            <div className="flex w-full h-full">
                <Button variant="default" borderRadius="left" selected={true}>Perps</Button>
                <Button variant="default" borderRadius="square" selected={false}>Lend</Button>
                <Button variant="default" borderRadius="right"  selected={false}>Vaults</Button>
            </div>
        </>
    )
}