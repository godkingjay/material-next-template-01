import { BaseColorType } from "./base";

export interface ButtonColorType extends BaseColorType {
	type: "button";
	hover?: BaseColorType;
	active?: BaseColorType;
	focus?: BaseColorType;
	disabled?: BaseColorType;
}
