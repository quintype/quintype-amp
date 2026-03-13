import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import "jest-styled-components";

configure({ adapter: new Adapter() });
