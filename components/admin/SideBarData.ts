import Dashboard from "./Dashboard";

export type SideBarData = {
    title: string;
    index: number;
    Component: React.FC<{}>;
}

export const sideMenu: SideBarData[] = [
    {
        title: 'Dashboard',
        index: 1,
        Component: Dashboard,
    }
]