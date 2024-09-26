import { Button } from "@/components/ui/button"
import { useState } from "react"
import { TrendingUp, TrendingDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import settingsIcon from "@/assets/icons/settings.png"
import Image from "next/image"

export const TradeUi = () => {

    const [action, setAction] = useState<string>("long");

    const leverages = [0.1, 1, 2, 5, 10, 15, 15, 20]

    return (
        <>
            <div className="grid grid-cols-12 mt-3 gap-2">
                <div className="md:col-span-6 col-span-12">
                    <Button onClick={() => setAction("long")} action={action == "long" ? "long" : "none"} variant="trading">
                        <TrendingUp className="mr-2" />Long
                    </Button>
                </div>

                <div className="md:col-span-6 col-span-12">
                    <Button onClick={() => setAction("short")} action={action == "short" ? "short" : "none"} variant="trading">
                        <TrendingDown className="mr-2" />Short
                    </Button>
                </div>
            </div>

            <div className="flex mt-3 bg-[#27292B] rounded-md">
                <Button variant="default">0.5 Perp</Button>
                <Button variant="default" action="select">1 Perp</Button>
                <Button variant="default" >2 Perps</Button>
            </div>

            <div>
                <h5 className="text-center text-sm mt-2 text-[#A1A5AA] decoration-solid decoration-[#A1A5AA] underline">Compare perps</h5>
                <hr className="mt-3 border-[#27292B]" />
            </div>

            <div className="flex justify-between mt-4 items-center">
                <p className="text-white">Long <span className="text-[#A1A5AA]">$4,9876</span></p>
                <Image src={settingsIcon} alt="settings" className="hover:cursor-pointer" style={{width : "16px", height : "16px"}}/>
            </div>

            <div className="mt-3">
                <Input />
            </div>

            <div className="mt-3">
                <p className="text-white">Asset Leverage</p>
                <div className="grid grid-cols-12">
                    <div className="col-span-10">
                        <Slider className="mt-3" />
                        <div className="flex justify-between mt-2 text-[#A1A5AA]">
                            {
                                leverages.map((leverage, i) => (
                                    <small key={i}>{leverage}x</small>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-span-2 flex justify-center p-1">
                        
                    </div>
                </div>
                <hr className="mt-3 border-[#27292B]" />

                <div className="grid grid-cols-12">
                    
                </div>
            </div>

        </>
    )
}