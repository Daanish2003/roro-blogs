import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const HireMeButton = () => {
    return (
        <Button asChild>
            <Link
                href="/auth"
            >
                Login
            </Link>
        </Button>
    )
}

export default HireMeButton