import React from "react";

export class List extends React.Component {
	componentWillUnmount() {
		console.log("List.js:useEffect");
	}

	render() {
		const { langs } = this.props;
		return (
			<div>
				{langs.map((lang, index) => {
					return <div key={index}>{lang}</div>;
				})}
			</div>
		);
	}
}
