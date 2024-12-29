/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */

import { browser } from "$app/environment";

export const storage =
	browser ? window.localStorage
		: {
			getItem: (...args: any) => null,
			setItem: (...args: any) => undefined,
		};
