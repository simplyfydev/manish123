const CallToActionOne = ({ extraClassName, buttonClass }) => {
  return (
    <section className={`commonSection ${extraClassName}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-12 col-md-6 text-center">1</div>
          <div className="col-lg-3 col-sm-12 col-md-6 text-center">2</div>
          <div className="col-lg-3 col-sm-12 col-md-6 text-center">3</div>
          <div className="col-lg-3 col-sm-12 col-md-6 text-center">4</div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionOne;
