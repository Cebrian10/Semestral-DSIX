// components/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import '../assets/css/Home.css';

function Home() {
  // const navigate = useNavigate();

  // const goToAbout = () => {
  //   navigate('/about');
  // };

  const header = (
    <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
  );
  const footer = (
    <>
      <Button label="Save" icon="pi pi-check" />
      <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
    </>
  );

  return (
    <div className="cards">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="card flex justify-content-center">
          <Card title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header}>
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
              numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Home;
