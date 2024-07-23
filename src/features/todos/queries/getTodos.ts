import { resolver } from "@blitzjs/rpc";
import { z } from "zod";

const Input = z.object({
  search: z.string().optional(),
});

export default resolver.pipe(resolver.authorize(), resolver.zod(Input), async ({ search }) => {
  console.log("Looking for ", { search });
  const todos = [{ title: "Buy Bitcoin" }, { title: "Buy Ethereum" }, { title: "Buy Doge" }];

  return todos;
});
