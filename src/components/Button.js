import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ to, href, typeButton, children, leftIcon, rightIcon, onClick, ...passProps }) {
  let Comp = 'button';

  const props = {
    onClick,
    ...passProps,
  };

  if (typeButton && typeButton.includes('disable')) {
    delete props.onClick;
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const baseButton =
    'inline-flex items-center justify-center min-w-[100px] text-[16px] font-[700] py-[9px] px-[16px] rounded-[4px] bg-white border-transparent border-solid border-[1px] ml-2 select-none ' +
    typeButton;
  return (
    <Comp className={baseButton} {...props}>
      {leftIcon && <span className="mr-2 inline-block w-5 items-center">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="ml-2 inline-block w-5 items-center">{rightIcon}</span>}
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  typeButton: PropTypes.string,
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
