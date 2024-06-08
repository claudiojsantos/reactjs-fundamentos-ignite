import { Post } from "./Post";
import { Header } from "./components/Header";

import './global.css';

export default function App() {
  return (
    <>
      <Header />
      <Post author="Cláudio Santos" content="lorem teste" />
      <Post author="Aldo Campos" content="Menino lindo" />
    </>
  );
}
