'use client'

import { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { Search } from 'lucide-react'

interface SearchResult {
  title: string
  description: string
  url: string
  type: 'post' | 'project' | 'page'
}

const mockResults: SearchResult[] = [
  {
    title: 'Building Scalable Microservices Architecture',
    description: 'Learn how to design and implement microservices that scale with your business needs, covering essential patterns from service discovery to load balancing.',
    url: '/posts/building-scalable-microservices-architecture',
    type: 'post'
  },
  {
    title: 'API Design Best Practices for Modern Applications',
    description: 'Comprehensive guide to designing RESTful APIs that are intuitive, secure, and maintainable for long-term success.',
    url: '/posts/api-design-best-practices',
    type: 'post'
  },
  {
    title: 'E-commerce Platform',
    description: 'Built a scalable e-commerce platform handling 10,000+ concurrent users with microservices architecture and real-time inventory management.',
    url: '/projects#e-commerce-platform',
    type: 'project'
  }
]

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Search', current: true }
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    
    setIsSearching(true)
    setTimeout(() => {
      const filteredResults = mockResults.filter(result => 
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filteredResults)
      setIsSearching(false)
    }, 500)
  }

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <main id="main-content" className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-medium text-skin-base mb-2">Search</h1>
        <p className="text-skin-base mb-8">Find posts, projects, and pages.</p>
        
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-skin-base" size={20} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for posts, projects..."
              className="w-full pl-10 pr-4 py-3 border border-skin-line rounded-lg bg-skin-fill text-skin-base focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-skin-accent text-white rounded-lg hover:opacity-90 transition-opacity focus:outline-none"
          >
            Search
          </button>
        </form>
        
        {isSearching && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-skin-accent"></div>
            <p className="mt-2 text-skin-base">Searching...</p>
          </div>
        )}
        
        {!isSearching && results.length > 0 && (
          <div>
            <h2 className="text-xl font-medium text-skin-base mb-6">
              {results.length} {results.length === 1 ? 'result' : 'results'} for "{query}"
            </h2>
            <div className="space-y-6">
              {results.map((result, index) => (
                <div key={index} className="border border-skin-line rounded-lg p-6 hover:border-skin-accent transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-skin-card text-skin-base text-xs rounded uppercase font-medium">
                      {result.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-skin-base mb-2">
                    <a href={result.url} className="text-skin-accent hover:underline">
                      {result.title}
                    </a>
                  </h3>
                  <p className="text-skin-base">
                    {result.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {!isSearching && query && results.length === 0 && (
          <div className="text-center py-8">
            <p className="text-skin-base">No results found for "{query}". Try different keywords.</p>
          </div>
        )}
      </main>
    </>
  )
}