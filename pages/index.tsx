import React from "react";
import Head from "next/head";

export async function getStaticProps() {
  return {
    props: {
      hasSetupLiveblocksKey: process.env.LIVEBLOCKS_SECRET_KEY != null
    }
  };
}

function ListItem({
  label,
  description,
  href
}: {
  label: string;
  description?: string;
  href?: string;
}) {
  return (
    <li>
      <a
        href={href}
        className="group flex justify-between items-center py-2 px-3.5 bg-white shadow-sm hover:shadow focus:shadow rounded-lg"
      >
        <div>
          <h3 className="font-medium">{label}</h3>

          {description && (
            <p className="text-sm text-gray-400">{description}</p>
          )}
        </div>

        <span>&rarr;</span>
      </a>
    </li>
  );
}

function isRunningOnCodeSandbox() {
  return (
    typeof window !== "undefined" &&
    window.location.host.endsWith("codesandbox.io")
  );
}

type Props = {
  hasSetupLiveblocksKey: boolean;
};

export default function Home({ hasSetupLiveblocksKey }: Props) {
  return (
    <div>
      <Head>
        <title>Liveblocks</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <main className="container mx-auto px-8">
        <h1 className="text-3xl font-semibold mt-24 mb-2">
          Welcome to Liveblocks Next.js examples
        </h1>
        {hasSetupLiveblocksKey ? (
          <>
            <p className="text-gray-400 mb-4 text-lg">
              Get started with the real-time examples below.
            </p>

            <div className="grid grid-cols-3 gap-16">
              <div>
                <div className="max-w-sm">
                  <h2 className="mt-12 mb-1 font-medium text-lg">Basic</h2>
                  <p className="text-gray-400 mb-4">
                    Basic examples to help you understand how the APIs work for
                    each block.
                  </p>
                </div>
                <ul className="grid grid-cols-1 gap-4">
                  <ListItem
                    label="Presence demo"
                    href="/presence"
                    description="Presence"
                  />
                  <ListItem
                    label="Storage demo"
                    href="/storage"
                    description="Storage"
                  />
                </ul>
              </div>

              <div className="col-span-2">
                <div className="max-w-sm">
                  <h2 className="mt-12 mb-1 font-medium text-lg">Use cases</h2>
                  <p className="text-gray-400 mb-4">
                    Realistic examples to take inspiration from for your own
                    production projects.
                  </p>
                </div>
                <ul className="grid grid-cols-2 gap-4">
                  <ListItem
                    label="Live cursors with chat and reactions"
                    href="/live-cursors-chat-reactions"
                    description="Presence"
                  />
                  <ListItem
                    label="Live cursors scrollable page"
                    href="/live-cursors-scrollable-window"
                    description="Presence"
                  />
                  <ListItem
                    label="Spreadsheet selection"
                    href="/spreadsheet"
                    description="Presence"
                  />
                </ul>
              </div>
            </div>
          </>
        ) : (
          <div className="text-gray-400 mb-4 text-lg">
            {isRunningOnCodeSandbox() ? (
              <>
                <p>
                  To run{" "}
                  <a
                    href="https://liveblocks.io"
                    target="_blank"
                    rel="noreferrer"
                    className="text-black"
                  >
                    Liveblocks
                  </a>{" "}
                  examples on Codesandbox
                </p>
                <ul className="list-disc list-inside">
                  <li>
                    Create an account on{" "}
                    <a
                      href="https://liveblocks.io"
                      target="_blank"
                      rel="noreferrer"
                    >
                      liveblocks.io
                    </a>
                  </li>
                  <li>Copy your secret key from the administration</li>
                  <li>
                    Add it as a{" "}
                    <a
                      href="https://codesandbox.io/docs/secrets"
                      target="_blank"
                      rel="noreferrer"
                      className="text-black"
                    >
                      secret key
                    </a>{" "}
                    to your CodeSandbox sandbox.
                  </li>
                </ul>
              </>
            ) : (
              <>
                <p>
                  To run{" "}
                  <a
                    href="https://liveblocks.io"
                    target="_blank"
                    rel="noreferrer"
                    className="text-black"
                  >
                    Liveblocks
                  </a>{" "}
                  examples locally
                </p>
                <ul className="list-disc list-inside">
                  <li>
                    Run <code>npm i</code> to install all dependencies
                  </li>
                  <li>
                    Create an account on{" "}
                    <a
                      href="https://liveblocks.io"
                      target="_blank"
                      rel="noreferrer"
                    >
                      liveblocks.io
                    </a>
                  </li>
                  <li>Copy your secret key from the administration</li>
                  <li>
                    Create a <code>.env.local</code> file and add your
                    Liveblocks secret key like this{" "}
                    <code>LIVEBLOCKS_SECRET_KEY=sk_test_yourkey</code>
                  </li>
                  <li>
                    Run <code>npm run dev</code> and you should be good to go
                  </li>
                </ul>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
