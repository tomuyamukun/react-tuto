import { useState, useContext } from "react";
import { Form } from "./Form";
import { List } from "./List";
import { Header } from "./Header";
import styled from "styled-components";
import { ThemeContext } from "./contexts/ThemeContext";

const Container = styled.div`
	height: 100%;
	color: ${({ theme }) => theme.color};
	background-color: ${({ theme }) => theme.backgroundColor};
`;

function App({ data }) {
	const [tab, setTab] = useState("list");
	const [langs, setLangs] = useState(data);

	const addLang = (lang) => {
		setLangs([...langs, lang]);
		setTab("list");
	};

	const [theme] = useContext(ThemeContext);

	return (
		<Container theme={theme}>
			<Header tab={tab} setTab={setTab} />
			{/* tabがlistのときList表示それ以外はFormを表示,初期値はlistなのでList */}
			{tab === "list" ? <List langs={langs} /> : <Form onAddLang={addLang} />}
		</Container>
	);
}

export default App;
