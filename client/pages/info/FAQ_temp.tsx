{
  /* Search & Filter */
}
<section className="py-8 bg-white border-b border-gray-200">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        {/* Search */}
        <div className="flex-1 w-full lg:w-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Cari pertanyaan atau kata kunci..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-3 text-base rounded-xl border-2 border-gray-200 focus:border-stis-blue"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="flex gap-4 w-full lg:w-auto">
          <Button
            variant="outline"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
          >
            <Search className="w-4 h-4 mr-2" />
            Cari
          </Button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 flex-wrap justify-center mt-6">
        {faqCategories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category.id)}
            className={`${
              selectedCategory === category.id
                ? "bg-stis-blue hover:bg-stis-blue-dark"
                : "border-stis-blue text-stis-blue hover:bg-stis-blue hover:text-white"
            }`}
          >
            {category.label}
            <Badge variant="secondary" className="ml-2 text-xs px-1.5 py-0">
              {category.count}
            </Badge>
          </Button>
        ))}
      </div>
    </div>
  </div>
</section>;
