const arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const Shimmer = () => {
  return (
    <div className="shimmer-container">
     {arr.map(()=>{
        return  <div className="shimmer-card">
        <div className="shimmer-card-img"></div>
        <h3 className="shimmer-card-title"></h3>
        <h4 className="shimmer-card-cuisines"></h4>
        <h4 className="shimmer-card-ratings"></h4>
        <h4 className="shimmer-card-time"></h4>
      </div>
     })}
     
    </div>
  );
};
export default Shimmer;
