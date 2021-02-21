import React from "react";
import { List } from "./List";
import { Form } from "./Form";
import styled from "styled-components";

import { Header } from "./Header";
import { ThemeContext } from "./contexts/ThemeContext";

const Container = styled.div`
	height: 100%;
	color: ${({ theme }) => theme.color};
	background-color: ${({ theme }) => theme.backgroundColor};
`;

class App extends React.Component {
	static contextType = ThemeContext;
	constructor(props) {
		super(props);
		this.state = { tab: "list", langs: props.data };
	}

	addLang(lang) {
		this.setState({
			tab: "list",
			langs: [...this.state.langs, lang],
		});
	}
	render() {
		const { tab, langs } = this.state;
		const [theme] = this.context;
		return (
			<Container theme={theme}>
				<Header tab={tab} setTab={(t) => this.setState({ tab: t })} />
				{tab === "list" ? (
					<List langs={langs} />
				) : (
					<Form onAddLang={(lang) => this.addLang(lang)} />
				)}
			</Container>
		);
	}
}

export default App;
