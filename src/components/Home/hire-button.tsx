import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const HireMeButton = () => {
    return (
        <Button asChild>
            <Link
                href="/hire"
            >
                {"Hire Me"}
            </Link>
        </Button>
    )
}

export default HireMeButton