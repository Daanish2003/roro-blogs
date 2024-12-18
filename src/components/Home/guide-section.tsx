import React from 'react'
import SectionCardWrapper from './section-card-wrapper'
import SectionWrapper from './section-wrapper'

const GuideSection = () => {
    return (
        <SectionWrapper
            heading='Guides'
            type='guides'
        >
            <div className='flex flex-col sm:grid sm:grid-cols-2 sm:co lg:grid-cols-3 gap-x-4 gap-y-4'>
                <SectionCardWrapper
                    title='Better Auth'
                    description='Implement authentication using Next.js and better-auth'
                    imageUrl='/logo-dark.svg'
                    type='guides'
                    slug="better-auth"
                />
                <SectionCardWrapper
                    title='Better Auth'
                    description='Implement authentication using Next.js and better-auth'
                    imageUrl='/logo-dark.svg'
                    type='guides'
                    slug="better-auth"
                />
                <SectionCardWrapper
                    title='Better Auth'
                    description='Implement authentication using Next.js and better-auth'
                    imageUrl='/logo-dark.svg'
                    type='guides'
                    slug="better-auth"
                />
                <SectionCardWrapper
                    title='Better Auth'
                    description='Implement authentication using Next.js and better-auth'
                    imageUrl='/logo-dark.svg'
                    type='guides'
                    slug="better-auth"
                />
                <SectionCardWrapper
                    title='Better Auth'
                    description='Implement authentication using Next.js and better-auth'
                    imageUrl='/logo-dark.svg'
                    type='guides'
                    slug="better-auth"
                />
                <SectionCardWrapper
                    title='Better Auth'
                    description='Implement authentication using Next.js and better-auth'
                    imageUrl='/logo-dark.svg'
                    type='guides'
                    slug="better-auth"
                />
            </div>
        </SectionWrapper>
    )
}

export default GuideSection