import React from 'react'
import { getWord } from '@/lib/words'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'; // Use with-html to support HTML in Markdown
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbds';
import Play_It from '@/components/playIt';

// generate dynamic metadata-----------------
import type { Metadata } from 'next'

type Props = {
    params: { word: string }
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {

    return {
        title: `Übersetzung für '${params.word}' von Englisch nach Deutsch | German translation/meaning of '${params.word}'`,
        description: `Here you will get the translation of the word '${params.word}' as well as an explanation of its meaning. Hopefully, you will find what you are looking for.`,
        alternates: {
            canonical: `https://wordmeaningonline.com/german-meaning/${params.word}`
        },
        openGraph: {
            title: `Übersetzung für '${params.word}' von Englisch nach Deutsch | German translation/meaning of '${params.word}'`,
            description: `Here you will get the translation of the word '${params.word}' as well as an explanation of its meaning. Hopefully, you will find what you are looking for.`,
            images: 'https://wordmeaningonline.com/opengraph-image.png'
          },
    }
}
// dynamic metadata ends here-------------------

export default async function word({ params }: any) {
    const word1: any = await getWord(params.word.toLowerCase())
    if (!word1) {
        notFound()
    }

    // generate jsonLD for SEO
    const jsonLd = [{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `German translation/meaning of '${params.word}'`,
        "url": `https://wordmeaningonline.com/german-meaning/${params.word}`,
        "description": `Definition of '${params.word}' by wordmeaningonline`,
        "isPartOf": {
            "@id": "https://wordmeaningonline.com/#website"
        }
    },
    {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://www.wordmeaningonline.com/#website",
        "url": "https://www.wordmeaningonline.com",
        "name": "WordMeaningOnline Dictionary",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.wordmeaningonline.com/german-meaning/{search_term_string}?utm_campaign=sd&utm_medium=serp&utm_source=jsonld",
            "query-input": "required name=search_term_string"
        }
    },
    {
        "@context": "https://schema.org",
        "@type": ["DefinedTermSet", "Book"],
        "@id": "https://www.wordmeaningonline.com",
        "name": "Dictionary by WordMeaningOnline"
    },
    {
        "@context": "https://schema.org",
        "@type": "DefinedTerm",
        "@id": `https://www.wordmeaningonline.com/german-meaning/${params.word}`,
        "name": `${params.word}`,
        "inDefinedTermSet": "https://www.wordmeaningonline.com/"
    }
    ]

    return (
        <main className='mx-auto h-auto rounded-lg p-6 px-10 prose prose-slate'>

            <Breadcrumbs place="/german-meaning" name="German Meaning" title={`German translation of ${word1.word}`} />

            <h1 className='text-2xl mb-0 lg:text-3xl text-slate-800 text-center'>Übersetzung für &apos;{word1.word}&apos; von Englisch nach Deutsch. (German translation of &apos;{word1.word}&apos;)</h1>

            <p className='flex items-center justify-center flex-wrap'>
                <span title='English Word'><b>{word1.word}</b>&nbsp;</span>
                <Play_It theWord={`${word1.word}`} langCode="en-US" lang="English" />
                <span title='Parts of Speech'>({word1.partsOfSpeech}):&nbsp;</span>
                <span title='German Meaning'><b>{word1.germanTranslation}</b>&nbsp;</span>
                <Play_It theWord={`${word1.germanTranslation}`} langCode="de-DE" lang="German" />
            </p>

            <h2 className='mt-0 text-lg'>&apos;{word1.word}&apos; Bedeutung im Detail:</h2>
            <ReactMarkdown>{word1.meaning}</ReactMarkdown>

            <div className='p-7 flex justify-between w-full'>
                <span>Previous:  <Link className='text-violet-700' href={`/german-meaning/${word1.nextWord}`}>{word1.nextWord}</Link></span>
                <span>Next:  <Link className='text-violet-700' href={`/german-meaning/${word1.prevWord}`}>{word1.prevWord}</Link></span>
            </div>

            {/* Add JSON-LD to your page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* JSON-LD Ends... */}
        </main>
    )
}
