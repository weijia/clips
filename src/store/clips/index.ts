import { Module } from 'vuex';
import { ClipsState, RootState } from '@/store/types';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import { storeService } from '@/electron/services/electron-store';

const state: ClipsState = {
  loading: false,
  processing: false,
  sync: 'resolved',
  premium: storeService.getPremium(),
  clips: [],
};

export const clips: Module<ClipsState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
