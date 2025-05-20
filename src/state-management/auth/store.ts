import { create } from 'zustand';

interface AuthStore {
  username: string;
  login: (username: string) => void;
  logout: () => void;
}
// #region Zustand

const useAuthStore = create<AuthStore>((set) => ({
  username: '',
  login: (username) => set(() => ({ username: username })),
  logout: () => set(() => ({ username: '' })),
}));
// #endregion

export default useAuthStore;
