//BEM: 层次感 ，不会冲突
// block 代码块 element 元素 modifier 装饰默认) state  动态添加
// 样式
// z-button
// z-button__element
// z-button__element--disabled
// is-checked is-enabled is-disabled
// :class=[bem.b('button')]
// const bem = creaNameSpace('button');
// bem.b('button'); // z-button
function _bem(
	prefixName: string,
	blockSuffix: string,
	element: string,
	modifier: string
) {
	if (blockSuffix) {
		prefixName += `-${blockSuffix}`;
	}
	if (element) {
		prefixName += `__${element}`;
	}
	if (modifier) {
		prefixName += `--${modifier}`;
	}

	return prefixName;
}
function createBEM(prefixName: string) {
	const b = (blockSuffix = ''): string => _bem(prefixName, blockSuffix, '', '');
	const e = (element = ''): string =>
		element ? _bem(prefixName, '', element, '') : '';
	const m = (modifier = ''): string =>
		modifier ? _bem(prefixName, '', '', modifier) : '';
	const be = (blockSuffix = '', element = ''): string =>
		blockSuffix && element ? _bem(prefixName, blockSuffix, element, '') : '';
	const bem = (blockSuffix = '', element = '', modifier: ''): string =>
		blockSuffix && element && modifier
			? _bem(prefixName, blockSuffix, element, modifier)
			: '';
	const is = (name: string, state: boolean) => (state ? `is-${name}` : '');
	return {
		b,
		e,
		m,
		be,
		bem,
		is,
	};
}
export function createNameSpace(name: string) {
	const prefixName = `z-${name}`;
	return createBEM(prefixName);
}
// const bem = creaNameSpace('icon');
// console.log('bem.b()', bem.b('box'));
// console.log('bem.e()', bem.e('element'));
// console.log('bem.m()', bem.m('modifier'));
// console.log('bem.be()', bem.be('box', 'element'));
// console.log('bem.bem()', bem.bem('box', 'element', 'modifier'));
// console.log('is', bem.is('checked', true));
