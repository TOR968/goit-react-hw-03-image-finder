import s from '../../utils/styles.module.css';
import PropTypes from 'prop-types';

const Button = ({ pageChanger }) => {
  return (
    <button type="button" className={s.Button} onClick={pageChanger}>
      Load more
    </button>
  );
};

Button.propTypes = {
  pageChanger: PropTypes.func.isRequired,
};

/* {window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      })} */
export default Button;
