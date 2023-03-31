import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoadingSelector, usersListSelector } from 'src/stores/users/selectors';
import { getUsersDataThunkAction } from 'src/stores/users/thunks';
import { SimpleInfoBlock } from 'src/ui/SimpleInfoBlock';
import { CompanyInfoBlock } from 'src/ui/CompanyBlock';
import { SkillsInfoBlock } from 'src/ui/SkillsInfoBlock';
import { TAppDispatch } from '../../stores';

const UserDataConnected = () => {
  const dispatch = useDispatch<TAppDispatch>();
  const showPreloader = useSelector(isLoadingSelector);
  const data = useSelector(usersListSelector);

  useEffect(() => {
    dispatch(getUsersDataThunkAction());
  }, []);

  const [userData, worksData] = useMemo(() => [data?.user || {}, data?.works || []], [data]);
  const infoFields = useMemo(() => Object.keys(userData), [userData]);

  return showPreloader ? (
    <div>Загрузка...</div>
  ) : (
    <div className="App">
      <h1>Данные о пользователе</h1>
      <h4>Общая информация о пользователе</h4>
      <div className="default">
        {infoFields.map((item) => {
          return (
            <SimpleInfoBlock key={item} label={userData[item].label} value={userData[item].value} />
          );
        })}
      </div>
      <div>
        <h4>Информация о работе пользователя</h4>
        {worksData.map((item) => {
          return (
            <CompanyInfoBlock
              key={item.id}
              start={item.start}
              end={item.end}
              company={item.company}
            />
          );
        })}
      </div>
      <div>
        <h4>Информация о скилах пользователя</h4>
        {worksData.map((item) => {
          const metrics = item.metrics;
          return <SkillsInfoBlock key={item.id} {...metrics} company={item.company} />;
        })}
      </div>
      <div>
        <h4>Список компаний</h4>
        <ol>
          {data.works.map((item) => (
            <li key={item.id}>{item.company}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default UserDataConnected;
