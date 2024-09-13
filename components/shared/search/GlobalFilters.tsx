"use client"

import { Button } from "@/components/ui/button"
import { GlobalSearchFilters } from "@/constants/filters"
import { formUrlQuery } from "@/lib/utils"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

const GlobalFilters = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [active, setActive] = useState('')

    const handleTypeClick = (item: string) => {
        if (active === item) {
            setActive('')
            const newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'type',
                value: null
            })

            router.push(newUrl, {scroll: false})
        } else {
            setActive(item)
            const newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'type',
                value: item.toLowerCase()
            })
            router.push(newUrl, {scroll: false})
            }
        }

    return (
        <div className="flex gap-5 px-5 items-center">
            <p className="text-dark400_light900 body-medium">Type:</p>
            <div className="flex gap-3">
                {GlobalSearchFilters.map((item) => {
                        return (
                            <Button key={item.value} onClick={() => {handleTypeClick(item.value)}}
                                className={`body-medium rounded-full px-5
                                    capitalize shadow-none ${active === item.value
                                        ? 'bg-primary-100 text-primary-500'
                                        : 'bg-light-800 text-light-500 dark:bg-dark-300'
                                    } hover:text-primary-500`}
                            >
                                {item.name}
                            </Button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GlobalFilters