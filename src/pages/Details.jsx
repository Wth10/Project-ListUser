import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import { useUsers } from "../hooks/useUsers";

export default function Details() {
  const { id } = useParams();

  const { data: res_users, isFetching } = useUsers(`/users?id=${id}`);

  return (
    <>
      <Header />

      {isFetching && (
        <div className="m-8 flex items-center justify-center">
          <span className="inline-flex items-center px-4 py-2 font-semibold leading-6 shadow rounded-md  bg-[#0ea5e9] hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed">
            <svg
              class="animate-spin -ml-2 mr-6 h-10 w-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Carregando
          </span>
        </div>
      )}

      <ul className="ml-4 mt-10">
        <div class="flex p-6 font-mono">
          <div class="flex-none w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400">
            <img
              src="https://randomuser.me/api/portraits/women/47.jpg"
              class="absolute z-10 inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>

          {res_users?.map((user) => {
            return (
              <form class="flex-auto pl-6">
                <div class="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
                  <h1 class="relative w-full flex-none mb-5 text-2xl font-semibold ">
                    {user.name}
                  </h1>
                  <div class="relative text-base ">
                    <p>
                      Email:
                      <span className="ml-1 italic text-teal-400">
                        {user.email}
                      </span>
                    </p>
                    <p>
                      Telefone:
                      <span className="ml-1 italic text-teal-400">
                        {user.phone}
                      </span>
                    </p>
                  </div>
                </div>

                <div class="flex items-baseline my-6">
                  <div class="flex space-x-2 mb-4 text-sm font-medium">
                    <div class="flex space-x-4">
                      <button
                        class="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black"
                        type="submit"
                      >
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>

                <p class="text-xs leading-6 text-slate-500">
                  Free shipping on all continental US orders.
                </p>
              </form>
            );
          })}
        </div>
        <button className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black">
          <Link to="/">Voltar</Link>
        </button>
      </ul>
    </>
  );
}
