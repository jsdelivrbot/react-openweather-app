import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
	return (
		<div>
			<Sparklines data={props.data} svgWidth={180} svgHeight={120}>
				<SparklinesLine color={props.color} />
			</Sparklines>
		</div>
	);
}