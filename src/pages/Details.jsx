import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Load from "../components/Load";
import { useQuery } from "react-query";
import axios from "axios";

export default function Details() {
  const { Id } = useParams();

  const { data, isFetching } = useQuery(
    "details",
    async () => {
      const url = `https://jsonplaceholder.typicode.com/users?id=${Id}`;
      const res = await axios.get(url);
      console.log(res.data);
      return res.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      <Header />

      {isFetching && <Load />}

      <ul className="mt-10">
        <div class="flex p-6 font-mono">
          {data?.map((user) => {
            return (
              <form class="flex-auto pl-4">
                <div class="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
                  <h1 class="relative w-full flex-none mb-5 text-2xl font-semibold ">
                    {user.name}
                  </h1>
                  <div class="relative text-sm">
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
                    <p>
                      Empresa:
                      <span className="ml-1 italic text-teal-400">
                        {user.company.name}
                      </span>
                    </p>
                  </div>
                </div>

                <p class="m-2 text-sm leading-6 text-slate-500">
                  Informações em manutenção
                </p>
              </form>
            );
          })}
        </div>

        <button className="px-6 h-12 uppercase font-semibold text-sm m-5 tracking-wider border-2 border-black bg-teal-400 text-black rounded-lg">
          <Link to="/">Voltar</Link>
        </button>
      </ul>
    </>
  );
}
