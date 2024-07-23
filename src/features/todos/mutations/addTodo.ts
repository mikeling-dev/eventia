import { resolver, useQuery } from "@blitzjs/rpc";
import { z } from "zod";

const Input = z.object({
  todoTitle: z.string().optional(),
});
export default resolver.pipe(
  resolver.zod(Input),
  resolver.authorize(),
  async (param, { session: { userId } }) => {
    const { todoTitle } = param;

    console.log("Create the following todo:", { todoTitle });
    return "Todo added";
  }
);
