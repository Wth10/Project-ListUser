import React from "react";

const max_itens = 2;
const max_left = (max_itens - 1) / 2;

const Paginate = ({ limit, total, offset, setOffset }) => {
  const current = offset ? offset / limit - 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - max_left, 1);

  return (
    <>
      <p className="text-center">Páginação</p>
      <ul className="flex justify-center items-center">
        {Array.from({ length: max_itens })
          .map((_, index) => index + first)
          .map((page) => {
            return (
              <>
                <li>
                  <button
                    className="ml-2 mt-4 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 font-semibold h-[30px] px-6 rounded-lg w-full sm:w-auto bg-sky-500"
                    onClick={() => setOffset((page - 1) * limit)}
                  >
                    {page}
                  </button>
                </li>
              </>
            );
          })}
      </ul>
    </>
  );
};

export default Paginate;
