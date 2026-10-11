import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="max-h-screen h-screen p-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="p-8 bg-white rounded-2xl shadow-md col-span-7">
          <h1 className="text-[#1E293B] font-bold text-3xl w-full mb-4">
            Discover Your Next Favorite Book
          </h1>
          <p className="mb-2">
            Explore a world of knowledge, discover fascinating books, and manage
            your borrowing journey with our modern library management system.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div
              className="flex flex-col items-start h-full min-h-40 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300
 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-base flex font-semibold text-slate-900 leading-6">
                <span className="shrink-0 w-6 h-6 text-teal-700 text-center">
                  📗
                </span>{" "}
                Book Collection
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-6 text-left">
                Explore a diverse collection of books across programming,
                science, history, literature, and more.
              </p>
            </div>
            <div
              className="flex flex-col items-start h-full min-h-40 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300
 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-base flex font-semibold text-slate-900 leading-6">
                <span className="shrink-0 w-6 h-6 text-teal-700 text-center">
                  🔖
                </span>{" "}
                Easy Borrowing
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-6 text-left">
                Request your favorite books and keep track of your borrowing
                activity in one convenient place.
              </p>
            </div>
            <div
              className="flex flex-col items-start h-full min-h-40 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300
 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-base flex font-semibold text-slate-900 leading-6">
                <span className="shrink-0 w-6 h-6 text-teal-700 text-center">
                  🔍
                </span>{" "}
                Smart Search
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-6 text-left">
                Find the books you need quickly by searching titles, authors, or
                categories.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Link className="inline-flex items-center justify-center rounded-lg border-2 bg-teal-700 text-white px-6 py-3 font-semibold border-teal-700 transition-all duration-300 hover:bg-white hover:text-teal-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2">Explore Books</Link>
            <Link className="inline-flex items-center justify-center rounded-lg border-2 border-teal-700 bg-white px-6 py-3 font-semibold text-teal-700 transition-all duration-300 hover:bg-teal-700 hover:text-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2">
              Create Free Account
            </Link>
          </div>
        </div>
        <div className="bg-[#ffff] flex items-center justify-center p-4 w-[450px] shadow-md rounded-2xl">
          <img
            src="LibraryRoomBook.png"
            className="w-[450px] h-[75vh] object-fill rounded-2xl"
            alt="LibraryPicture"
          />
        </div>
      </div>
    </main>
  );
}
