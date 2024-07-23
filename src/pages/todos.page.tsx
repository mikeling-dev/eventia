import Layout from "@/core/layouts/Layout";
import getTodos from "@/features/todos/queries/getTodos";
import { useQuery } from "@blitzjs/rpc";
import { List, Loader, Text } from "@mantine/core";
import { Suspense } from "react";

export default function todos() {
  const Todos = () => {
    const [todos] = useQuery(getTodos, {
      //   search: "",
    });
    return (
      <List>
        {todos.map((todo) => (
          <List.Item key={todo.title}>
            <Text>{todo.title}</Text>
          </List.Item>
        ))}
      </List>
    );
  };
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Todos />
      </Suspense>
    </Layout>
  );
}
