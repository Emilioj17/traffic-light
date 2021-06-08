import React, { useState } from "react";
import ReactDOM from "react-dom";

//create your first component
export const Home = () => {
	const [count, setCount] = useState(0);
	return (
		if (count==1) {
			<div>Hola</div>
		} else if (count==2){

		} else if (count==3){
			
		} else {
			<div className="text-center d-flex justify-content-center mt-5">
				<div className="bg-dark rounded p-2">
					<div
						className="bg-danger rounded-circle"
						style={{ width: "10vw", height: "10vw" }}></div>
					<div
						className="bg-warning rounded-circle"
						style={{ width: "10vw", height: "10vw" }}></div>
					<div
						className="bg-success rounded-circle"
						style={{ width: "10vw", height: "10vw" }}></div>
				</div>
			</div>

		};

	);
}
