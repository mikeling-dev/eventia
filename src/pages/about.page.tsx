import Layout from "@/core/layouts/Layout";
import { BlitzPage } from "@blitzjs/next";

export default function About({}: BlitzPage) {
  return (
    <Layout title="About">
      <h1>This is about</h1>
    </Layout>
  );
}
