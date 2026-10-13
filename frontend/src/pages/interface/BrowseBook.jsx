import { useState } from "react";

const books = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    year: 2008,
    available: true,
    cover: "https://placehold.co/300x400/e2e8f0/334155?text=Clean+Code",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Personal Development",
    year: 2018,
    available: true,
    cover: "https://placehold.co/300x400/dcfce7/166534?text=Atomic+Habits",
  },
  {
    id: 3,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Literature",
    year: 1988,
    available: false,
    cover: "https://placehold.co/300x400/f3e8ff/6b21a8?text=The+Alchemist",
  },
];

export default function BrowseBook() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All categories");
  const [sortBy, setSortBy] = useState("default");
  const categories = [
    { value: "All categories" },
    { value: "Programming" },
    { value: "Science" },
    { value: "Literature" },
    { value: "History" },
    { value: "Business" },
    { value: "Personal Development" },
    { value: "Mathematics" },
    { value: "Educatio" },
  ];

  const filteredBooks = books.filter((books) => {
    return (
      books.title.toLowerCase().includes(search.toLowerCase().trim()) &&
      (category === "All categories" || books.category === category)
    );
  });

  const sortedBooks = [...filteredBooks];
  if (sortBy === "unavailable") {
    sortedBooks.sort((a, b) => a.available - b.available);
  }
  if (sortBy === "available") {
    sortedBooks.sort((a, b) => b.available - a.available);
  }
  function resetFilters() {}
  return (
    <main className="min-h-screen h-screen bg-slate-50">
      <section className="p-8">
        <div className="flex items-end justify-between gap-4 mt-6">
          <div>
            <span className="eyebrow dark">THE CATALOG</span>
            <h2 className="mt-2 text-4xl tracking-tight" id="catalog-heading">
              Browse products
            </h2>
          </div>
          <span
            className="text-[#4a6961] font-bold whitespace-nowrap"
            aria-live="polite"
          >
            products found
          </span>
        </div>
        {/* Form Controlls */}
        <div className="grid grid-cols-[2fr_1fr_1fr_auto] items-end gap-[14px] bg-white border border-[#e0e9e2] rounded-[18px] p-[20px] mb-[28px] shadow-[0_10px_32px_#1b41360c]">
          <label className="flex flex-col gap-2 text-[0.82rem] font-bold text-[#385e54]">
            Search by name
            <input
              type="search"
              placeholder="Try keyboard or lamp..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full h-[46px] border border-[#ceddd4] rounded-[10px] px-[13px] bg-white text-[#183b31] outline-none focus:border-[#21866d] focus:shadow-[0_0_0_3px_#21866d24]"
            />
          </label>

          <label className="flex flex-col gap-2 text-[0.82rem] font-bold text-[#385e54]">
            Category
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="w-full h-[46px] border border-[#ceddd4] rounded-[10px] px-[13px] bg-white text-[#183b31] outline-none focus:border-[#21866d] focus:shadow-[0_0_0_3px_#21866d24]"
            >
              {categories.map((category) => {
                return <option value={category.value}>{category.value}</option>;
              })}
            </select>
          </label>

          <label className="flex flex-col gap-2 text-[0.82rem] font-bold text-[#385e54]">
            Sort by price
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="w-full h-[46px] border border-[#ceddd4] rounded-[10px] px-[13px] bg-white text-[#183b31] outline-none focus:border-[#21866d] focus:shadow-[0_0_0_3px_#21866d24]"
            >
              <option value="default">Default order</option>
              <option value="avalible">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </label>

          <button
            type="button"
            className="h-[46px] border border-[#bcd3c6] bg-[#eaf5ed] text-[#1e684f] rounded-[10px] px-[17px] font-bold cursor-pointer hover:bg-[#d8eddf]"
          >
            Reset filters
          </button>
        </div>
        {/* Cards of the books */}
        {sortedBooks.length === 0 ? (
          <div
            className="text-center bg-[#fff] border border-dashed border-[#b8d2c1] rounded-2xl py-14 px-5"
            role="status"
          >
            <span className="text-5xl text-[#568b73]">⌕</span>
            <h3 className="text-2xl py-1 font-bold ">No products found</h3>
            <p className="text-[#61776c]">Try another name or category.</p>
            <button
              className="border border-[#bcd3c6] mt-2 bg-[#eaf5ed] text-[#1e684f] rounded-xl px-4 font-bold"
              type="button"
              onClick={resetFilters}
            >
              Show all products
            </button>
          </div>
        ) : (
          <div className="grid">
            {sortedBooks.map((books) => (
              <article className="card" key={books.id}>
                <img src={books.cover} alt="" />
                <div className="card-body">
                  <span className="category">{books.category}</span>
                  <h3>{books.title}</h3>
                  <strong>${books.author}</strong>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
