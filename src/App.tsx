import { Drawer, Flex, Layout, theme } from "antd";
import "./App.css";
import { TodoForm, TodoList } from "./components";
import { Content, Header } from "antd/es/layout/layout";

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        <h1>sweet todos</h1>
      </Header>

      <Layout>
        <Content>
          <Flex gap="middle" vertical>
            <TodoForm />
            <TodoList />
          </Flex>
        </Content>
        <Drawer title="Basic Drawer" placement="right" footer="Footer" open>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </Layout>
    </Layout>
  );
}

export default App;
