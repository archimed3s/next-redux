import {withRouter, SingletonRouter} from 'next/router';
import Link from 'next/link';
import {Children, cloneElement} from 'react';

interface IActiveLink {
	router: SingletonRouter;
	children: {
		props: {
			className: null
		}
	};
	href: string;
	passHref?: boolean;
	exact?: boolean;
}

/**
 * ActiveLink is function that returns new HOC element with or with out active class
 */
const ActiveLink = ({router, children, exact, ...props}: IActiveLink) => {
	const child: any = Children.only(children); // TODO: refactor child type to an interface

	let className: null | string = child.props.className || null;

	if (router.asPath) {
		if (exact && router.asPath === props.href) {
			className = `${className !== null ? className : ''} active`.trim();
		} else if (!exact && router.asPath.indexOf(props.href) !== -1) {
			className = `${className !== null ? className : ''} active`.trim();
		}
	}

	return <Link {...props}>{cloneElement(child, {className})}</Link>;
};

export default withRouter(ActiveLink);
