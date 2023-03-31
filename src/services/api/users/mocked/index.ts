import AbstractBackendService from 'src/services/types';

import { data } from 'src/mocks/users/data';
import UserDataMapper from '../../../mappers/users';
import { IMappedUserData } from '../types';
const usersMapper = new UserDataMapper();

export class UsersMockedService extends AbstractBackendService {
  async getData(): Promise<IMappedUserData> {
    await new Promise((r) => setTimeout(r, 2000));
    return usersMapper.map(data);
  }
}
