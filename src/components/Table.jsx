import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import axios from "axios";
import Load from "./Load";

export default function Table() {
  const { data, isFetching } = useQuery(
    "show",
    async () => {
      const url = "https://jsonplaceholder.typicode.com/users";
      const res = await axios.get(url);
      console.log(res.data);
      return res.data;
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    }
  );

  return (
    <>
      <div>
        {isFetching && <Load />}

        <div class="py-12 px-4 flex justify-center items-center w-full">
          <div class="hidden md:block shadow overflow-y-auto">
            <table class="w-full whitespace-nowrap">
              <thead class="w-ful">
                <tr class="focus:outline-none h-16 w-full text-base leading-4 text-white bg-slate-900">
                  <th class="text-left font-semibold pl-4 pr-14">Nome</th>
                  <th class="text-left font-semibold pl-4 pr-14">E-Mail</th>
                  <th class="text-left font-semibold pl-4 pr-14">Telefone</th>
                  <th class="text-left font-semibold pl-4 pr-14">Saber Mais</th>
                  <th class="text-left font-semibold pl-4 pr-6 ">
                    Foto De Perfil
                  </th>
                </tr>
              </thead>
              <tbody class="bg-[#1212] text-white ">
                {data?.map((user) => {
                  return (
                    <tr
                      key={user.id}
                      class="h-16 w-full text-sm leading-4 hover:bg-slate-500"
                    >
                      <td class="pl-6 pr-32">
                        {user.name} {user.username}
                      </td>
                      <td class="pl-4 pr-14">{user.email}</td>
                      <td class="pl-4 pr-14">{user.phone}</td>
                      <td class="pl-4 pr-14 font-bold text-amber-500 italic">
                        <Link to={`details/${user.id}`}>Detalhes</Link>
                      </td>
                      <td class="pl-4">
                        <img
                          src="https://i.ibb.co/t4W2Ljr/Group-1909.png"
                          alt="avatar"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div class="w-96 md:hidden shadow rounded ">
            {data?.map((user) => {
              return (
                <div class="w-full p-6 flex justify-start flex-col space-y-8 ">
                  <div class="flex justify-between items-center w-full hover:text-gray-900"></div>

                  <div class="flex justify-between items-start w-full">
                    <div class="flex justify-between items-start w-full">
                      <div class="flex justify-start items-start flex-col space-y-2 text-gray-100">
                        <p class="text-base font-semibold leading-4">Nome</p>
                        <p class="text-sm leading-4 text-gray-500">
                          {user.name}
                        </p>
                      </div>
                      <div class="flex flex-col justify-start items-start space-y-2">
                        <p class="text-base font-semibold leading-nonetext-gray-100">
                          Saber Mais
                        </p>
                        <p class="text-sm leading-none text-amber-500 italic">
                          <Link to={`details/${user.id}`}>Detalhes</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
