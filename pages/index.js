import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import TodoFilter from "../components/todofilter/todofilter";
import TodoForm from "../components/todoform/todoform";
import TodoTasks from "../components/todotasks/todotasks";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>TodoMatic</title>
        <meta name="TodoMatic" content="everyday todolist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <h1>TodoMatic</h1>
          <h2>What needs to be done</h2>
        </header>
        <TodoForm />
        <TodoFilter />
        <TodoTasks />
      </main>
    </>
  );
}
