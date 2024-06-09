"use client";
import Layout from "../components/Layout/Layout";
import { StyledPage } from "./Page.styled";
import Video from "@/UI/Video/Video";
import AboutCompany from "@/components/AboutCompany/AboutCompany";
import Activities from "@/components/Activities/Activities";
import Production from "@/components/Production/Production";
import Customers from "@/components/Customers/Customers";

export default function Home() {
  return (
    <Layout>
      <StyledPage>
        <Video />
        <AboutCompany />
        <Activities />
        <Production />
        <Customers />
      </StyledPage>
    </Layout>
  );
}
