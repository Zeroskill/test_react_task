import './CompanyBlock.css';
interface ISimpleInfoBlockProps {
  start: string;
  end: string;
  company: string;
}
export const CompanyInfoBlock = ({ start, end, company }: ISimpleInfoBlockProps) => {
  return (
    <div className="companyBlock">
      <div className="companyRow">
        <div className="companyLabel">Начало работы</div>
        <div> {start}</div>
      </div>
      <div className="companyRow">
        <div className="companyLabel">Окончание работы</div>
        <div> {end}</div>
      </div>
      <div className="companyRow">
        <div className="companyLabel">Компания</div>
        <div> {company}</div>
      </div>
    </div>
  );
};
