import React, { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import { Link } from "react-router-dom";

export default function Table() {
  const [dropdown7, setDropdown7] = useState(false);
  const [dropdown8, setDropdown8] = useState(false);

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);

  const { data: res_users, isFetching } = useUsers("/users");

  return (
    <>
      <div>
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

        <div class="py-12 px-4 flex justify-center items-center w-full">
          <div class="hidden md:block shadow overflow-y-auto">
            <table class="w-full whitespace-nowrap">
              <thead class="w-ful">
                <tr class="focus:outline-none h-16 w-full text-base leading-4 text-white bg-slate-900">
                  <th class="pl-4 rounded-tl"></th>
                  <th class="font-semibold pl-10 ">
                    <div class="cursor-pointer flex justify-center items-center">
                      <input
                        id="main"
                        placeholder="check box"
                        type="checkbox"
                        onClick={() => {
                          setCheck1(!check1);
                          setCheck2(!check2);
                          setCheck3(!check3);
                          setCheck4(!check4);
                          setCheck5(!check5);
                          setCheck6(!check6);
                          setCheck7(!check7);
                        }}
                        data
                        className={
                          check1
                            ? "bg-blue-700 cursor-pointer relative appearance-none w-4 h-4 border-gray-300 border  rounded "
                            : "cursor-pointer relative appearance-none w-4 h-4 border-gray-300 border  rounded bg-transparent"
                        }
                      />
                      <svg
                        className={check1 ? "absolute" : "hidden"}
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.5 2L3 6L1.5 4.5"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </th>
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
                {res_users?.map((user) => {
                  return (
                    <tr
                      key={user.id}
                      class="h-16 w-full text-sm leading-4 hover:bg-slate-500"
                    >
                      <td class="pl-4">
                        <button>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.55806 0.808058C9.80214 0.563981 10.1979 0.563981 10.4419 0.808058L13.5669 3.93306C13.811 4.17714 13.811 4.57286 13.5669 4.81694C13.3229 5.06102 12.9271 5.06102 12.6831 4.81694L10 2.13388L7.31694 4.81694C7.07286 5.06102 6.67714 5.06102 6.43306 4.81694C6.18898 4.57286 6.18898 4.17714 6.43306 3.93306L9.55806 0.808058Z"
                              fill="#4B5563"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.99997 0.625C10.3451 0.624985 10.625 0.904794 10.625 1.24997L10.6258 18.75C10.6258 19.0951 10.346 19.375 10.0008 19.375C9.65563 19.375 9.3758 19.0952 9.37578 18.75L9.375 1.25003C9.37498 0.90485 9.65479 0.625015 9.99997 0.625Z"
                              fill="#4B5563"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.43306 15.1831C6.67714 14.939 7.07286 14.939 7.31694 15.1831L10 17.8661L12.6831 15.1831C12.9271 14.939 13.3229 14.939 13.5669 15.1831C13.811 15.4271 13.811 15.8229 13.5669 16.0669L10.4419 19.1919C10.1979 19.436 9.80214 19.436 9.55806 19.1919L6.43306 16.0669C6.18898 15.8229 6.18898 15.4271 6.43306 15.1831Z"
                              fill="#4B5563"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.1831 6.43306C15.4271 6.18898 15.8229 6.18898 16.0669 6.43306L19.1919 9.55806C19.436 9.80214 19.436 10.1979 19.1919 10.4419L16.0669 13.5669C15.8229 13.811 15.4271 13.811 15.1831 13.5669C14.939 13.3229 14.939 12.9271 15.1831 12.6831L17.8661 10L15.1831 7.31694C14.939 7.07286 14.939 6.67714 15.1831 6.43306Z"
                              fill="#4B5563"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.81694 6.43306C5.06102 6.67714 5.06102 7.07286 4.81694 7.31694L2.13388 10L4.81694 12.6831C5.06102 12.9271 5.06102 13.3229 4.81694 13.5669C4.57286 13.811 4.17714 13.811 3.93306 13.5669L0.808058 10.4419C0.563981 10.1979 0.563981 9.80214 0.808058 9.55806L3.93306 6.43306C4.17714 6.18898 4.57286 6.18898 4.81694 6.43306Z"
                              fill="#4B5563"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0.625 10C0.625 9.65482 0.904822 9.375 1.25 9.375H18.75C19.0952 9.375 19.375 9.65482 19.375 10C19.375 10.3452 19.0952 10.625 18.75 10.625H1.25C0.904822 10.625 0.625 10.3452 0.625 10Z"
                              fill="#4B5563"
                            />
                          </svg>
                        </button>
                      </td>
                      <td class="pl-10">
                        <div
                          data
                          class="cursor-pointer relative flex justify-center items-center"
                        >
                          <input
                            onClick={() => setCheck2(!check2)}
                            data
                            className={
                              check2
                                ? "bg-blue-700 cursor-pointer relative appearance-none w-4 h-4 border-gray-300 border  rounded "
                                : "cursor-pointer relative appearance-none w-4 h-4 border-gray-300 border  rounded bg-transparent"
                            }
                            placeholder="check box"
                            type="checkbox"
                          />
                          <svg
                            className={check2 ? "absolute" : "hidden"}
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.5 2L3 6L1.5 4.5"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </td>
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
            <div class="w-full hover:bg-gray-100 p-6 flex justify-start flex-col space-y-8">
              <div class="flex justify-between items-center w-full">
                <div class="flex justify-start items-start flex-col space-y-2 ">
                  <p class="text-base font-semibold leading-4 text-gray-800">
                    Project Title
                  </p>
                  <p class="text-sm leading-4 text-gray-600">
                    Project Development
                  </p>
                </div>
                <div class=" relative">
                  <button onClick={() => setDropdown7(!dropdown7)}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.25 12C2.25 17.3845 6.61547 21.75 12 21.75C17.3845 21.75 21.75 17.3845 21.75 12C21.75 6.61547 17.3845 2.25 12 2.25C6.61547 2.25 2.25 6.61547 2.25 12ZM13.2188 16.2188C13.2188 16.4598 13.1473 16.6954 13.0134 16.8959C12.8794 17.0963 12.6891 17.2525 12.4664 17.3447C12.2437 17.437 11.9986 17.4611 11.7622 17.4141C11.5258 17.3671 11.3087 17.251 11.1382 17.0805C10.9678 16.9101 10.8517 16.6929 10.8047 16.4565C10.7576 16.2201 10.7818 15.9751 10.874 15.7524C10.9663 15.5297 11.1225 15.3393 11.3229 15.2054C11.5233 15.0715 11.759 15 12 15C12.3232 15 12.6332 15.1284 12.8618 15.357C13.0903 15.5855 13.2188 15.8955 13.2188 16.2188ZM13.2188 12C13.2188 12.241 13.1473 12.4767 13.0134 12.6771C12.8794 12.8775 12.6891 13.0337 12.4664 13.126C12.2437 13.2182 11.9986 13.2424 11.7622 13.1953C11.5258 13.1483 11.3087 13.0322 11.1382 12.8618C10.9678 12.6913 10.8517 12.4742 10.8047 12.2378C10.7576 12.0014 10.7818 11.7563 10.874 11.5336C10.9663 11.3109 11.1225 11.1206 11.3229 10.9866C11.5233 10.8527 11.759 10.7812 12 10.7812C12.3232 10.7812 12.6332 10.9097 12.8618 11.1382C13.0903 11.3668 13.2188 11.6768 13.2188 12ZM13.2188 7.78125C13.2188 8.0223 13.1473 8.25793 13.0134 8.45835C12.8794 8.65877 12.6891 8.81498 12.4664 8.90723C12.2437 8.99947 11.9986 9.02361 11.7622 8.97658C11.5258 8.92956 11.3087 8.81348 11.1382 8.64304C10.9678 8.47259 10.8517 8.25543 10.8047 8.01902C10.7576 7.7826 10.7818 7.53755 10.874 7.31485C10.9663 7.09216 11.1225 6.90181 11.3229 6.7679C11.5233 6.63398 11.759 6.5625 12 6.5625C12.3232 6.5625 12.6332 6.6909 12.8618 6.91946C13.0903 7.14802 13.2188 7.45802 13.2188 7.78125Z"
                        fill="#1F2937"
                      />
                    </svg>
                  </button>
                  {dropdown7 ? (
                    <div class="z-10 right-7 bg-white top-12 absolute flex justify-start flex-col p-1.5 w-40 rounded-md shadow-md">
                      <button class="text-sm tracking-wider text-left rounded hover:bg-blue-50 w-full p-1.5  text-gray-800">
                        Edit
                      </button>
                      <button class="text-sm tracking-wider text-left rounded hover:bg-blue-50 w-full p-1.5  text-gray-800">
                        View Project
                      </button>
                      <button class="text-sm tracking-wider text-left rounded hover:bg-blue-50 w-full p-1.5  text-green-700">
                        Finish Project
                      </button>
                      <hr class="border-gray-100 w-full" />
                      <button class="text-sm tracking-wider text-left rounded hover:bg-blue-50 w-full p-1.5  text-red-700">
                        Delete
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
              <div class="flex justify-between items-start w-full">
                <div class="flex flex-col justify-start items-start space-y-2">
                  <p class="text-base font-semibold leading-none text-gray-800">
                    Duration
                  </p>
                  <p class="text-sm leading-none text-gray-600">1 Month</p>
                </div>
                <div class="flex flex-col justify-start items-start space-y-2">
                  <p class="text-base font-semibold leading-none text-gray-800">
                    Cost
                  </p>
                  <p class="text-sm leading-none text-gray-600"></p>
                </div>
              </div>
              <div class="flex justify-between items-start w-full">
                <div class="flex flex-col justify-start items-start space-y-2">
                  <p class="text-base font-semibold leading-none text-gray-800">
                    Starting Date
                  </p>
                  <p class="text-sm leading-none text-gray-600">09/23/2021</p>
                </div>
                <div class="flex flex-col justify-start items-start space-y-2">
                  <p class="text-base font-semibold leading-none text-gray-800">
                    Deadline
                  </p>
                  <p class="text-sm leading-none text-gray-600">09/23/2021</p>
                </div>
              </div>
              <div class="flex justify-start items-start ">
                <div class="flex flex-col justify-start items-start space-y-2">
                  <p class="text-base font-semibold leading-none text-gray-800">
                    Collaborators
                  </p>
                  <img
                    src="https://i.ibb.co/t4W2Ljr/Group-1909.png"
                    alt="avatars"
                  />
                </div>
              </div>
            </div>
            <div class="w-full hover:bg-gray-100 p-6 flex justify-start flex-col space-y-8">
              <div class="flex justify-between items-center w-full">
                <div class="flex justify-start items-start flex-col space-y-2 ">
                  <p class="text-base font-semibold leading-4 text-gray-800">
                    Project Title
                  </p>
                  <p class="text-sm leading-4 text-gray-600">
                    Project Development
                  </p>
                </div>
                <div class=" relative">
                  <button onClick={() => setDropdown8(!dropdown8)}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.25 12C2.25 17.3845 6.61547 21.75 12 21.75C17.3845 21.75 21.75 17.3845 21.75 12C21.75 6.61547 17.3845 2.25 12 2.25C6.61547 2.25 2.25 6.61547 2.25 12ZM13.2188 16.2188C13.2188 16.4598 13.1473 16.6954 13.0134 16.8959C12.8794 17.0963 12.6891 17.2525 12.4664 17.3447C12.2437 17.437 11.9986 17.4611 11.7622 17.4141C11.5258 17.3671 11.3087 17.251 11.1382 17.0805C10.9678 16.9101 10.8517 16.6929 10.8047 16.4565C10.7576 16.2201 10.7818 15.9751 10.874 15.7524C10.9663 15.5297 11.1225 15.3393 11.3229 15.2054C11.5233 15.0715 11.759 15 12 15C12.3232 15 12.6332 15.1284 12.8618 15.357C13.0903 15.5855 13.2188 15.8955 13.2188 16.2188ZM13.2188 12C13.2188 12.241 13.1473 12.4767 13.0134 12.6771C12.8794 12.8775 12.6891 13.0337 12.4664 13.126C12.2437 13.2182 11.9986 13.2424 11.7622 13.1953C11.5258 13.1483 11.3087 13.0322 11.1382 12.8618C10.9678 12.6913 10.8517 12.4742 10.8047 12.2378C10.7576 12.0014 10.7818 11.7563 10.874 11.5336C10.9663 11.3109 11.1225 11.1206 11.3229 10.9866C11.5233 10.8527 11.759 10.7812 12 10.7812C12.3232 10.7812 12.6332 10.9097 12.8618 11.1382C13.0903 11.3668 13.2188 11.6768 13.2188 12ZM13.2188 7.78125C13.2188 8.0223 13.1473 8.25793 13.0134 8.45835C12.8794 8.65877 12.6891 8.81498 12.4664 8.90723C12.2437 8.99947 11.9986 9.02361 11.7622 8.97658C11.5258 8.92956 11.3087 8.81348 11.1382 8.64304C10.9678 8.47259 10.8517 8.25543 10.8047 8.01902C10.7576 7.7826 10.7818 7.53755 10.874 7.31485C10.9663 7.09216 11.1225 6.90181 11.3229 6.7679C11.5233 6.63398 11.759 6.5625 12 6.5625C12.3232 6.5625 12.6332 6.6909 12.8618 6.91946C13.0903 7.14802 13.2188 7.45802 13.2188 7.78125Z"
                        fill="#1F2937"
                      />
                    </svg>
                  </button>
                  {dropdown8 ? (
                    <div class="z-10 right-7 bg-white top-12 absolute flex justify-start flex-col p-1.5 w-40 rounded-md shadow-md">
                      <button class="text-sm tracking-wider text-left rounded hover:bg-blue-50 w-full p-1.5  text-gray-800">
                        Edit
                      </button>
                      <button class="text-sm tracking-wider text-left rounded hover:bg-blue-50 w-full p-1.5  text-gray-800">
                        View Project
                      </button>
                      <button class="text-sm tracking-wider text-left rounded hover:bg-blue-50 w-full p-1.5  text-green-700">
                        Finish Project
                      </button>
                      <hr class="border-gray-100 w-full" />
                      <button class="text-sm tracking-wider text-left rounded hover:bg-blue-50 w-full p-1.5  text-red-700">
                        Delete
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
              <div class="flex justify-between items-start w-full">
                <div class="flex flex-col justify-start items-start space-y-2">
                  <p class="text-base font-semibold leading-none text-gray-800">
                    Duration
                  </p>
                  <p class="text-sm leading-none text-gray-600">1 Month</p>
                </div>
                <div class="flex flex-col justify-start items-start space-y-2">
                  <p class="text-base font-semibold leading-none text-gray-800">
                    Cost
                  </p>
                  <p class="text-sm leading-none text-gray-600"></p>
                </div>
              </div>
              <div class="flex justify-between items-start w-full">
                <div class="flex flex-col justify-start items-start space-y-2">
                  <p class="text-base font-semibold leading-none text-gray-800">
                    Starting Date
                  </p>
                  <p class="text-sm leading-none text-gray-600">09/23/2021</p>
                </div>
                <div class="flex flex-col justify-start items-start space-y-2">
                  <p class="text-base font-semibold leading-none text-gray-800">
                    Deadline
                  </p>
                  <p class="text-sm leading-none text-gray-600">09/23/2021</p>
                </div>
              </div>
              <div class="flex justify-start items-start ">
                <div class="flex flex-col justify-start items-start space-y-2">
                  <p class="text-base font-semibold leading-none text-gray-800">
                    Collaborators
                  </p>
                  <img
                    src="https://i.ibb.co/t4W2Ljr/Group-1909.png"
                    alt="avatars"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
