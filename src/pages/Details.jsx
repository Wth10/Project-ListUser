import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Load from "../components/Load";
import { useUsers } from "../hooks/useUsers";

export default function Details() {
  const { id } = useParams();

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const { data: res_users, isFetching } = useUsers(`/users?id=${id}`);
  const w = getRandomInt(1, 50);

  return (
    <>
      <Header />

      {isFetching && <Load />}

      <ul className="ml-4 mt-10">
        <div class="flex p-6 font-mono">
          <div class="flex-none w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400">
            <img
              src={`https://randomuser.me/api/portraits/women/${w}.jpg`}
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
