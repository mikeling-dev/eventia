import { BlitzPage } from "@blitzjs/next";
import { useStringParam } from "src/utils/utils";

export default function TeamPage({}: BlitzPage) {
  const id = useStringParam("id");
  return <div>Player {id} is the best</div>;
}
