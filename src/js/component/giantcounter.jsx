import React, { useState } from "react";
import Counter from "./counter.jsx";
import Nyancat from "./nyancat.jsx";

const Giantcounter = () => {
	const [clock, setClock] = useState();
	const [stop, setStop] = useState(true);

	const RESET = () => {
		setClock(!clock);
	};

	return (
		<div>
			<Nyancat />
			<div className="counter">
				<div className="counterBox">
					<div className="counterBox__item">
						<Counter
							start={0}
							time={1000000}
							clock={clock}
							stop={stop}
						/>
					</div>
					<div className="counterBox__item">
						<Counter
							start={0}
							time={100000}
							clock={clock}
							stop={stop}
						/>
					</div>
					<div className="counterBox__item">
						<Counter
							start={0}
							time={10000}
							clock={clock}
							stop={stop}
						/>
					</div>
					<div className="counterBox__item">
						<Counter
							start={0}
							time={1000}
							clock={clock}
							stop={stop}
						/>
					</div>
				</div>

				<div className="buttonsControl">
					<button
						className="buttonsControl__item"
						onClick={() => {
							setStop(true);
						}}>
						<i className="fas fa-play"></i>
					</button>
					<button
						className="buttonsControl__item"
						onClick={() => {
							setStop(false);
						}}>
						<i className="fas fa-pause"></i>
					</button>
					<button className="buttonsControl__item" onClick={RESET}>
						Reset
					</button>
				</div>
			</div>
		</div>
	);
};
export default Giantcounter;
