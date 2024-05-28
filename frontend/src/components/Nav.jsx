import React from "react"

import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Avatar } from 'primereact/avatar';

function App() {

    const items = [
        {
            label: 'Inicio',
            icon: 'pi pi-home',
            url: '/home'
        },
        {
            label: 'Blog',
            icon: 'pi pi-pencil',
            url: '/blog'
        },
        {
            label: 'Contacto',
            icon: 'pi pi-phone',
            url: '/contact'
        },
        {
            label: 'Preguntas frecuentes',
            icon: 'pi pi-comments',
            url: '/question'
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