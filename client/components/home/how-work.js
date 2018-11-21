/* eslint-disable jsx-a11y/iframe-has-title */
import Layout from '../layout'

export default () => (
  <Layout className='cover-page'>
    <div className='how-work-page' id='how-work-page'>
      <style jsx>
        {`
          .how-work-page{
            margin-top: 100px;
          }

          .how-header {
            text-align: center;
          }

          .how-title::after {
            content: '';
            display: inline-block;
            margin-left: 7px;
            width: 20px;
            height: 4px;
            background-color: #fe3e68;
          }

          .how-header p {
            margin: 15px 0;
            color: #fe3e68;
          }
          
          .how-content {
            padding-top: 80px;
            display: grid;
            grid-template-columns: 50% 50%;
          }

          .how-content-items {
            display: grid;
            grid-template-columns: 25% 7.5% 25% 7.5% 25%;
            text-align: center;
            align-self: center;
          }

          .how-content-items h4 {
            color: #fe3e68;
            margin-top: 10px;
            font-weight: 700;
            font-size: 20px;
          }

          .how-content-items p {
            margin: 10px 0;
            font-size: 16px;
            line-height: 20px;
          }

          .how-icon {
            display: inline-block;
            max-height: 70px;
          }

          span {
            display: inline-block;
            width: 100%;
            margin: 50% auto;
            height: 4px;
            background-color: #fe3e68;
          }

        `}
      </style>
      <div className='how-header'>
        <h2 className='how-title'>¿Cómo funciona?</h2>
        <p>Seguí el paso a paso de una Ley en el Congreso</p>
      </div>
      <div className='how-content'>
        <div className='how-content-items'>
          <div>
            <img src='/static/informate_ico.svg' alt='Hecha la Ley - On Board Steps' className='how-icon' />
            <h4>Informate</h4>
            <p>Conocé diferentes proyectos de ley del Congreso de la Nación</p>
          </div>
          <span />
          <div>
            <img src='/static/segui_ico.svg' alt='Hecha la Ley - On Board Steps' className='how-icon' />
            <h4>Seguí</h4>
            <p>El camino que recorren las leyes</p>
          </div>
          <span />
          <div>
            <img src='/static/compara_ico.svg' alt='Hecha la Ley - On Board Steps' className='how-icon' />
            <h4>Compará</h4>
            <p>
              Versiones de una ley a lo largo del proceso legislativo. Visualizá de forma dinámica e interactiva los
              cambios que recibió en cada etapa
            </p>
          </div>
        </div>
        <p>
          <iframe
            width='100%'
            height='400'
            src='https://www.youtube.com/embed/5T_4zhonhEs'
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </p>
      </div>
    </div>
  </Layout>
)