import React from "react";
import { List } from "./List";
import { Form } from "./Form";
import { getLanguages } from "./const/languages";
import styled from "styled-components";
import { withLoading } from "./hoc/withLoading";
import { Modal } from "./components/modal";

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 24px 64px 0;
	border-bottom: 1px solid #e0e0e0;
`;

const HeaderUl = styled.ul`
	display: flex;
	margin: 0;
	padding: 0;
`;

const HeaderLi = styled.li`
	list-style: none;
	padding: 4px 12px;
	cursor: pointer;
	border-bottom: ${(props) => (props.focused ? "2px solid #F44336" : "none")};
`;

class App extends React.Component {
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
		return (
			<div>
				<Header>
					<HeaderUl>
						<HeaderLi
							focused={tab === "list"}
							onClick={() => this.setState({ tab: "list" })}
						>
							List
						</HeaderLi>
						<HeaderLi
							focused={tab === "form"}
							onClick={() => this.setState({ tab: "form" })}
						>
							Form
						</HeaderLi>
					</HeaderUl>
				</Header>
				{tab === "list" ? (
					<List langs={langs} />
				) : (
					<Form onAddLang={(lang) => this.addLang(lang)} />
				)}
			</div>
		);
	}
}

export default withLoading(App, getLanguages);
