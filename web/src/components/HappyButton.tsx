import React from 'react';

import { FiArrowRight, FiArrowLeft, FiPlus } from 'react-icons/fi';
import colors from '../utils/colors';
import { Link, useHistory } from 'react-router-dom';
import '../styles/components/HappyButton.css';

interface ButtonTypes {
  type: 'forward' | 'back' | 'plus',
  iconSize?: number,
  iconColor?: string,
  to?: string,
}

function HappyButton(props: ButtonTypes) {
  const type = props.type;
  const size = props.iconSize || 26;
  const iconColor = props.iconColor || colors.colorIconLight;
  const to = props.to || '/';

  const { goBack } = useHistory();

  if (type === 'forward') {
    return (
      <Link to={to} className="happy-button">
        <FiArrowRight size={size} color={iconColor} />
      </Link>
    )
  } else if (type === 'back') {
    return (
      <button onClick={goBack} className="happy-button">
        <FiArrowLeft size={size} color={iconColor} />
      </button>
    )
  } else { //(type === 'plus')
    return (
      <Link to={to} className="happy-button">
        <FiPlus size={size} color={iconColor} />
      </Link>
    )
  }
}

export default HappyButton;
