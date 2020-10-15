import { GetterTree } from 'vuex';
import { RootState, NetworkState } from '@/store/types';
import { toDictionary } from '@/utils/object';

const getters: GetterTree<NetworkState, RootState> = {
  fetching: (state: NetworkState) => state.fetching,
  thisUser: (state: NetworkState) => state.thisUser,
  users: (state: NetworkState) => state.users,
  userDictionary: (state: NetworkState) => toDictionary(state.users),
  roomDictionary: (state: NetworkState) => toDictionary(state.rooms),
  rooms: (state: NetworkState) => state.rooms,
};

export default getters;
