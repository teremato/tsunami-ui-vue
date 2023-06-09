import { 
    BUTTONS_ROUTE,
    CHECBOXES_ROUTE 
} from "@/app/views";


export interface ISidebarProps {
    isOpen: boolean
}

export const sidebarFields = [
    {
        name: 'Components',
        children: [
            {
                name: 'Button',
                link: BUTTONS_ROUTE
            },
            {
                name: 'Checkboxes',
                link: CHECBOXES_ROUTE
            }
        ]
    },
]