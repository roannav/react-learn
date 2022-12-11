import {Button} from 'antd';

export default function ActionButton ({action, handleClick}) {
  return (
    <Button
      size="large"
      className="calc-button"
      onClick={ (e) => handleClick(e) }
    >{action}</Button>
  );
}
