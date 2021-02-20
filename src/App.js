import { useState, useEffect } from "react";
import { List } from "./List";
import { Form } from "./Form";
import { getLanguages } from "./const/languages";

function App() {
	const [tab, setTab] = useState("list");
	const [langs, setLangs] = useState([]);

	// 第二引数に空の[]を入れるとmount時だけ,
	useEffect(() => {
		console.log("App.js:useEffect");
		fetchLanguages();
	}, []);

	const fetchLanguages = async () => {
		const languages = await getLanguages();
		setLangs(languages);
	};

	const addLang = (lang) => {
		setLangs([...langs, lang]);
		setTab("list");
	};

	return (
		<div>
			<header>
				<ul>
					<li onClick={() => setTab("list")}>リスト</li>
					<li onClick={() => setTab("form")}>フォーム</li>
				</ul>
			</header>
			<hr />
			{/* tabがlistのときList表示それ以外はFormを表示,初期値はlistなのでList */}
			{tab === "list" ? <List langs={langs} /> : <Form onAddLang={addLang} />}
		</div>
	);
}

export default App;
