function Image({ ratio, src ,link}) {
    return (
      <div className="image-container">
        <div className="image-inner-container">
          <div
            className="ratio"
            style={{
              paddingTop: ratio * 100 + '%'
            }}
          >
            <div className="ratio-inner">
              <a href={link}>
                 <img src={src} alt="site"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default Image  