import React from "react";
import { Layout, Card, Typography } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export default function AboutAntd() {
  return (
    <Content style={{ padding: 16, maxWidth: 1000, margin: "0 auto" }}>
      <Card>
        <Title level={3} style={{ marginTop: 0 }}>About (Ant Design)</Title>
        <Paragraph type="secondary">
          Segunda página para practicar Router y Layout de Ant Design.
        </Paragraph>

        <ul>
          <li>Instalación</li>
          <li>5 componentes</li>
          <li>Home compuesta</li>
        </ul>
      </Card>
    </Content>
  );
}