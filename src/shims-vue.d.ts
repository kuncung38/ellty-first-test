/** biome-ignore-all lint/complexity/noBannedTypes: Required */
/** biome-ignore-all lint/suspicious/noExplicitAny: Required */
declare module "*.vue" {
	import type { DefineComponent } from "vue";
	const component: DefineComponent<{}, {}, any>;
	export default component;
}
