import Link from 'next/link'
import React from 'react'

export default function Breadcrumbs(props:{place:string, title:string, name:string}) {
    return (
        <div className="breadcrumb pb-6 flex flex-wrap items-center justify-center gap-1" itemScope itemType="https://schema.org/BreadcrumbList">

            <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item" title="Home">
                    <meta content="1" itemProp="position" />
                    <span itemProp="name" className='flex items-center gap-2 text-slate-600'>
                        <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M15 18H9" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round"></path> </g>
                        </svg>
                    </span>
                </Link>
            </span>


            <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g>
            </svg>

            <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <meta content="2" itemProp="position" />
                <Link href={props.place} itemProp="item" title={props.name}>
                    <span className='text-slate-600 text-sm' itemProp="name">{props.name}</span>
                </Link>
            </span>


            <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g>
            </svg>


            <span itemProp=" itemListElement" itemScope itemType="https://schema.org/ListItem">
                <meta content="3" itemProp="position" />
                <span itemProp="name" className='text-sm'>
                {props.title}
                </span>
            </span>


        </div>
    )
}
