//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

const Home = () => {
	const [count, setCount] = useState(0);
	if (count == 1) {
		return (
			<div className="text-center d-flex justify-content-center mt-5">
				<div className="bg-dark rounded p-2">
					<div
						className="bg-danger rounded-circle"
						onClick={() => setCount(1)}
						style={{
							width: "10vw",
							height: "10vw",
							boxShadow: "0px 0px 50px 15px red"
						}}></div>
					<div
						className="bg-warning rounded-circle"
						onClick={() => setCount(2)}
						style={{ width: "10vw", height: "10vw" }}></div>
					<div
						className="bg-success rounded-circle"
						onClick={() => setCount(3)}
						style={{ width: "10vw", height: "10vw" }}></div>
				</div>
			</div>
		);
	} else if (count == 2) {
		return (
			<div className="text-center d-flex justify-content-center mt-5">
				<div className="bg-dark rounded p-2">
					<div
						className="bg-danger rounded-circle"
						onClick={() => setCount(1)}
						style={{ width: "10vw", height: "10vw" }}></div>
					<div
						className="bg-warning rounded-circle"
						onClick={() => setCount(2)}
						style={{
							width: "10vw",
							height: "10vw",
							boxShadow: "0px 0px 50px 15px orange"
						}}></div>
					<div
						className="bg-success rounded-circle"
						onClick={() => setCount(3)}
						style={{ width: "10vw", height: "10vw" }}></div>
				</div>
			</div>
		);
	} else if (count == 3) {
		return (
			<div className="text-center d-flex justify-content-center mt-5">
				<div className="bg-dark rounded p-2">
					<div
						className="bg-danger rounded-circle"
						onClick={() => setCount(1)}
						style={{ width: "10vw", height: "10vw" }}></div>
					<div
						className="bg-warning rounded-circle"
						onClick={() => setCount(2)}
						style={{ width: "10vw", height: "10vw" }}></div>
					<div
						className="bg-success rounded-circle"
						onClick={() => setCount(3)}
						style={{
							width: "10vw",
							height: "10vw",
							boxShadow: "0px 0px 50px 15px green"
						}}></div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="text-center d-flex justify-content-center mt-5">
				<div className="bg-dark rounded p-2">
					<div
						className="bg-danger rounded-circle"
						onClick={() => setCount(1)}
						style={{ width: "10vw", height: "10vw" }}></div>
					<div
						className="bg-warning rounded-circle"
						onclick={() => setCount(2)}
						style={{ width: "10vw", height: "10vw" }}></div>
					<div
						className="bg-success rounded-circle"
						onclick={() => setCount(3)}
						style={{ width: "10vw", height: "10vw" }}></div>
				</div>
			</div>
		);
	}
};

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
