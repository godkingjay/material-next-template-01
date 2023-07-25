import { BaseColorType } from "./base";

export interface ButtonColorType extends BaseColorType {
	hover?: BaseColorType;
	active?: BaseColorType;
	focus?: BaseColorType;
	disabled?: BaseColorType;
}
