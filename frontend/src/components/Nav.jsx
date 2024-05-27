import React from "react"
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
import { Link } from 'react-router-dom';

import '../assets/css/Nav.css'

function App() {
    const itemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );
    const items = [
        {
            label: 'Inicio',
            icon: 'pi pi-home',
            url: '/'
        },
        {
            label: 'Blog',
            icon: 'pi pi-pencil',
            url: '/about'
        },
        ,        
        {
            label: 'Contacto',
            icon: 'pi pi-phone',            
        },
        {
            label: 'Preguntas frecuentes',
            icon: 'pi pi-comments'
        }
    ];

    const start = (
        <img src="../src/assets/img/logo.png" alt="logo" />        
    );
    const end = (
        <div className="flex align-items-center gap-2">
            <InputText placeholder="Buscar evento..." type="text" className="w-8rem sm:w-auto" />
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
        </div>
    );

    return (
        <>
            <Menubar model={items} start={start} end={end} />
        </>
    )
}

export default App