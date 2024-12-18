import { create } from 'zustand'

const dashboardrStatusStore = create((set) => ({
    dashboardStatus: "Free", 
    setDashboardStatus: (value) => set({ dashboardStatus: value }),
}))

export default dashboardrStatusStore;
