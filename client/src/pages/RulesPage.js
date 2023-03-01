import Card from "../components/Card";
import { useParams } from "react-router-dom";
import RulePageItem from "../components/RulePageItem";
import { useSelector } from "react-redux";

function RulesPage() {
  const { id } = useParams();
  const servers = useSelector((state) => state.servers);
  return (
    <Card>
      {servers.map((server) => (
        <RulePageItem
          server={server}
          id={id}
          key={server._id}
          description={server.description}
          title={server.title}
          version={server.version}
          rules={server.rules}
        />
      ))}
    </Card>
  );
}

export default RulesPage;
