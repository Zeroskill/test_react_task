import { useCallback, useState } from 'react';
import './SkillsInfoBlock.css';
interface ISimpleInfoBlockProps {
  company: string;
  front: string;
  back: string;
  count: number;
}
export const SkillsInfoBlock = ({ company, front, back, count }: ISimpleInfoBlockProps) => {
  const [blockIsOpen, setBlockIsOpen] = useState(false);
  const switchOpenedState = useCallback(() => {
    setBlockIsOpen(!blockIsOpen);
  }, [blockIsOpen]);
  return (
    <div onClick={switchOpenedState} className="skillsBlock">
      {blockIsOpen === true ? (
        <>
          <div>Нажмите чтобы скрыть описание скилов в компании {company}</div>
          <div>Front: {front}</div>
          <div>Back: {back}</div>
          <div>Count: {count ? count : 'Количественная метрика отсуствует'}</div>
        </>
      ) : (
        'Нажмите чтобы показать описание скилов в компании' + ' ' + company
      )}
    </div>
  );
};
