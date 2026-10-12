import { useState } from "react";

export default function BrowseBook() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
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
              <option value="low">Avalible</option>
              <option value="high">Unavalible</option>
            </select>
          </label>

          <button
            type="button"
            className="h-[46px] border border-[#bcd3c6] bg-[#eaf5ed] text-[#1e684f] rounded-[10px] px-[17px] font-bold cursor-pointer hover:bg-[#d8eddf]"
          >
            Reset filters
          </button>
        </div>
      </section>
    </main>
  );
}
