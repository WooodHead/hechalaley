const Button = ({ title, typeOfButton }) => (
  <div>
    <style jsx>
      {`
        button {
          display: block;
          font-size: 16px;
          padding: 11px 35px;
          border-radius: 20px;
          font-weight: 100;
          margin-top: 20px;
          text-align: center;
        }
        .primary {
          background-color: rgba(43, 50, 69, 1);
          box-shadow: 0px 4px 14px rgba(43, 50, 69, 0.39);
          color: #fff;
        }
        .primary:hover {
          cursor: pointer;
          background-color: rgba(43, 50, 69, 0.9);
          box-shadow: 0px 4px 14px rgba(43, 50, 69, 0.2);
          transition: 0.3s ease;
        }
        .secondary {
          display: block;
          border: 1px solid rgba(43, 50, 69, 1);
          color: rgba(43, 50, 69, 1);
        }
        .secondary:hover {
          cursor: pointer;
        }
      `}
    </style>
    {/* Use typeOfButton to make custom styles */}
    <button className={typeOfButton || 'primary'}>{title}</button>
  </div>
)

export default Button
