import classNames from 'classnames'

const BillCardsList = ({ className, title, children }) => (
  <div className={classNames('cards-list', className)}>
    <style jsx>
      {`
        .cards-list {
        }

        .card-list__title {
          font-size: 35px;
          font-weight: 600;
          text-align: center;
          padding-bottom: 57px;
        }

        .card-list__subtitle {
          font-size: 30px;
          font-weight: 400;
          letter-spacing: 0.3px;
          padding-bottom: 70px;
        }

        .card-list__subtitle::after {
          content: '';
          display: inline-block;
          margin-left: 7px;
          width: 20px;
          height: 4px;
          background-color: #fe3e68;
        }

        .cards-list__childrens {
          position: relative;
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-bottom: 4em;
        }
      `}
    </style>
    <h2 className='card-list__title'>Proyectos publicados</h2>
    <p className='card-list__subtitle'>{title}</p>
    <div className='cards-list__childrens'>
      {children}
    </div>
  </div>
)

export default BillCardsList
