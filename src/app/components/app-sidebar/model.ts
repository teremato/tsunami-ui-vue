import { 
    BUTTONS_ROUTE,
    CHECBOXES_ROUTE,
    CHECKBOX_GROUP_ROUTE,
    SELECT_ROUTE,
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
                name: 'Checkbox',
                link: CHECBOXES_ROUTE
            },
            {
                name: 'Checkbox-group',
                link: CHECKBOX_GROUP_ROUTE
            },
            {
                name: 'Select',
                link: SELECT_ROUTE
            }
        ]
    },
]