import React from "react";

const LANGUAGES = ["JavaScript", "C++", "Ruby", "Java", "PHP", "Go"];

export class List extends React.Component {
	render() {
		const { title } = this.props;
		return (
			<div>
				<h4>{title}</h4>
				{LANGUAGES.map((lang, index) => {
					return <div key={index}>{lang}</div>;
				})}
			</div>
		);
	}
}
