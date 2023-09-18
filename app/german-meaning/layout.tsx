import SearchBar from "@/components/search/SearchBar"

export default function GermanMeaningLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <SearchBar place="/german-meaning" isSingleWordSearch={true} />
        {children}
      </>
    )
  }