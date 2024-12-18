import React from 'react'
import SectionWrapper from './section-wrapper'
import SectionCardWrapper from './section-card-wrapper'

const BlogSection = () => {
  return (
    <SectionWrapper
      heading='Blogs'
      type='blogs'
    >
      <div className='flex flex-col sm:grid sm:grid-cols-2 sm:co lg:grid-cols-3 gap-x-4 gap-y-4'>
        <SectionCardWrapper
          title='Better Auth'
          description='Implement authentication using Next.js and better-auth'
          imageUrl='/logo-dark.svg'
          type='blogs'
          slug="better-auth"
        />
        <SectionCardWrapper
          title='Better Auth'
          description='Implement authentication using Next.js and better-auth'
          imageUrl='/logo-dark.svg'
          type='blogs'
          slug="better-auth"
        />
        <SectionCardWrapper
          title='Better Auth'
          description='Implement authentication using Next.js and better-auth'
          imageUrl='/logo-dark.svg'
          type='blogs'
          slug="better-auth"
        />
        <SectionCardWrapper
          title='Better Auth'
          description='Implement authentication using Next.js and better-auth'
          imageUrl='/logo-dark.svg'
          type='blogs'
          slug="better-auth"
        />
        <SectionCardWrapper
          title='Better Auth'
          description='Implement authentication using Next.js and better-auth'
          imageUrl='/logo-dark.svg'
          type='blogs'
          slug="better-auth"
        />
        <SectionCardWrapper
          title='Better Auth'
          description='Implement authentication using Next.js and better-auth'
          imageUrl='/logo-dark.svg'
          type='blogs'
          slug="better-auth"
        />
      </div>
    </SectionWrapper>
  )
}

export default BlogSection