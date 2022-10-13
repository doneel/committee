export default function AboutPage() {
  return (
    <main className="flex h-full w-full bg-white">
      <div className="justify-top flex items-center">
        <section className="bg-white dark:bg-gray-900">
          <img
            className="m-auto h-48"
            src="/images/logo.png"
            alt="The Committee"
          />
          <div className="mx-auto  py-8 px-4 text-center lg:py-16 lg:px-12">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              Planting seeds for Chritian marriage
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
              The Committee is a community of Christians who love Jesus, love
              our friends, and love the gift of marriage. We believe we're meant
              to be hands and feet in helping our single brothers and sisters
              find their spouse.
            </p>
            <div className="mx-auto w-fit">
              <div className="mt-16 mb-8 flex flex-col space-y-4 text-left sm:flex-row sm:space-y-0 sm:space-x-4">
                <h3 className="text-4xl font-bold leading-none tracking-tight text-gray-600 dark:text-white md:text-3xl lg:text-4xl">
                  Our timeline
                </h3>
              </div>
              <ol className="relative border-l border-gray-200 text-left dark:border-gray-700">
                <li className="mb-10 ml-4">
                  <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    November 2022
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Project kickoff
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Shovels are in the ground! We've got lots of creation to do
                    and refining fires to pass through before this goes live.
                  </p>
                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Q1 2023
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Private beta invites open
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Beta member will get access to nominate candidates and begin
                    exploring matches, but we'll take things slow to make sure
                    any matches make sense.
                  </p>
                  <a
                    href="/waitlist"
                    className="inline-flex items-center rounded-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  >
                    Join the waitlist{" "}
                    <svg
                      className="ml-2 h-3 w-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="ml-4">
                  <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Late 2023
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Open invitation
                  </h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Members will get the green light to invite other committee
                    members.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
