import React from "react";
import { Layout } from "antd";
import AntHero from "../components/antd/AntHero";
import AntStats from "../components/antd/AntStats";
import AntFormCard from "../components/antd/AntFormCard";

const { Content } = Layout;

export default function HomeAntd() {
  return (
    <Content style={{ padding: 16, maxWidth: 1000, margin: "0 auto" }}>
      <AntHero />
      <AntStats />
      <AntFormCard />
    </Content>
  );
}