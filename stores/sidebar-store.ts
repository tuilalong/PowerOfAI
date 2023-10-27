import { create } from "zustand";

export interface SidebarState {
  isOpen: boolean;
  isMinimal: boolean;
  handleClose: () => void;
  handleOpenOrClose: () => void;
  handleChangeSidebar: () => void;
}

export const useSidebarStore = create<SidebarState>()((set) => ({
  isOpen: false,
  isMinimal: false,
  handleOpenOrClose: () =>
    set((state: any) => ({ ...state, isOpen: !state.isOpen })),
  handleClose: () => set((state: any) => ({ ...state, isOpen: false })),
  handleChangeSidebar: () =>
    set((state: any) => ({ ...state, isMinimal: !state.isMinimal })),
}));
