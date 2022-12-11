import {Button} from 'antd';

export default function NumberButton ({num, handleClick}) {
  return (
    <Button
      size="large"
      className="number-button"
      name={String(num)}
      onClick={ (e) => handleClick(e, num) }
    >{num}</Button>
  );
}
