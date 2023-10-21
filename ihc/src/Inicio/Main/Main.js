import React, { useEffect, useState } from 'react';
import './main.css'
import { ImgCarousel } from './ImgCarousel';
import { ProductCarousel } from './ProductCarousel';
import { AcordionItem } from './AcordionItem';
import { ContainerCardsIH } from '../../Home/ContainerCardsIH';
import { SearchBt } from '../Main/SearchBt';

const acordionTexts = [
  {
    data: "#flush-collapseOne",
    arial: "flush-collapseOne",
    name: "¿Quien somos?",
    id: "flush-collapseOne",
    text: "iHome Creations, nuestra pasión es la innovación en el hogar. Somos una empresa dedicada a proporcionar soluciones inteligentes para hacer que la vida cotidiana sea más eficiente, cómoda y segura. Nos enorgullece ser líderes en la revolución de la automatización del hogar y en la oferta de dispositivos inteligentes que transforman las casas en espacios conectados y autónomos.",
  },
  {
    data: "#flush-collapseTwo",
    arial: "flush-collapseTwo",
    name: "Nuestra misión",
    id: "flush-collapseTwo",
    text: "Nuestra misión en iHome Creations es empoderar a las familias y a los individuos para que tomen el control de su entorno doméstico. Creemos que la tecnología debería simplificar la vida, y estamos comprometidos a ofrecer productos de vanguardia que logren precisamente eso. Al proporcionar soluciones accesibles y fáciles de usar, facilitamos la automatización de tareas diarias y brindamos un mayor bienestar en el hogar.",
  },
  {
    data: "#flush-collapseThree",
    arial: "flush-collapseThree",
    name: "Nuestra experiencia",
    id: "flush-collapseThree",
    text: "Con años de experiencia en la industria de la tecnología para el hogar, nuestro equipo de expertos está constantemente investigando y evaluando las últimas innovaciones en dispositivos inteligentes. Trabajamos incansablemente para ofrecer a nuestros clientes una selección cuidadosamente curada deproductos de alta calidad que abarcan iluminación inteligente, sistemas de seguridad, termostatos conectados, electrodomésticos inteligentes y mucho más.",
  },
  {
    data: "#flush-collapseFour",
    arial: "flush-collapseFour",
    name: "Nuestra promesa",
    id: "flush-collapseFour",
    text: "En iHome Creations, creemos en la  transparencia, la confiabilidad y el servicio al cliente excepcional. Nos esforzamos por ofrecer productos de marcas reconocidas y respaldados por garantías sólidas. Nuestro equipo de atención al cliente está siempre dispuesto a responder tus preguntas y proporcionar asesoramiento experto para ayudarte a encontrar la solución adecuada para tu hogar.",
  },
];

function Main(props){
  const products = props.datos; 
  const isDataAvailable = products.length > 0;
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect   (() => {
    setFilteredProducts(products);
  }, [products]);

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
  
    const filteredProducts = isDataAvailable
      ? products.filter((product) =>
          product.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      : [];
  
    setFilteredProducts(filteredProducts);
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTermLowerCase = searchTerm.toLowerCase();
  
    const filteredProducts = isDataAvailable
      ? products.filter((product) => {
          const productName = product.name.toLowerCase();
          return productName.includes(searchTermLowerCase);
        })
      : [];
  
    setFilteredProducts(filteredProducts);
  };

  return(
    <main className="container-fluid p-0">
      <section>
        <div className="row">
          <div className="col-sm-8 px-0">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <ImgCarousel linkImgC={"https://i.imgur.com/hEYybWv.jpg"} altImgC={"img1"} />
                </div>
                <div className="carousel-item">
                  <ImgCarousel linkImgC={"https://i.imgur.com/3hTiHxm.jpg"} altImgC={"img2"}/>
                </div>
                <div className="carousel-item">
                  <ImgCarousel linkImgC={"https://i.imgur.com/628A70p.jpg"} altImgC={"img3"}/>
                </div>
                <div className="carousel-item">
                  <ImgCarousel linkImgC={"https://i.imgur.com/fNe6H9e.jpg"} altImgC={"img4"}/>
                </div>
                <div className="carousel-item">
                  <ImgCarousel linkImgC={"https://i.imgur.com/KXJ4zuL.jpg"} altImgC={"img5"}/>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-sm-4 px-0 color-card text-center"
            id="scrollspyHeading1"
          >
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade w-100 h-100 d-flex align-items-center"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <ProductCarousel src={isDataAvailable ? products[0].imageSrc : []} alt={"smartLock"} name={isDataAvailable ? products[0].name : []} price={isDataAvailable ? products[0].price : []} stock={isDataAvailable ? products[0].stock : []}/>
                </div>
                <div className="carousel-item">
                  <ProductCarousel src={isDataAvailable ? products[1].imageSrc : []} alt={"sensor"} name={isDataAvailable ? products[1].name : []} price={isDataAvailable ? products[1].price : []} stock={isDataAvailable ? products[1].stock : []}/>
                </div>
                <div className="carousel-item">
                  <ProductCarousel src={isDataAvailable ? products[2].imageSrc : []} alt={"alexa1"} name={isDataAvailable ? products[2].name : []} price={isDataAvailable ? products[2].price : []} stock={isDataAvailable ? products[2].stock : []}/>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row" id="scrollspyHeading2">
          <div
            className="accordion w-100 h-100 px-2"
            id="accordionPanelsStayOpenExample"
          >
            <div
              className="accordion accordion-flush text-center"
              id="accordionFlushExample"
            >
              <div
                  data-bs-spy="scroll"
                  data-bs-target="#navbar-example2"
                  data-bs-root-margin="0px 0px -40%"
                  data-bs-smooth-scroll="true"
                  className="scrollspy-example w-100 h-100"
                  tabIndex={0}
              >
                <AcordionItem dataBsTargetAI={acordionTexts[0].data} arialControlsAI={acordionTexts[0].arial} nameAI={acordionTexts[0].name} idAI={acordionTexts[0].id} textAI={acordionTexts[0].text}/>
              </div>
              <AcordionItem dataBsTargetAI={acordionTexts[1].data} arialControlsAI={acordionTexts[1].arial} nameAI={acordionTexts[1].name} idAI={acordionTexts[1].id} textAI={acordionTexts[1].text}/>
              <AcordionItem dataBsTargetAI={acordionTexts[2].data} arialControlsAI={acordionTexts[2].arial} nameAI={acordionTexts[2].name}  idAI={acordionTexts[2].id} textAI={acordionTexts[2].text}/>
              <AcordionItem dataBsTargetAI={acordionTexts[3].data} arialControlsAI={acordionTexts[3].arial} nameAI={acordionTexts[3].name}  idAI={acordionTexts[3].id} textAI={acordionTexts[3].text}/>
            </div>
          </div>
        </div> 
      </section>
      <section className="st-contPC">
        <div className="d-flex justify-content-end align-items-center me-5">
          <div className="search-container">
            <SearchBt
              handleSearch={handleSearch}
              searchTerm={searchTerm}
              handleSearchChange={handleSearchChange}
            />
          </div>
        </div>
        <div>
          <ContainerCardsIH p={filteredProducts} link={'/login'} />
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col-sm-7 p-0" id="scrollspyHeading3">
            <div
              data-bs-spy="scroll"
              data-bs-target="#navbar-example2"
              data-bs-root-margin="0px 0px -40%"
              data-bs-smooth-scroll="true"
              className="scrollspy-example st-con w-100 h-100 p-4"
              tabIndex={0}
            >
              <h4>Contáctenos</h4>
              <h6>iHome creations</h6>
              <p>
                PBX: +57 601 000 00XX | Línea Gratuita Nacional: 01 8000 000 XXX |
                Fax: +57 601 000 00XX opción 3
              </p>
              <p>
                Email para notificaciones judiciales:
                ihomecreationsjudicial@ihcr.co
              </p>
              <p>Email para PQRs: ihomecreationspqr@ihcr.co</p>
              <p>Email para RRHH: ihomecreationsrrhh@ihcr.co</p>
            </div>
          </div>
          <div className="col-sm-5 p-0" id="scrollspyHeading4">
            <div
              data-bs-spy="scroll"
              data-bs-target="#navbar-example2"
              data-bs-root-margin="0px 0px -40%"
              data-bs-smooth-scroll="true"
              className="scrollspy-example st-loc w-100 h-100 p-4"
              tabIndex={0}
            >
              <h4>Localízenos</h4>
              <h6>Sede Administrativa</h6>
              <p>
                Carrera 20B N°. 2A - 13, Torre 11, Piso 5, 9 y 13 Edificio Bonaz,
                Bogotá D.C. Lunes a viernes 8:00 a.m. a 4:00 p.m.
              </p>
              <h6>Recibo de correspondencia</h6>
              <p>
                Carrera 11C N°. 9D - 11 Edificio Lordnaz, Bogotá D.C. Lunes a
                viernes 8:00 a.m. a 7:00 p.m.
              </p>
              <h6>Centro de atención al ciudadano</h6>
              <p>
                Carrera 70A N°. 29B - 3, Bogotá D.C. Lunes a viernes 8:00 a.m. a
                6:00 p.m.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export {Main};