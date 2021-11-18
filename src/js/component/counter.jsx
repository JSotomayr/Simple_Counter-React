import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Counter(props) {
	const [number, setNumber] = useState(props.start);

	useEffect(() => {
		const interval = setInterval(() => {
			if (props.stop) {
				if (number != 9) {
					setNumber(number + 1);
				} else {
					setNumber(0);
				}
			}
		}, props.time);
		return () => clearInterval(interval);
	}, [number, props.stop]);

	useEffect(() => {
		setNumber(0);
	}, [props.clock]);

	return (
		<div>
			<span>{number}</span>
		</div>
	);
}

Counter.propTypes = {
	start: PropTypes.number,
	time: PropTypes.number,
	clock: PropTypes.func,
	stop: PropTypes.bool
};

export default Counter;
