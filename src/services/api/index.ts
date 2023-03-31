import { UsersMockedService } from './users/mocked';
import { UsersRestService } from './users/remote';

// потом можно вынести в сервис кофигурации
const MODE = 'mocked';

export const useApiServices = () => {
  return MODE === 'mocked'
    ? {
        users: new UsersMockedService()
      }
    : {
        users: new UsersRestService()
      };
};
