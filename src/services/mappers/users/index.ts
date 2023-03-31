import { data } from '../../../mocks/users/data';
import { IMappedUserData, IUserInfo, IWorkInfo } from '../../api/users/types';
import { uniqueId } from 'lodash';

export default class UserDataMapper {
  map(userData: typeof data): IMappedUserData {
    const localData = Object.assign(userData, {});
    return {
      user: this.mapMainInfo(localData.user),
      works: this.mapWorkInfo(localData.works)
    };
  }

  private mapMainInfo(info: (typeof data)['user']): IUserInfo {
    const mappedData = {};
    Object.keys(info).forEach((item) => {
      switch (item) {
        case 'firstname': {
          mappedData['firstname'] = {
            label: 'Имя',
            value: info.firstname
          };
          break;
        }
        case 'lastname': {
          mappedData['lastname'] = {
            label: 'Фамилия',
            value: info.lastname
          };
          break;
        }
        case 'age': {
          mappedData['age'] = {
            label: 'Возраст',
            value: info.age
          };
          break;
        }
        case 'gender': {
          mappedData['gender'] = {
            label: 'Пол',
            value: (info as unknown as { gender: string }).gender
          };
          break;
        }
        default: {
          break;
        }
      }
    });
    return mappedData as IUserInfo;
  }
  private mapWorkInfo(info: (typeof data)['works']): IWorkInfo[] {
    return info.map((item) => {
      const localItem = Object.assign(item, {}) as unknown as IWorkInfo;
      if (localItem.metrics != null) {
        localItem.metrics.count = Number(localItem.metrics.count) ?? 0;
        localItem.metrics.front = localItem.metrics.front ? 'Да' : 'Нет';
        localItem.metrics.back = localItem.metrics.back ? 'Да' : 'Нет';
      } else {
        localItem.metrics = {};
        localItem.metrics.count = 0;
        localItem.metrics.front = 'Нет';
        localItem.metrics.back = 'Нет';
      }
      return { ...localItem, id: uniqueId() } as IWorkInfo;
    });
  }
}
