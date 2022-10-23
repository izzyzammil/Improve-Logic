import type { NextPage } from "next";
import Head from "next/head";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode, useState } from "react";

const Home: NextPage = () => {
  let [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  interface ModalProps {
    children: ReactNode;
  }

  const Modal = (props: ModalProps) => {
    const { children } = props;
    return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {/* Modal Header */}
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  {/* Begin Modal Body */}
                  {children}
                  {/* End Modal Body */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
  };

  interface CardProps {
    children: ReactNode;
  }

  const Card = (props: CardProps) => {
    const { children } = props;
    return (
      <div className="w-full px-4 mb-4 lg:w-1/2 xl:w-1/3">
        <div
          className="bg-slate-400 rounded-lg shadow-lg h-56 w-full flex cursor-pointer"
          onClick={openModal}
        >
          <Modal>{children}</Modal>
        </div>
      </div>
    );
  };

  return (
    <div className="px-4 md:px-6 lg:px-8">
      <Head>
        <title>Improve Logic</title>
        <meta name="description" content="app for improve logic algoritm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="py-10">
          <h1 className="text-5xl text-center font-semibold lg:text-6xl">
            Improve{" "}
            <span className="bg-blue-500 px-4 rounded-lg text-white">
              Logic
            </span>
          </h1>
        </section>

        <section className="pt-12">
          <div className="container mx-auto max-w-md lg:max-w-4xl xl:max-w-none">
            <div className="flex flex-wrap">
              <div className="w-full px-4 mb-4 lg:w-1/2 xl:w-1/3">
                <div
                  className="bg-slate-400 rounded-lg shadow-lg h-56 w-full flex cursor-pointer"
                  onClick={openModal}
                >
                  <Modal>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur saepe cumque ab.
                  </Modal>
                </div>
              </div>

              <div className="w-full px-4 mb-4 lg:w-1/2 xl:w-1/3">
                <div
                  className="bg-slate-400 rounded-lg shadow-lg h-56 w-full flex cursor-pointer"
                  onClick={openModal}
                >
                  <Modal>smbsf akjndas kansadkj asdkn</Modal>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ------ Begin Footer ------ */}
      <footer className="pb-10">
        <div className="w-full pt-10 border-t mt-8">
          <p className="font-medium text-sm text-slate-500 text-center">
            Dibuat dengan <span className="text-pink-500">❤️</span> oleh{" "}
            <a
              href="https://izzyzammil.netlify.app/"
              target="_blank"
              className="font-bold text-primary"
              rel="noreferrer"
            >
              Muzammil
            </a>
            , menggunakan{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="font-bold text-sky-500"
              rel="noreferrer"
            >
              Tailwind CSS
            </a>
            , dan{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              className="font-bold text-slate-700"
              rel="noreferrer"
            >
              NextJs
            </a>
          </p>
        </div>
      </footer>
      {/* ------ End Footer ------ */}
    </div>
  );
};

export default Home;
