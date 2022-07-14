import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="border-b border-solid border-[#414141] bg-[#121212] py-[25px] w-full top-0  z-10 md:static md:z-[initial]">
        <div className="container flex items-center justify-between sm-down:max-w-none">
          <a
            class="flex items-center space-x-4 text-[color:var(--hue-1000)] hover:text-[color:var(--hue-1000)]"
            href="/"
          >
            <div class="ml-3 space-x-6">
              <a
                href="https://github.com/Wth10"
                class="w-12 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                <img
                  class="w-[70px] rounded-full"
                  src="/img/logo.jpg"
                  alt="logo"
                />
              </a>
            </div>
            <span class="text-3xl font-bold font-mono">DEV.USER</span>
          </a>
          <nav className="sm-down:top-[var(--site-header-height)] sm-down:left-0 sm-down:right-0 sm-down:absolute sm-down:h-[fit-content] sm-down:max-h-[calc(100vh-var(--site-header-height)-env(safe-area-inset-bottom))] sm-down:z-40 sm-down:p-6 sm-down:border-b sm-down:border-[color:var(--hue-0200)] sm-down:overflow-scroll sm-down:bg-[color:var(--hue-0000)] flex-none hidden md:block">
            <ul className="text-xl md:flex sm-down:space-y-6 md:space-x-8 md:text-base">
              <li>
                <Link
                  to="/"
                  className="font-medium text-slate-300 hover:text-white opacity-80 hover:opacity-100"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="profile"
                  className="font-medium text-slate-300 hover:text-white opacity-80 hover:opacity-100"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
