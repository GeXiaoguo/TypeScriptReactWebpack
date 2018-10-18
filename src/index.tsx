import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

import {AgGridView} from "./components/AggridView"

ReactDOM.render(
    <Hello compiler="TypeScript" framework="Reacfffft" />,
    document.getElementById("example")
);

ReactDOM.render(
    <AgGridView />,
    document.getElementById("mygrid")
);