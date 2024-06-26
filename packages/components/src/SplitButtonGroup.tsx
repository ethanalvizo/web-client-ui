import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

interface SplitButtonGroupProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  'data-testid'?: string;
}

export function SplitButtonGroup(props: SplitButtonGroupProps): JSX.Element {
  const { children, className, style, 'data-testid': dataTestId } = props;

  return (
    <div
      className={classNames('btn-group', className)}
      style={style}
      role="group"
      data-testid={dataTestId}
    >
      {children}
    </div>
  );
}

SplitButtonGroup.displayName = 'SplitButtonGroup';

SplitButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  'data-testid': PropTypes.string,
};

SplitButtonGroup.defaultProps = {
  className: null,
  style: {},
  'data-testid': undefined,
};

export default SplitButtonGroup;
