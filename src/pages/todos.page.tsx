import Layout from "@/core/layouts/Layout";
import addTodo from "@/features/todos/mutations/addTodo";
import getTodos from "@/features/todos/queries/getTodos";
import { useMutation, useQuery } from "@blitzjs/rpc";
import { Button, List, Loader, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { Vertical } from "mantine-layout-components";
import { Suspense } from "react";

export default function todos() {
  const Todos = () => {
    const [todos] = useQuery(getTodos, {});
    const [addTodoMutation] = useMutation(addTodo, {
      onSuccess: (result) => {
        notifications.show({
          title: "Mutation success",
          message: `${result} is added to Todo lists`,
        });
      },
    });
    return (
      <Vertical>
        <Button
          onClick={() => {
            addTodoMutation({
              todoTitle: "Don't Sell",
            });
          }}
        >
          Add Todo
        </Button>
        <List>
          {todos.map((todo) => (
            <List.Item key={todo.title}>
              <Text>{todo.title}</Text>
            </List.Item>
          ))}
        </List>
      </Vertical>
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
