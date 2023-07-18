import { FC } from "react";
import { Helmet } from "react-helmet";

import { TodoList } from "../components/TodoList";

export const Home: FC = () => {
  return (
    <>
      <Helmet>
        <title>Хатняя старонка</title>
      </Helmet>
      <h1 data-testid="page-title">Хата</h1>
      <p>Гэта спiс.</p>
      <TodoList />
    </>
  );
};
