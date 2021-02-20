import styled from "styled-components";
import { useState, useEffect } from "react";
import { List } from "./List";
import { Form } from "./Form";
import { withLoading } from "./hoc/withLoading";
import { getLanguages } from "./const/languages";

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 24px 64px 0;
	border-bottom: 1px solid #e0e0e0;
`;

const HeaderUL = styled.ul`
	display: flex;
	margin: 0;
	padding: 0;
`;
const HeaderLi = styled.li`
	list-style: none;
	cursor: pointer;
	padding: 4px 12px;
	border-bottom: ${(props) => (props.focused ? "2px solid #F44336" : "none")};
`;

function App({ data }) {
	const [tab, setTab] = useState("list");
	const [langs, setLangs] = useState(data);

	const addLang = (lang) => {
		setLangs([...langs, lang]);
		setTab("list");
	};

	return (
		<div>
			<Header>
				<HeaderUL>
					<HeaderLi focused={tab === "list"} onClick={() => setTab("list")}>
						リスト
					</HeaderLi>
					<HeaderLi focused={tab === "form"} onClick={() => setTab("form")}>
						フォーム
					</HeaderLi>
				</HeaderUL>
			</Header>
			{/* tabがlistのときList表示それ以外はFormを表示,初期値はlistなのでList */}
			{tab === "list" ? <List langs={langs} /> : <Form onAddLang={addLang} />}
		</div>
	);
}

export default withLoading(App, getLanguages);
