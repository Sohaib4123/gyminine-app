//util/tailwind.ts
import { create } from "twrnc";
import config from "../../tailwind.config"; // <-- load your theme

const tw = create(config);

export default tw;