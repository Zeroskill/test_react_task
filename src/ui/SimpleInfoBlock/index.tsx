import './InfoBlock.css';
interface ISimpleInfoBlockProps {
  label: string;
  value: string;
}
export const SimpleInfoBlock = ({ label, value }: ISimpleInfoBlockProps) => {
  return (
    <div className="block">
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </div>
  );
};
